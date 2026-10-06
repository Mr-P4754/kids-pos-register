/**
 * イベント・店舗用 簡易POSレジシステム - Service Worker
 * 完全オフライン動作対応 PWA サービスワーカー
 */

const CACHE_NAME = 'practical-pos-cache-v1';

// オフライン起動時に必要なプリキャッシュアセット一覧
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  // 外部CDNライブラリ（オフラインでも完全に機能するようキャッシュ）
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
];

// インストール処理：コアリソースの事前キャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 外部CDNなどで万が一失敗しても全体を止めないよう1件ずつ確実にキャッシュ
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(new Request(url, { mode: 'cors' })).catch((err) => {
            console.warn(`[SW] Precache skipped for: ${url}`, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// アクティベート処理：古いキャッシュの削除とクライアント即時制御
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ処理：ネットワーク優先（オフライン時はキャッシュへ即座にフォールバック）
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // GETリクエスト以外はそのまま
  if (request.method !== 'GET') return;

  // CDNライブラリ・画像などはキャッシュ優先（Cache First）
  const url = new URL(request.url);
  const isCdnOrStatic =
    url.hostname.includes('cdnjs.cloudflare.com') ||
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('cdn.tailwindcss.com') ||
    request.destination === 'image' ||
    request.destination === 'font';

  if (isCdnOrStatic) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // オフライン時の静的ファイルマッチ
          return caches.match(request);
        });
      })
    );
    return;
  }

  // HTML / JS / CSS 等のコアコードはネットワークファースト（最新を優先取得、不通時はキャッシュ）
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // オフライン時：キャッシュから返却
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // ナビゲーションリクエスト（ページ移動）なら index.html を返す
          if (request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
      })
  );
});
