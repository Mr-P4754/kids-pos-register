/**
 * こども バーコードPOSレジ おみせやさん - Service Worker
 * 完全オフライン動作対応 PWA サービスワーカー
 */

const CACHE_NAME = 'kids-pos-cache-v1';

// オフライン起動時に必要なプリキャッシュアセット一覧
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './pos.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  // 外部CDNライブラリ（オフラインでも完全に機能するようキャッシュ）
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js'
];

// インストール処理：コアリソースの事前キャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
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
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`[SW] Removing outdated cache: ${key}`);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ処理：Network First（キャッシュフォールバック）で最新コードを優先しつつオフライン完全稼働
self.addEventListener('fetch', (event) => {
  // GETリクエスト以外はスキップ
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Chrome拡張機能などのリクエストはスキップ
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // 成功したレスポンスをキャッシュに保存・更新
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // オフライン時はキャッシュから返却
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // HTMLページリクエストでキャッシュがない場合は index.html を返す
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }

        return new Response('Offline: Resource not available in cache.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
        });
      })
  );
});
