/**
 * イベント・店舗用 簡易POSレジシステム
 * Practical POS Register System (Browser-Complete / Zero-Backend)
 */

const STORAGE_KEY = 'PRACTICAL_POS_DATA_V4';
const SALES_CACHE_KEY = 'PRACTICAL_POS_SALES_CACHE_V2';

// 実用業態別プリセットデータ（JAN-13バーコード付き）
const PRESET_SHOPS = {
  festival: {
    title: "🏮 縁日・模擬店 POSレジ",
    products: [
      { id: 'fes_1', name: '特製ソース焼きそば', price: 500, emoji: '🥢', stock: 50, sold: 0, category: 'フード', barcode: '4901001000012' },
      { id: 'fes_2', name: 'ジューシー フランクフルト', price: 300, emoji: '🌭', stock: 40, sold: 0, category: 'フード', barcode: '4901001000029' },
      { id: 'fes_3', name: '大玉たこ焼き (6個入)', price: 500, emoji: '🐙', stock: 35, sold: 0, category: 'フード', barcode: '4901001000036' },
      { id: 'fes_4', name: 'ふわふわ かき氷 (シロップ選べる)', price: 350, emoji: '🍧', stock: 60, sold: 0, category: 'スイーツ', barcode: '4901001000043' },
      { id: 'fes_5', name: 'パリパリ りんご飴', price: 400, emoji: '🍎', stock: 25, sold: 0, category: 'スイーツ', barcode: '4901001000050' },
      { id: 'fes_6', name: '昔ながらの瓶ラムネ', price: 200, emoji: '🍾', stock: 50, sold: 0, category: 'ドリンク', barcode: '4901001000067' },
      { id: 'fes_7', name: '冷たい お茶 500ml', price: 150, emoji: '🍵', stock: 45, sold: 0, category: 'ドリンク', barcode: '4901001000074' },
      { id: 'fes_8', name: 'お祭りくじ引き (1回)', price: 300, emoji: '🎯', stock: 100, sold: 0, category: 'ゲーム・体験', barcode: '4901001000081' },
    ]
  },
  cafe: {
    title: "☕ カフェ & ドリンク POSレジ",
    products: [
      { id: 'caf_1', name: '深煎り ドリップコーヒー', price: 420, emoji: '☕', stock: 40, sold: 0, category: 'ドリンク', barcode: '4902002000019' },
      { id: 'caf_2', name: 'カフェ・ラテ (Hot/Ice)', price: 480, emoji: '🥛', stock: 35, sold: 0, category: 'ドリンク', barcode: '4902002000026' },
      { id: 'caf_3', name: 'アールグレイ ティー', price: 400, emoji: '🫖', stock: 30, sold: 0, category: 'ドリンク', barcode: '4902002000033' },
      { id: 'caf_4', name: '発酵バター クロワッサン', price: 280, emoji: '🥐', stock: 20, sold: 0, category: 'フード', barcode: '4902002000040' },
      { id: 'caf_5', name: 'チョコチップ マフィン', price: 320, emoji: '🧁', stock: 18, sold: 0, category: 'スイーツ', barcode: '4902002000057' },
      { id: 'caf_6', name: 'ベイクドチーズケーキ', price: 450, emoji: '🍰', stock: 15, sold: 0, category: 'スイーツ', barcode: '4902002000064' },
      { id: 'caf_7', name: '自家製 レモネード', price: 460, emoji: '🍋', stock: 25, sold: 0, category: 'ドリンク', barcode: '4902002000071' },
      { id: 'caf_8', name: 'ミネラルウォーター 500ml', price: 120, emoji: '💧', stock: 30, sold: 0, category: 'ドリンク', barcode: '4902002000088' },
    ]
  },
  goods: {
    title: "🛍️ イベント物販・グッズ POSレジ",
    products: [
      { id: 'gds_1', name: 'イベント限定 Tシャツ (L)', price: 3000, emoji: '👕', stock: 30, sold: 0, category: 'グッズ', barcode: '4903003000016' },
      { id: 'gds_2', name: 'ロゴ入り マフラータオル', price: 1800, emoji: '🧣', stock: 40, sold: 0, category: 'グッズ', barcode: '4903003000023' },
      { id: 'gds_3', name: 'アクリルスタンド (全種)', price: 1200, emoji: '🧍', stock: 50, sold: 0, category: 'グッズ', barcode: '4903003000030' },
      { id: 'gds_4', name: 'トレーディング缶バッジ', price: 500, emoji: '🔘', stock: 80, sold: 0, category: 'グッズ', barcode: '4903003000047' },
      { id: 'gds_5', name: 'キャンバストートバッグ', price: 2000, emoji: '👜', stock: 25, sold: 0, category: 'グッズ', barcode: '4903003000054' },
      { id: 'gds_6', name: 'オリジナルステッカーセット', price: 600, emoji: '🏷️', stock: 60, sold: 0, category: 'グッズ', barcode: '4903003000061' },
      { id: 'gds_7', name: 'A4クリアファイル 2枚組', price: 700, emoji: '📁', stock: 45, sold: 0, category: 'グッズ', barcode: '4903003000078' },
      { id: 'gds_8', name: 'ラバーキーホルダー', price: 800, emoji: '🔑', stock: 35, sold: 0, category: 'グッズ', barcode: '4903003000085' },
    ]
  },
  food: {
    title: "🍱 フード・軽食販売 POSレジ",
    products: [
      { id: 'fod_1', name: '自家製 からあげ弁当', price: 650, emoji: '🍱', stock: 30, sold: 0, category: 'フード', barcode: '4905005000010' },
      { id: 'fod_2', name: '特製 ビーフカレー', price: 600, emoji: '🍛', stock: 25, sold: 0, category: 'フード', barcode: '4905005000027' },
      { id: 'fod_3', name: '具だくさん おにぎり (2個)', price: 300, emoji: '🍙', stock: 40, sold: 0, category: 'フード', barcode: '4905005000034' },
      { id: 'fod_4', name: 'フライドポテト (塩味)', price: 250, emoji: '🍟', stock: 35, sold: 0, category: 'フード', barcode: '4905005000041' },
      { id: 'fod_5', name: 'あつあつ 豚汁', price: 200, emoji: '🍲', stock: 30, sold: 0, category: 'フード', barcode: '4905005000058' },
      { id: 'fod_6', name: 'フランクフルト棒', price: 250, emoji: '🌭', stock: 30, sold: 0, category: 'フード', barcode: '4905005000065' },
      { id: 'fod_7', name: '烏龍茶 500ml', price: 150, emoji: '🧃', stock: 40, sold: 0, category: 'ドリンク', barcode: '4905005000072' },
      { id: 'fod_8', name: '缶ビール 350ml', price: 350, emoji: '🍺', stock: 48, sold: 0, category: 'ドリンク', barcode: '4905005000089' },
    ]
  }
};

// アプリケーション状態
let storeData = {
  registerId: 'レジ1',
  shopTitle: PRESET_SHOPS.festival.title,
  currentCategory: 'ALL',
  products: JSON.parse(JSON.stringify(PRESET_SHOPS.festival.products)),
  sales: {
    totalRevenue: 0,
    customerCount: 0,
    itemsSoldCount: 0,
    receipts: []
  }
};

let cart = []; // カート内商品 { productId, count }
let paymentInserted = 0; // お預かり金額
let numpadBuffer = ''; // テンキー入力バッファ

// 金種別枚数管理（硬貨全種 + 紙幣全種）
const DENOMINATIONS = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000];
let moneyCounts = {
  1: 0,
  5: 0,
  10: 0,
  50: 0,
  100: 0,
  500: 0,
  1000: 0,
  5000: 0,
  10000: 0
};
let soundEnabled = true;
let speechEnabled = true;

// カメラ関連状態
let html5QrScanner = null;
let cameraActive = false;
let currentFacingMode = "environment";
let scannerPurpose = "cart";
let scanCooldown = false;
let pendingBarcodeToAssign = null;

// 合算集計保持用
let lastMergedData = null;
let mergedDataSources = [];

// 割引・値引き状態
let currentDiscount = {
  type: 'none', // 'none' | 'percent' | 'amount'
  value: 0,
  label: '割引なし'
};

// =========================================================
// 1. サウンド & 音声合成 (Web Audio API / Web Speech API)
// =========================================================

let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

['pointerdown', 'touchstart', 'click'].forEach(evt => {
  document.addEventListener(evt, () => {
    getAudioContext();
  }, { once: true, passive: true });
});

/**
 * 実務向け音声読み上げ（落ち着いたトーン）
 */
function speak(text) {
  if (!speechEnabled) return;
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'ja-JP';
    uttr.rate = 1.2;
    uttr.pitch = 1.0;
    window.speechSynthesis.speak(uttr);
  } catch (e) {
    console.warn("SpeechSynthesis error:", e);
  }
}

/**
 * 実務向け効果音（洗練された短音ビープ・チャイム）
 */
const Sound = {
  // バーコードリーダー「ピッ！」音（高音クリアビープ）
  scan() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  },

  // キー入力・ボタン押し音（軽いタップ音）
  click() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  },

  // 金種加算音（短く小気味よいクリック音）
  coin() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {}
  },

  // 会計完了チャイム（二音「ピン・ポン」）
  complete() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [880, 1174.66].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.12;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.16, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch (e) {}
  },

  // 警告・注意音
  warn() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch (e) {}
  }
};

// =========================================================
// 2. ナビゲーション & タブ切替（【問題①修正】他タブ全画面表示対応）
// =========================================================

/**
 * タブ切り替え処理
 * @param {'register' | 'sales' | 'inventory' | 'cards' | 'settings'} tabName 
 */
function switchTab(tabName) {
  Sound.click();
  const tabs = ['register', 'sales', 'inventory', 'cards', 'settings'];

  tabs.forEach(t => {
    const screen = document.getElementById(`screen-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    if (!screen || !btn) return;

    if (t === tabName) {
      // 表示対象タブ：hidden除去 & インラインスタイルで表示を強制
      screen.classList.remove('hidden');
      screen.style.display = (t === 'register') ? '' : 'block';
      btn.classList.add('active-tab');
      btn.className = 'nav-tab active-tab flex-1 py-2 px-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 bg-blue-600 text-white shadow-sm whitespace-nowrap';
    } else {
      // 非表示タブ：hidden付与 & style.display = 'none' で確実に消滅（md:grid等の上書きを防止）
      screen.classList.add('hidden');
      screen.style.display = 'none';
      btn.classList.remove('active-tab');
      btn.className = 'nav-tab flex-1 py-2 px-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 bg-slate-800/80 text-slate-300 hover:bg-slate-800 whitespace-nowrap';
    }
  });

  if (tabName === 'sales') renderSalesDashboard();
  if (tabName === 'inventory') renderInventoryList();
  if (tabName === 'cards') renderBarcodeCards();
  if (tabName === 'settings') {
    renderSettingsProductsTable();
    updateFormBarcodePreview();
  }
}

function switchMobileRegisterView(view) {
  Sound.click();
  const cartPane = document.getElementById('register-cart-pane');
  const prodPane = document.getElementById('register-products-pane');
  const btnProd = document.getElementById('mobile-toggle-products');
  const btnCart = document.getElementById('mobile-toggle-cart');
  const quickBar = document.getElementById('mobile-quick-cart-bar');

  if (view === 'cart') {
    if (cartPane) cartPane.classList.remove('hidden');
    if (prodPane) prodPane.classList.add('hidden');
    if (quickBar) quickBar.classList.add('hidden');

    if (btnCart) btnCart.className = 'flex-1 py-1.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 bg-white text-slate-900 shadow-sm';
    if (btnProd) btnProd.className = 'flex-1 py-1.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 text-slate-600 hover:bg-white/50';
  } else {
    if (cartPane) cartPane.classList.add('hidden');
    if (prodPane) prodPane.classList.remove('hidden');
    if (cart.length > 0 && quickBar) quickBar.classList.remove('hidden');

    if (btnProd) btnProd.className = 'flex-1 py-1.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 bg-white text-slate-900 shadow-sm';
    if (btnCart) btnCart.className = 'flex-1 py-1.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 text-slate-600 hover:bg-white/50';
  }
}

function handleShopTitleChange(val) {
  storeData.shopTitle = val.trim() || 'イベント・店舗 POSレジ';
  saveStoreData();
  const titleDisplay = document.getElementById('shop-title-display');
  if (titleDisplay) titleDisplay.textContent = storeData.shopTitle;
}

function handleRegisterIdChange(val) {
  storeData.registerId = val.trim() || 'レジ1';
  saveStoreData();
  const badgeText = document.getElementById('register-id-badge-text');
  if (badgeText) badgeText.textContent = storeData.registerId;
}

// =========================================================
// 3. JAN-13 バーコード生成 & プレビュー
// =========================================================

function calculateJan13CheckDigit(digits12) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < 12; i++) {
    const d = parseInt(digits12[i], 10);
    if ((i + 1) % 2 === 0) sumEven += d;
    else sumOdd += d;
  }
  const total = sumOdd + sumEven * 3;
  const remainder = total % 10;
  return remainder === 0 ? 0 : 10 - remainder;
}

function generateUniqueJanBarcode() {
  const existingBarcodes = new Set(storeData.products.map(p => p.barcode).filter(Boolean));
  let candidate = '';
  let attempts = 0;

  do {
    // 【問題①修正】10桁の数値をゼロ埋めで生成し、'49'(2桁)と合わせて確実に12桁にする
    const randomBody = String(Math.floor(Math.random() * 10000000000)).padStart(10, '0');
    const digits12 = '49' + randomBody;
    const checkDigit = calculateJan13CheckDigit(digits12);
    candidate = digits12 + checkDigit.toString();
    attempts++;
  } while (existingBarcodes.has(candidate) && attempts < 100);

  return candidate;
}

function regenerateNewProductBarcode() {
  Sound.click();
  const newBarcode = generateUniqueJanBarcode();
  const input = document.getElementById('new-prod-barcode');
  if (input) {
    input.value = newBarcode;
    updateFormBarcodePreview();
  }
}

function updateFormBarcodePreview() {
  const input = document.getElementById('new-prod-barcode');
  const svg = document.getElementById('form-barcode-preview');
  const previewText = document.getElementById('form-barcode-preview-text');
  if (!input || !svg) return;

  const val = input.value.trim();
  if (!val) {
    svg.innerHTML = '';
    if (previewText) previewText.textContent = 'バーコード番号を入力してください';
    return;
  }

  try {
    const isEAN13 = /^\d{13}$/.test(val);
    JsBarcode(svg, val, {
      format: isEAN13 ? "EAN13" : "CODE128",
      width: 1.5,
      height: 36,
      displayValue: true,
      fontSize: 11,
      margin: 2
    });
    if (previewText) previewText.textContent = isEAN13 ? 'JAN-13 (EAN) 規格' : 'CODE128 規格';
  } catch (e) {
    try {
      JsBarcode(svg, val, { format: "CODE128", width: 1.5, height: 36, displayValue: true, fontSize: 11, margin: 2 });
      if (previewText) previewText.textContent = 'CODE128 規格';
    } catch (err) {
      svg.innerHTML = '';
      if (previewText) previewText.textContent = '無効な形式です';
    }
  }
}

// =========================================================
// 4. カメラ・バーコードスキャナー (html5-qrcode)
// =========================================================

let isCameraStarting = false;
let isCameraStopping = false;

function getSupportedBarcodeFormats() {
  if (typeof Html5QrcodeSupportedFormats !== 'undefined') {
    return [
      Html5QrcodeSupportedFormats.QR_CODE,
      Html5QrcodeSupportedFormats.EAN_13,
      Html5QrcodeSupportedFormats.EAN_8,
      Html5QrcodeSupportedFormats.CODE_128,
      Html5QrcodeSupportedFormats.CODE_39,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.ITF
    ];
  }
  return undefined;
}

async function openCameraScanner(purpose = "cart") {
  Sound.click();
  scannerPurpose = purpose;
  const modal = document.getElementById('camera-modal');
  const title = document.getElementById('scanner-purpose-title');
  const facingLabel = document.getElementById('camera-facing-label');
  const spinner = document.getElementById('camera-loading-spinner');

  if (title) {
    if (purpose === "cart") title.textContent = "レジ用 バーコード / QRコード読取";
    else if (purpose === "sales-merge") title.textContent = "他端末の売上QRコード読取合算";
    else title.textContent = "商品登録 バーコード / QR読取";
  }
  if (facingLabel) facingLabel.textContent = currentFacingMode === "user" ? "前面カメラ" : "背面カメラ";
  if (spinner) spinner.style.display = 'flex';

  modal.classList.remove('hidden');

  // 前回の停止処理が走っている場合は待機
  while (isCameraStopping) {
    await new Promise(r => setTimeout(r, 100));
  }

  await startHtml5QrCode();
}

async function closeCameraScannerModal() {
  Sound.click();
  const modal = document.getElementById('camera-modal');
  if (modal) modal.classList.add('hidden');
  await stopHtml5QrCode();
}

async function toggleCameraFacing() {
  Sound.click();
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  const facingLabel = document.getElementById('camera-facing-label');
  if (facingLabel) facingLabel.textContent = currentFacingMode === "user" ? "前面カメラ" : "背面カメラ";

  const shaded = document.getElementById('qr-shaded-region');
  if (shaded) {
    if (currentFacingMode === "user") shaded.classList.add('mirror-video');
    else shaded.classList.remove('mirror-video');
  }

  await stopHtml5QrCode();
  await startHtml5QrCode();
}

async function startHtml5QrCode() {
  if (isCameraStarting) return;
  isCameraStarting = true;

  const spinner = document.getElementById('camera-loading-spinner');
  if (spinner) spinner.style.display = 'flex';

  // 既存のスキャナーインスタンスがあれば完全に停止・クリア
  if (html5QrScanner) {
    try {
      if (html5QrScanner.isScanning) {
        await html5QrScanner.stop();
      }
      await html5QrScanner.clear();
    } catch (e) {}
    html5QrScanner = null;
  }

  const readerEl = document.getElementById('qr-reader');
  if (readerEl) readerEl.innerHTML = '';

  const formats = getSupportedBarcodeFormats();

  // Html5Qrcode コンストラクタ引数（ライブラリ仕様に基づきformatsToSupportをコンストラクタに渡す）
  const constructorConfig = {
    formatsToSupport: formats,
    verbose: false,
    useBarCodeDetectorIfSupported: false // ブラウザBarcodeDetectorのQR無視不具合を回避しZXingで高精度両立
  };

  // 1次元バーコード（JAN-13/CODE128等）と2次元QRコードの両方を欠損なく捉える正方形〜ワイド設定
  const config = {
    fps: 15,
    qrbox: (viewWidth, viewHeight) => {
      // 画面の幅と高さから、正方形QRコードが上下トリミングされず、横長バーコードも十分収まるサイズを動的計算
      const edge = Math.floor(Math.min(viewWidth * 0.85, viewHeight * 0.85, 340));
      return { width: Math.max(220, edge), height: Math.max(220, edge) };
    },
    aspectRatio: 1.333,
    formatsToSupport: formats,
    experimentalFeatures: {
      useBarCodeDetectorIfSupported: false
    }
  };

  try {
    html5QrScanner = new Html5Qrcode("qr-reader", constructorConfig);

    await html5QrScanner.start(
      { facingMode: currentFacingMode },
      config,
      (decodedText) => onBarcodeScannedSuccess(decodedText),
      () => {}
    );
    cameraActive = true;
    if (spinner) spinner.style.display = 'none';
  } catch (err) {
    console.warn('Direct facingMode camera start failed, attempting fallback to camera devices:', err);
    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices && devices.length > 0) {
        let targetDevice = devices.find(d => /back|rear|environment/i.test(d.label)) || devices[0];
        if (currentFacingMode === "user") {
          targetDevice = devices.find(d => /front|user/i.test(d.label)) || devices[0];
        }

        if (!html5QrScanner) {
          html5QrScanner = new Html5Qrcode("qr-reader", constructorConfig);
        }

        await html5QrScanner.start(
          targetDevice.id,
          config,
          (decodedText) => onBarcodeScannedSuccess(decodedText),
          () => {}
        );
        cameraActive = true;
        if (spinner) spinner.style.display = 'none';
      } else {
        throw new Error('No camera devices found');
      }
    } catch (err2) {
      console.error('Camera fallback failed:', err2);
      if (spinner) spinner.style.display = 'none';
      showAlert('カメラエラー', 'カメラを起動できませんでした。手入力や画像ファイル読取をご利用ください。', '⚠️');
    }
  } finally {
    isCameraStarting = false;
  }
}

async function stopHtml5QrCode() {
  if (isCameraStopping) return;
  isCameraStopping = true;

  try {
    if (html5QrScanner) {
      if (html5QrScanner.isScanning) {
        await html5QrScanner.stop();
      }
      try {
        await html5QrScanner.clear();
      } catch (e) {}
    }
  } catch (err) {
    console.warn('stopHtml5QrCode warning:', err);
  } finally {
    html5QrScanner = null;
    cameraActive = false;
    isCameraStopping = false;
    const spinner = document.getElementById('camera-loading-spinner');
    if (spinner) spinner.style.display = 'none';
    const readerEl = document.getElementById('qr-reader');
    if (readerEl) readerEl.innerHTML = '';
  }
}

function openManualBarcodeEntry() {
  Sound.click();
  showPrompt('バーコード番号の手入力', 'バーコードの数字を入力してください：', '', (val) => {
    if (val && val.trim()) {
      closeCameraScannerModal();
      onBarcodeScannedSuccess(val.trim());
    }
  });
}

function scanBarcodeFromImageFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const formats = getSupportedBarcodeFormats();
  const tempScanner = new Html5Qrcode("qr-reader-file-temp", {
    formatsToSupport: formats,
    verbose: false,
    useBarCodeDetectorIfSupported: false
  });

  tempScanner.scanFile(file, true)
    .then(decodedText => {
      tempScanner.clear();
      closeCameraScannerModal();
      onBarcodeScannedSuccess(decodedText);
    })
    .catch(() => {
      tempScanner.clear();
      showAlert('スキャン失敗', '画像からバーコードまたはQRコードを検出できませんでした。', '⚠️');
    });
}

function onBarcodeScannedSuccess(decodedText) {
  if (scanCooldown) return;
  scanCooldown = true;
  setTimeout(() => { scanCooldown = false; }, 1000);

  const cleanBarcode = decodedText.trim();

  // 売上QRコード合算用
  if (scannerPurpose === "sales-merge") {
    try {
      const parsed = JSON.parse(cleanBarcode);
      let normalizedData = null;

      if (parsed && parsed._t === 'POS_QRSYNC') {
        // 高効率QR形式(_t === 'POS_QRSYNC')からの復元展開
        normalizedData = {
          posType: 'MERGE_SYNC_V1',
          shopTitle: parsed.shop || '',
          registerId: parsed.reg || '他端末',
          sales: {
            totalRevenue: parsed.rev || 0,
            customerCount: parsed.cust || 0,
            itemsSoldCount: parsed.sold || 0,
            receipts: (parsed.recs || []).map(r => ({
              id: r.id,
              registerId: r.reg || parsed.reg || '他端末',
              timestamp: r.ts || Date.now(),
              date: r.dt || '',
              total: r.tot || 0,
              paid: r.pd || 0,
              change: r.ch || 0,
              isVoid: !!r.vd,
              discount: r.disc ? {
                type: r.disc.t,
                value: r.disc.v,
                label: r.disc.l,
                amount: r.disc.a
              } : null,
              items: (r.items || []).map(it => ({
                productId: it.pid,
                name: it.n,
                emoji: it.em || '🏷️',
                price: it.p,
                count: it.c,
                subtotal: it.sub
              }))
            }))
          }
        };
      } else if (parsed && (parsed.posType === 'MERGE_SYNC_V1' || (parsed.sales && parsed.sales.totalRevenue !== undefined))) {
        normalizedData = parsed;
      }

      if (normalizedData) {
        Sound.complete();
        closeCameraScannerModal();

        const terminalName = normalizedData.registerId || '他端末';
        const sourceLabel = `QR読込: ${terminalName}`;

        const existingIdx = mergedDataSources.findIndex(s => s.file === sourceLabel);
        if (existingIdx !== -1) {
          mergedDataSources[existingIdx] = { file: sourceLabel, data: normalizedData, ok: true };
        } else {
          mergedDataSources.push({ file: sourceLabel, data: normalizedData, ok: true });
        }

        mergeSalesData(mergedDataSources);
        switchTab('sales');

        showAlert(
          '売上QR合算完了',
          `「${terminalName}」の売上データ（売上: ¥${(normalizedData.sales.totalRevenue || 0).toLocaleString()}, 客数: ${normalizedData.sales.customerCount || 0}人）を合算しました！`,
          '🎉'
        );
        return;
      }
    } catch (err) {
      console.warn("QR scan parse error:", err);
      Sound.warn();
      showAlert('QRデータ不一致', 'POSシステムの売上データQRコードではありません。', '⚠️');
      return;
    }
  }

  // 商品登録フォーム用
  if (scannerPurpose === "form") {
    Sound.scan();
    const input = document.getElementById('new-prod-barcode');
    if (input) {
      input.value = cleanBarcode;
      updateFormBarcodePreview();
    }
    closeCameraScannerModal();
    showAlert('読み取り完了', `バーコード [${cleanBarcode}] を設定しました。`, '✅');
    return;
  }

  // カート追加用
  const product = storeData.products.find(p => p.barcode === cleanBarcode || p.id === cleanBarcode);

  if (product) {
    Sound.scan();
    showScanToast(product);
    addToCart(product.id);
  } else {
    // もし売上QRコード（POS_QRSYNC または MERGE_SYNC_V1）がレジ用カメラで読み取られた場合、自動的に売上合算処理へ切り替え実行
    try {
      const parsed = JSON.parse(cleanBarcode);
      if (parsed && (parsed._t === 'POS_QRSYNC' || parsed.posType === 'MERGE_SYNC_V1' || (parsed.sales && parsed.sales.totalRevenue !== undefined))) {
        scannerPurpose = "sales-merge";
        onBarcodeScannedSuccess(decodedText);
        return;
      }
    } catch (e) {}

    Sound.warn();
    closeCameraScannerModal();
    openUnknownBarcodeModal(cleanBarcode);
  }
}

function showScanToast(product) {
  const existingToast = document.getElementById('scan-toast-banner');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'scan-toast-banner';
  toast.className = 'fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white px-4 py-2 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5 scan-pop pointer-events-none';
  toast.innerHTML = `
    <span class="text-xl text-emerald-400"><i class="fa-solid fa-barcode"></i></span>
    <div class="text-left leading-tight">
      <span class="text-[11px] text-emerald-400 font-bold block">スキャン完了</span>
      <span class="text-xs sm:text-sm font-bold text-white">${product.name} (¥${product.price.toLocaleString()})</span>
    </div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast) {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, -15px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 1400);
}

// =========================================================
// 5. 未登録バーコード検出モーダル
// =========================================================

function openUnknownBarcodeModal(barcode) {
  pendingBarcodeToAssign = barcode;
  const modal = document.getElementById('unknown-barcode-modal');
  const numberDisplay = document.getElementById('unknown-barcode-number');
  const select = document.getElementById('unknown-assign-select');

  if (numberDisplay) numberDisplay.textContent = barcode;

  if (select) {
    select.innerHTML = '<option value="">-- ひもづける商品を選択 --</option>';
    storeData.products.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.name} (¥${p.price.toLocaleString()})`;
      select.appendChild(opt);
    });
  }

  modal.classList.remove('hidden');
}

function closeUnknownBarcodeModal() {
  Sound.click();
  const modal = document.getElementById('unknown-barcode-modal');
  modal.classList.add('hidden');
  pendingBarcodeToAssign = null;
}

function forwardBarcodeToNewProduct() {
  Sound.click();
  const barcode = pendingBarcodeToAssign;
  closeUnknownBarcodeModal();
  switchTab('settings');

  setTimeout(() => {
    const input = document.getElementById('new-prod-barcode');
    if (input && barcode) {
      input.value = barcode;
      updateFormBarcodePreview();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

function assignBarcodeToSelectedProduct() {
  const select = document.getElementById('unknown-assign-select');
  if (!select || !select.value) {
    showAlert('選択エラー', 'ひもづけたい商品を選択してください。', '⚠️');
    return;
  }
  const productId = select.value;
  const barcode = pendingBarcodeToAssign;
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  prod.barcode = barcode;
  saveStoreData();
  renderBarcodeCards();
  renderSettingsProductsTable();
  closeUnknownBarcodeModal();

  showAlert('ひもづけ完了', `「${prod.name}」にバーコード [${barcode}] を登録しました。`, '✅');
}

// =========================================================
// 6. データ保存 & ロード (LocalStorage)
// =========================================================

function saveSalesCache() {
  try {
    if (storeData && storeData.sales) {
      localStorage.setItem(SALES_CACHE_KEY, JSON.stringify(storeData.sales));
    }
  } catch (e) {}
}

function loadSalesCache() {
  try {
    const raw = localStorage.getItem(SALES_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.totalRevenue === 'number') return parsed;
    }
  } catch (e) {}
  return null;
}

function loadSavedData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.products)) {
        storeData = parsed;
      }
    }

    storeData.registerId = storeData.registerId || 'レジ1';
    if (!storeData.shopTitle) storeData.shopTitle = PRESET_SHOPS.festival.title;

    const salesCache = loadSalesCache();
    if (salesCache) {
      if (!storeData.sales || (salesCache.totalRevenue >= (storeData.sales.totalRevenue || 0))) {
        storeData.sales = salesCache;
      }
    } else if (storeData.sales) {
      saveSalesCache();
    }

    if (!storeData.sales) {
      storeData.sales = {
        totalRevenue: 0,
        customerCount: 0,
        itemsSoldCount: 0,
        receipts: []
      };
    }

    // 【問題①修復】既存データ内の不正バーコード（NaNを含む等）を自動修復
    let needsRepair = false;
    if (storeData.products && Array.isArray(storeData.products)) {
      storeData.products.forEach(p => {
        if (p.barcode && (p.barcode.includes('NaN') || p.barcode.length !== 13)) {
          p.barcode = generateUniqueJanBarcode();
          needsRepair = true;
        }
      });
      if (needsRepair) saveStoreData();
    }
  } catch (e) {
    console.error('LocalStorage load failed:', e);
  }
}

function saveStoreData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storeData));
    saveSalesCache();
  } catch (e) {
    console.error('LocalStorage save failed:', e);
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  speechEnabled = soundEnabled;
  if (!speechEnabled && ('speechSynthesis' in window)) {
    window.speechSynthesis.cancel();
  }
  const icon = document.getElementById('sound-icon');
  const text = document.getElementById('sound-text');
  if (icon) icon.textContent = soundEnabled ? '🔊' : '🔇';
  if (text) text.textContent = soundEnabled ? '音: ON' : '音: OFF';
  Sound.click();
}

// =========================================================
// 7. レジ商品棚 & 会計カゴ
// =========================================================

function renderRegisterGrid() {
  const container = document.getElementById('product-grid');
  const filterContainer = document.getElementById('category-filter-list');
  if (!container || !filterContainer) return;

  const categories = ['ALL', ...new Set(storeData.products.map(p => p.category))];

  filterContainer.innerHTML = '';
  categories.forEach(cat => {
    const isAct = storeData.currentCategory === cat;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => {
      Sound.click();
      storeData.currentCategory = cat;
      renderRegisterGrid();
    };
    btn.className = isAct
      ? 'px-3 py-1 rounded-lg font-bold text-xs bg-blue-600 text-white shadow-sm whitespace-nowrap'
      : 'px-3 py-1 rounded-lg font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap';
    btn.textContent = cat === 'ALL' ? 'すべて' : cat;
    filterContainer.appendChild(btn);
  });

  const filtered = storeData.currentCategory === 'ALL'
    ? storeData.products
    : storeData.products.filter(p => p.category === storeData.currentCategory);

  container.innerHTML = '';

  // 【要望②対応】手入力商品クイック追加カードをグリッドの先頭に常設
  const customCard = document.createElement('div');
  customCard.className = 'pos-card p-3 flex flex-col justify-between border-2 border-dashed border-amber-300 hover:border-amber-500 bg-amber-50/70 hover:bg-amber-100/80 transition-all cursor-pointer shadow-sm';
  customCard.onclick = () => openCustomProductModal();
  customCard.innerHTML = `
    <div class="flex items-start justify-between">
      <span class="text-2xl bg-amber-200/80 rounded-lg p-1.5 block text-center shrink-0">➕</span>
      <span class="text-[10px] font-bold bg-amber-200/90 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">自由入力</span>
    </div>
    <div class="mt-2">
      <h4 class="font-bold text-xs sm:text-sm text-amber-950">その他・臨時商品</h4>
      <p class="text-[10px] text-amber-800 mt-0.5">金額を直接入力してカゴへ追加</p>
    </div>
    <button type="button" class="pos-btn w-full mt-2 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-2xs">
      <i class="fa-solid fa-plus-circle"></i>
      <span>金額を入力</span>
    </button>
  `;
  container.appendChild(customCard);

  filtered.forEach(p => {
    const isOutOfStock = p.stock <= 0;
    const card = document.createElement('div');
    card.className = `pos-card p-3 flex flex-col justify-between relative transition-all ${isOutOfStock ? 'opacity-50 grayscale' : 'hover:border-blue-400 hover:shadow-md cursor-pointer'}`;

    if (!isOutOfStock) {
      card.onclick = () => addToCart(p.id);
    }

    card.innerHTML = `
      <div class="flex items-start justify-between">
        <span class="text-2xl bg-slate-100 rounded-lg p-1.5 block text-center">${p.emoji || '🏷️'}</span>
        <span class="text-[10px] font-bold ${p.stock <= 3 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'} px-2 py-0.5 rounded-full">
          ${isOutOfStock ? '品切れ' : `残 ${p.stock}`}
        </span>
      </div>
      <div class="mt-2">
        <h4 class="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">${p.name}</h4>
        <div class="flex items-baseline justify-between mt-1">
          <span class="text-[10px] text-slate-400 font-mono">${p.barcode ? p.barcode.slice(-4) : ''}</span>
          <div class="text-right">
            <span class="text-base sm:text-lg font-black text-blue-600">${p.price.toLocaleString()}</span>
            <span class="text-xs font-bold text-slate-600">円</span>
          </div>
        </div>
      </div>
      <button ${isOutOfStock ? 'disabled' : ''} class="pos-btn w-full mt-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs">
        <i class="fa-solid fa-cart-plus"></i>
        <span>カゴへ追加</span>
      </button>
    `;
    container.appendChild(card);
  });
}

// =========================================================
// 手入力・その他商品モーダル制御（【要望②対応】）
// =========================================================

function openCustomProductModal() {
  Sound.click();
  const nameInput = document.getElementById('custom-prod-name');
  const priceInput = document.getElementById('custom-prod-price');
  const countInput = document.getElementById('custom-prod-count');
  const catInput = document.getElementById('custom-prod-category');
  const emojiInput = document.getElementById('custom-prod-emoji');

  if (nameInput) nameInput.value = 'その他商品';
  if (priceInput) priceInput.value = '';
  if (countInput) countInput.value = '1';
  if (catInput) catInput.value = 'その他';
  if (emojiInput) emojiInput.value = '🏷️';

  const modal = document.getElementById('custom-product-modal');
  if (modal) modal.classList.remove('hidden');

  setTimeout(() => {
    if (priceInput) priceInput.focus();
  }, 100);
}

function closeCustomProductModal() {
  Sound.click();
  const modal = document.getElementById('custom-product-modal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveCustomProduct(event) {
  event.preventDefault();
  Sound.click();

  const nameInput = document.getElementById('custom-prod-name');
  const priceInput = document.getElementById('custom-prod-price');
  const countInput = document.getElementById('custom-prod-count');
  const catInput = document.getElementById('custom-prod-category');
  const emojiInput = document.getElementById('custom-prod-emoji');

  const name = nameInput ? nameInput.value.trim() : 'その他商品';
  const price = priceInput ? parseInt(priceInput.value, 10) : 0;
  const count = countInput ? Math.max(1, parseInt(countInput.value, 10) || 1) : 1;
  const category = catInput ? catInput.value : 'その他';
  const emoji = emojiInput && emojiInput.value.trim() ? emojiInput.value.trim() : '🏷️';

  if (!name || isNaN(price) || price <= 0) {
    showAlert('入力エラー', '正しい金額（1円以上）を入力してください。', '⚠️');
    return;
  }

  // 自由入力商品を登録（在庫は十分な数を初期設定）
  const customId = 'custom_' + Date.now();
  const customBarcode = generateUniqueJanBarcode();

  const customProduct = {
    id: customId,
    name: name,
    price: price,
    stock: 999,
    sold: 0,
    category: category,
    barcode: customBarcode,
    emoji: emoji,
    isCustom: true
  };

  storeData.products.push(customProduct);
  saveStoreData();

  // カゴに指定数量分追加
  const existing = cart.find(it => it.productId === customId);
  if (existing) {
    existing.count += count;
  } else {
    cart.push({ productId: customId, count: count });
  }

  closeCustomProductModal();
  renderCart();
  renderRegisterGrid();
  renderSettingsProductsTable();
  Sound.scan();
  showAlert('カゴ追加', `「${name}」(${price}円 × ${count}点) をカゴに追加しました。`, '🛒');
}

// =========================================================
// 割引・値引きモーダル制御（【要望③対応】）
// =========================================================

function openDiscountModal() {
  Sound.click();
  updateDiscountModalStatus();
  const modal = document.getElementById('discount-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeDiscountModal() {
  Sound.click();
  const modal = document.getElementById('discount-modal');
  if (modal) modal.classList.add('hidden');
}

function updateDiscountModalStatus() {
  const labelEl = document.getElementById('discount-current-label');
  if (labelEl) {
    labelEl.textContent = currentDiscount.type !== 'none' ? currentDiscount.label : '割引なし';
  }
}

function clearDiscount() {
  Sound.click();
  currentDiscount = { type: 'none', value: 0, label: '割引なし' };
  updateDiscountModalStatus();
  renderCart();
  closeDiscountModal();
}

function applyQuickDiscount(type, val, label) {
  Sound.click();
  currentDiscount = {
    type: type, // 'percent' | 'amount'
    value: val,
    label: label
  };
  renderCart();
  closeDiscountModal();
  showAlert('割引適用', `「${label}」を適用しました。`, '🏷️');
}

function applyCustomDiscountPercent() {
  Sound.click();
  const input = document.getElementById('custom-discount-percent');
  const val = input ? parseInt(input.value, 10) : 0;
  if (isNaN(val) || val <= 0 || val >= 100) {
    showAlert('入力エラー', '1〜99%の間で入力してください。', '⚠️');
    return;
  }
  applyQuickDiscount('percent', val, `${val}% OFF`);
  if (input) input.value = '';
}

function applyCustomDiscountAmount() {
  Sound.click();
  const input = document.getElementById('custom-discount-amount');
  const val = input ? parseInt(input.value, 10) : 0;
  if (isNaN(val) || val <= 0) {
    showAlert('入力エラー', '正しい金額を入力してください。', '⚠️');
    return;
  }
  applyQuickDiscount('amount', val, `${val}円引き`);
  if (input) input.value = '';
}

// 金額計算
function getCartSubtotal() {
  return cart.reduce((sum, it) => {
    const p = storeData.products.find(prod => prod.id === it.productId);
    return sum + (p ? p.price * it.count : 0);
  }, 0);
}

function getCartDiscountAmount() {
  const subtotal = getCartSubtotal();
  let discountAmount = 0;
  if (currentDiscount.type === 'percent') {
    discountAmount = Math.round(subtotal * (currentDiscount.value / 100));
  } else if (currentDiscount.type === 'amount') {
    discountAmount = currentDiscount.value;
  }
  return Math.min(subtotal, Math.max(0, discountAmount));
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  const discount = getCartDiscountAmount();
  return Math.max(0, subtotal - discount);
}

function addToCart(productId) {
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock <= 0) {
    showAlert('在庫切れ', `「${prod.name}」は在庫切れです。「在庫管理」から補充してください。`, '⚠️');
    return;
  }

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    if (existing.count >= prod.stock) {
      showAlert('在庫上限', `「${prod.name}」の在庫数（${prod.stock}点）を超えて追加することはできません。`, '⚠️');
      return;
    }
    existing.count += 1;
  } else {
    cart.push({ productId: productId, count: 1 });
  }

  Sound.scan();
  renderCart();
}

function changeCartItemCount(productId, delta) {
  Sound.click();
  const itemIndex = cart.findIndex(it => it.productId === productId);
  if (itemIndex === -1) return;

  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  const currentCount = cart[itemIndex].count;
  const newCount = currentCount + delta;

  if (newCount <= 0) {
    cart.splice(itemIndex, 1);
  } else {
    if (newCount > prod.stock) {
      showAlert('在庫上限', `「${prod.name}」の在庫は ${prod.stock}点 までです。`, '⚠️');
      return;
    }
    cart[itemIndex].count = newCount;
  }

  renderCart();
}

function clearCart(playSound = false) {
  if (playSound) Sound.click();
  cart = [];
  paymentInserted = 0;
  numpadBuffer = '';
  currentDiscount = { type: 'none', value: 0, label: '割引なし' };
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const countEl = document.getElementById('cart-item-count');
  const totalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-start-btn');
  const mobileCartBadge = document.getElementById('mobile-cart-badge');
  const mobileBarCount = document.getElementById('mobile-bar-count');
  const mobileBarTotal = document.getElementById('mobile-bar-total');
  const quickBar = document.getElementById('mobile-quick-cart-bar');

  if (!container) return;
  container.innerHTML = '';

  let totalItems = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-slate-300 py-10 select-none">
        <i class="fa-solid fa-cart-shopping text-4xl mb-2 opacity-40"></i>
        <p class="font-bold text-xs text-slate-400">カゴは空です</p>
        <p class="text-[11px] text-slate-400 mt-0.5">商品を選択するかバーコードをスキャンしてください</p>
      </div>
    `;
    if (quickBar) quickBar.classList.add('hidden');
  } else {
    cart.forEach(item => {
      const prod = storeData.products.find(p => p.id === item.productId);
      if (!prod) return;

      const subtotal = prod.price * item.count;
      totalItems += item.count;

      const row = document.createElement('div');
      row.className = 'bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2 shadow-sm';
      row.innerHTML = `
        <div class="flex items-center gap-2 min-w-0">
          <span class="text-xl shrink-0">${prod.emoji || '🏷️'}</span>
          <div class="min-w-0">
            <h5 class="font-bold text-xs sm:text-sm text-slate-900 truncate">${prod.name}</h5>
            <span class="text-xs text-blue-600 font-mono font-bold">¥${prod.price.toLocaleString()}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <div class="flex items-center bg-white rounded-lg border border-slate-300 p-0.5">
            <button onclick="changeCartItemCount('${prod.id}', -1)" class="w-6 h-6 rounded bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-rose-700 font-bold text-xs flex items-center justify-center">－</button>
            <span class="w-7 text-center font-bold text-xs text-slate-800">${item.count}</span>
            <button onclick="changeCartItemCount('${prod.id}', 1)" class="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center">＋</button>
          </div>
          <span class="font-black text-xs sm:text-sm text-slate-800 w-16 text-right">${subtotal.toLocaleString()}円</span>
        </div>
      `;
      container.appendChild(row);
    });

    if (quickBar) quickBar.classList.remove('hidden');
  }

  const subtotal = getCartSubtotal();
  const discountAmount = getCartDiscountAmount();
  const finalTotal = getCartTotal();

  const subtotalRow = document.getElementById('cart-subtotal-row');
  const subtotalVal = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');
  const discountName = document.getElementById('cart-discount-name');
  const discountBtnLabel = document.getElementById('cart-discount-label');

  if (currentDiscount.type !== 'none' && discountAmount > 0) {
    if (subtotalRow) subtotalRow.classList.remove('hidden');
    if (subtotalVal) subtotalVal.textContent = subtotal.toLocaleString();
    if (discountRow) discountRow.classList.remove('hidden');
    if (discountVal) discountVal.textContent = discountAmount.toLocaleString();
    if (discountName) discountName.textContent = currentDiscount.label;
    if (discountBtnLabel) discountBtnLabel.innerHTML = `<span class="text-amber-600 font-bold">${currentDiscount.label} (-¥${discountAmount.toLocaleString()})</span>`;
  } else {
    if (subtotalRow) subtotalRow.classList.add('hidden');
    if (discountRow) discountRow.classList.add('hidden');
    if (discountBtnLabel) discountBtnLabel.textContent = '🏷️ 割引を設定';
  }

  if (countEl) countEl.textContent = `${totalItems} 点`;
  if (totalEl) totalEl.textContent = finalTotal.toLocaleString();
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
  if (mobileBarCount) mobileBarCount.textContent = `${totalItems}点`;
  if (mobileBarTotal) mobileBarTotal.textContent = `${finalTotal.toLocaleString()} 円`;
}

// =========================================================
// 8. 高速会計モーダル & 巨大おつりUI（【問題③修正】タップ消滅式）
// =========================================================

function openPaymentModal() {
  if (cart.length === 0) return;
  Sound.click();

  paymentInserted = 0;
  numpadBuffer = '';
  resetMoneyCounts(false);

  const modal = document.getElementById('payment-modal');
  modal.classList.remove('hidden');
  updatePaymentUI();
  updateMoneyCountsDisplay();
}

function closePaymentModal() {
  Sound.click();
  const modal = document.getElementById('payment-modal');
  modal.classList.add('hidden');
  resetMoneyCounts(false);
}

/**
 * 金種ステッパーによる枚数調整（硬貨全種・紙幣全種の照合入力）
 * @param {number} denomination 1, 5, 10, 50, 100, 500, 1000, 5000, 10000
 * @param {number} delta +1 または -1
 */
function adjustMoneyCount(denomination, delta) {
  if (!moneyCounts.hasOwnProperty(denomination)) return;

  const prevCount = moneyCounts[denomination] || 0;
  const newCount = Math.max(0, prevCount + delta);
  if (prevCount === newCount) return;

  if (delta > 0) {
    Sound.coin();
  } else {
    Sound.click();
  }

  moneyCounts[denomination] = newCount;

  // 金種枚数から合計お預かり金額を再計算
  paymentInserted = DENOMINATIONS.reduce((sum, d) => sum + (d * (moneyCounts[d] || 0)), 0);
  numpadBuffer = paymentInserted > 0 ? paymentInserted.toString() : '';

  updatePaymentUI();
  updateMoneyCountsDisplay();
}

/**
 * 各金種の枚数表示DOMを更新
 */
function updateMoneyCountsDisplay() {
  DENOMINATIONS.forEach(denom => {
    const el = document.getElementById(`denom-count-${denom}`);
    if (el) {
      const count = moneyCounts[denom] || 0;
      el.textContent = `${count}枚`;
      if (count > 0) {
        el.className = 'text-xs font-black text-blue-600 my-0.5 bg-blue-50/80 rounded px-1';
      } else {
        el.className = 'text-xs font-black text-slate-400 my-0.5';
      }
    }
  });
}

/**
 * 金種枚数のリセット
 * @param {boolean} updatePayment お預かり金額もゼロクリアするかどうか
 */
function resetMoneyCounts(updatePayment = true) {
  DENOMINATIONS.forEach(d => {
    moneyCounts[d] = 0;
  });

  if (updatePayment) {
    Sound.click();
    paymentInserted = 0;
    numpadBuffer = '';
    updatePaymentUI();
  }
  updateMoneyCountsDisplay();
}

function inputNumpadDigit(digit) {
  Sound.click();
  if (numpadBuffer.length >= 7) return;

  // テンキー直接入力時は金種枚数の不整合を防ぐため枚数をリセット
  resetMoneyCounts(false);

  if (numpadBuffer === '0' || numpadBuffer === '') {
    numpadBuffer = (digit === '00' || digit === '0') ? '0' : digit;
  } else {
    numpadBuffer += digit;
  }

  paymentInserted = parseInt(numpadBuffer, 10) || 0;
  updatePaymentUI();
}

function inputNumpadBackspace() {
  Sound.click();
  resetMoneyCounts(false);
  if (numpadBuffer.length > 0) {
    numpadBuffer = numpadBuffer.slice(0, -1);
    paymentInserted = parseInt(numpadBuffer, 10) || 0;
    updatePaymentUI();
  }
}

function addQuickMoney(amount) {
  if (DENOMINATIONS.includes(amount)) {
    adjustMoneyCount(amount, 1);
  } else {
    Sound.coin();
    paymentInserted += amount;
    numpadBuffer = paymentInserted.toString();
    resetMoneyCounts(false);
    updatePaymentUI();
  }
}

function payExactAmount() {
  Sound.coin();
  const total = getCartTotal();
  paymentInserted = total;
  numpadBuffer = total.toString();

  // 金種枚数を大きい順に自動分解してセット（即座に手元硬貨・紙幣と照合可能）
  let remaining = total;
  const sortedDenoms = [...DENOMINATIONS].sort((a, b) => b - a);
  sortedDenoms.forEach(d => {
    const count = Math.floor(remaining / d);
    moneyCounts[d] = count;
    remaining %= d;
  });

  updatePaymentUI();
  updateMoneyCountsDisplay();
}

function clearInsertedMoney() {
  resetMoneyCounts(true);
}

function updatePaymentUI() {
  const total = getCartTotal();
  const change = Math.max(0, paymentInserted - total);
  const shortage = Math.max(0, total - paymentInserted);

  const totalDisplay = document.getElementById('pay-total-display');
  const receivedDisplay = document.getElementById('pay-received-display');
  const changeDisplay = document.getElementById('pay-change-display');
  const statusBox = document.getElementById('payment-status-box');
  const completeBtn = document.getElementById('complete-sale-btn');
  const completeBtnText = document.getElementById('complete-sale-btn-text');

  if (totalDisplay) totalDisplay.textContent = total.toLocaleString();
  if (receivedDisplay) receivedDisplay.textContent = paymentInserted.toLocaleString();
  if (changeDisplay) changeDisplay.textContent = change.toLocaleString();

  if (!statusBox || !completeBtn) return;

  if (shortage === 0) {
    statusBox.className = 'p-2.5 rounded-lg text-center font-bold text-xs sm:text-sm bg-emerald-50 text-emerald-800 border border-emerald-300';
    if (change === 0) {
      statusBox.innerHTML = `ちょうどのお預かりです（おつりなし）`;
    } else {
      statusBox.innerHTML = `おつり: <strong class="text-base font-black text-emerald-600">${change.toLocaleString()}円</strong>`;
    }
    completeBtn.disabled = false;
    if (completeBtnText) completeBtnText.textContent = `会計完了 (おつり ${change.toLocaleString()}円) [Enter]`;
    completeBtn.className = 'pos-btn w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg rounded-xl shadow-sm';
  } else {
    statusBox.className = 'p-2.5 rounded-lg text-center font-bold text-xs sm:text-sm bg-rose-50 text-rose-700 border border-rose-200';
    statusBox.innerHTML = `あと <strong class="text-sm font-black text-rose-600">${shortage.toLocaleString()}円</strong> 不足しています`;
    completeBtn.disabled = true;
    if (completeBtnText) completeBtnText.textContent = `不足: ${shortage.toLocaleString()}円`;
    completeBtn.className = 'pos-btn w-full py-3 bg-slate-300 text-slate-500 font-bold text-base sm:text-lg rounded-xl cursor-not-allowed opacity-50';
  }
}

/**
 * 会計完了の実行
 */
function executeCompleteSale() {
  const total = getCartTotal();
  if (paymentInserted < total) return;

  const receiptItems = [];
  let totalItemCount = 0;

  cart.forEach(item => {
    const prod = storeData.products.find(p => p.id === item.productId);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.count);
      prod.sold = (prod.sold || 0) + item.count;
      totalItemCount += item.count;
      receiptItems.push({
        productId: prod.id,
        name: prod.name,
        emoji: prod.emoji,
        price: prod.price,
        count: item.count,
        subtotal: prod.price * item.count
      });
    }
  });

  const change = paymentInserted - total;
  const now = Date.now();
  const subtotal = getCartSubtotal();
  const discountAmount = getCartDiscountAmount();

  const receiptRecord = {
    id: 'REC_' + now,
    registerId: storeData.registerId || 'レジ1',
    timestamp: now,
    date: new Date().toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: receiptItems,
    subtotal: subtotal,
    discount: currentDiscount.type !== 'none' && discountAmount > 0 ? {
      type: currentDiscount.type,
      value: currentDiscount.value,
      label: currentDiscount.label,
      amount: discountAmount
    } : null,
    total: total,
    paid: paymentInserted,
    change: change,
    isVoid: false
  };

  storeData.sales.totalRevenue += total;
  storeData.sales.customerCount += 1;
  storeData.sales.itemsSoldCount += totalItemCount;
  storeData.sales.receipts.unshift(receiptRecord);

  if (storeData.sales.receipts.length > 200) {
    storeData.sales.receipts.pop();
  }

  saveStoreData();
  closePaymentModal();

  // 清算完了音
  Sound.complete();

  // 音声案内（ビジネス調）
  if (change === 0) {
    speak('ありがとうございました。ちょうどお預かりいたしました。');
  } else {
    speak(`ありがとうございました。おつりは${change}円です。`);
  }

  // 【問題③修正】巨大おつりモーダルの表示（3秒タイマーなし、タップ消滅式）
  showChangePopup(change, total, paymentInserted);
}

/**
 * 【問題③修正】巨大おつりポップアップ表示（自動消滅なし、タップまたはEnterで消滅）
 * @param {number} change 
 * @param {number} total 
 * @param {number} paid 
 */
function showChangePopup(change, total, paid) {
  const modal = document.getElementById('change-popup-modal');
  const changeEl = document.getElementById('popup-change-amount');
  const totalEl = document.getElementById('popup-total-amount');
  const paidEl = document.getElementById('popup-paid-amount');

  if (changeEl) changeEl.textContent = `¥${change.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `¥${total.toLocaleString()}`;
  if (paidEl) paidEl.textContent = `¥${paid.toLocaleString()}`;

  modal.classList.remove('hidden');

  // カゴは即時クリアして次客対応の準備を完了
  clearCart(false);
  renderRegisterGrid();
}

/**
 * 巨大おつりポップアップ消滅（タップ・Enterで確実に実行）
 */
function dismissChangePopup() {
  const modal = document.getElementById('change-popup-modal');
  if (modal) modal.classList.add('hidden');
}

// =========================================================
// 9. 売上ダッシュボード & VOID（取消）機能
// =========================================================

function renderSalesDashboard() {
  const revEl = document.getElementById('sales-total-amount');
  const custEl = document.getElementById('sales-customer-count');
  const soldEl = document.getElementById('sales-items-sold');

  if (revEl) revEl.textContent = storeData.sales.totalRevenue.toLocaleString();
  if (custEl) custEl.textContent = storeData.sales.customerCount.toLocaleString();
  if (soldEl) soldEl.textContent = storeData.sales.itemsSoldCount.toLocaleString();

  // ランキング集計
  const sortedProds = [...storeData.products]
    .sort((a, b) => (b.sold || 0) - (a.sold || 0));

  const maxSold = sortedProds[0]?.sold || 1;
  const rankContainer = document.getElementById('sales-ranking-list');
  if (rankContainer) {
    rankContainer.innerHTML = '';
    sortedProds.slice(0, 5).forEach((p, idx) => {
      const soldCount = p.sold || 0;
      const percentage = Math.max(6, Math.round((soldCount / (maxSold || 1)) * 100));

      const div = document.createElement('div');
      div.className = 'bg-white p-2.5 rounded-lg border border-slate-200';
      div.innerHTML = `
        <div class="flex justify-between items-center text-xs sm:text-sm font-bold mb-1">
          <div class="flex items-center gap-1.5">
            <span class="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">${idx + 1}位</span>
            <span class="text-slate-900">${p.emoji || '🏷️'} ${p.name}</span>
          </div>
          <span class="text-blue-600 font-mono font-bold">${soldCount}点 (¥${(soldCount * p.price).toLocaleString()})</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: ${percentage}%"></div>
        </div>
      `;
      rankContainer.appendChild(div);
    });
  }

  // 取引履歴
  const histContainer = document.getElementById('sales-history-list');
  if (histContainer) {
    histContainer.innerHTML = '';

    if (storeData.sales.receipts.length === 0) {
      histContainer.innerHTML = '<p class="text-slate-400 text-center py-8 font-bold text-xs">会計記録はまだありません</p>';
    } else {
      storeData.sales.receipts.forEach(r => {
        const div = document.createElement('div');
        const isVoid = r.isVoid === true;
        div.className = `bg-white p-2.5 sm:p-3 rounded-lg border ${isVoid ? 'border-slate-200 bg-slate-50/70 opacity-60' : 'border-slate-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-2`;

        const itemsSummary = r.items.map(it => `${it.name}×${it.count}`).join(' / ');

        div.innerHTML = `
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 mb-0.5">
              <span class="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">${r.registerId || 'レジ1'}</span>
              <span class="text-xs text-slate-400 font-mono">${r.date}</span>
              ${isVoid ? '<span class="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded border border-rose-300">取消済 (VOID)</span>' : ''}
            </div>
            <span class="text-xs sm:text-sm font-bold text-slate-800 block truncate ${isVoid ? 'line-through text-slate-400' : ''}">${itemsSummary}</span>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <div class="text-right">
              <span class="font-black text-sm sm:text-base ${isVoid ? 'line-through text-slate-400' : 'text-slate-900'}">¥${r.total.toLocaleString()}</span>
              <span class="text-[11px] text-emerald-600 block font-bold font-mono">おつり ¥${r.change.toLocaleString()}</span>
            </div>

            ${!isVoid ? `
              <button onclick="promptVoidReceipt('${r.id}')" class="pos-btn px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 rounded-md text-xs font-bold">
                <i class="fa-solid fa-rotate-left"></i>
                <span>取消</span>
              </button>
            ` : `
              <span class="text-xs text-slate-400 px-2 py-1 font-bold">取消済</span>
            `}
          </div>
        `;
        histContainer.appendChild(div);
      });
    }
  }
}

function promptVoidReceipt(receiptId) {
  Sound.click();
  const receipt = storeData.sales.receipts.find(r => r.id === receiptId);
  if (!receipt || receipt.isVoid) return;

  showConfirm(
    'この取引を取り消しますか？',
    `【対象取引】\n合計金額: ¥${receipt.total.toLocaleString()}\n内容: ${receipt.items.map(i => i.name + '×' + i.count).join(', ')}\n\n実行すると売上・客数が減算され、販売された商品の在庫が自動で復元されます。`,
    () => executeVoidReceipt(receiptId),
    null,
    '↩️'
  );
}

function executeVoidReceipt(receiptId) {
  const receipt = storeData.sales.receipts.find(r => r.id === receiptId);
  if (!receipt || receipt.isVoid) return;

  receipt.items.forEach(it => {
    if (it.productId) {
      const prod = storeData.products.find(p => p.id === it.productId);
      if (prod) {
        prod.stock += it.count;
        prod.sold = Math.max(0, (prod.sold || 0) - it.count);
      }
    }
  });

  storeData.sales.totalRevenue = Math.max(0, storeData.sales.totalRevenue - receipt.total);
  storeData.sales.customerCount = Math.max(0, storeData.sales.customerCount - 1);

  const itemCount = receipt.items.reduce((sum, it) => sum + it.count, 0);
  storeData.sales.itemsSoldCount = Math.max(0, storeData.sales.itemsSoldCount - itemCount);

  receipt.isVoid = true;

  saveStoreData();
  renderSalesDashboard();
  renderRegisterGrid();
  renderInventoryList();

  showAlert('取消完了', `取引 [${receipt.id}] を取り消し、在庫を元に戻しました。`, '✅');
}

function resetSalesDataPrompt() {
  Sound.click();
  showConfirm('売上データをリセットしますか？', '本日のお会計記録、売上金額、商品の販売数をすべて 0 に戻します。\n（商品マスターや在庫データは保持されます）', () => {
    storeData.sales = {
      totalRevenue: 0,
      customerCount: 0,
      itemsSoldCount: 0,
      receipts: []
    };
    storeData.products.forEach(p => p.sold = 0);
    saveStoreData();
    renderSalesDashboard();
    renderRegisterGrid();
    showAlert('リセット完了', '売上データを 0 に初期化しました。', '🔄');
  }, null, '⚠️');
}

// =========================================================
// 10. 売上報告用 CSV エクスポート (UTF-8 BOM付き)
// =========================================================

function downloadCSV(filename, csvContent) {
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportProductsSummaryCSV() {
  Sound.click();
  const rows = [
    ['商品コード', '商品名', 'カテゴリ', '単価', '販売数', '売上小計', '残在庫数']
  ];

  storeData.products.forEach(p => {
    const code = p.barcode || p.id;
    const name = p.name;
    const cat = p.category || '';
    const price = p.price;
    const sold = p.sold || 0;
    const subtotal = sold * price;
    const stock = p.stock || 0;

    rows.push([
      `"${code}"`,
      `"${name.replace(/"/g, '""')}"`,
      `"${cat.replace(/"/g, '""')}"`,
      price,
      sold,
      subtotal,
      stock
    ]);
  });

  const csvContent = rows.map(r => r.join(',')).join('\r\n');
  const now = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  downloadCSV(`sales_products_summary_${now}.csv`, csvContent);
}

function exportReceiptsDetailCSV() {
  Sound.click();
  const rows = [
    ['取引ID', 'レジ名', '日時', '販売明細', '合計金額', 'お預かり金額', 'おつり', '取消ステータス']
  ];

  storeData.sales.receipts.forEach(r => {
    const itemsDetail = r.items.map(it => `${it.name} x ${it.count} (¥${it.subtotal})`).join(' ; ');
    const status = r.isVoid ? '取消済' : '有効';

    rows.push([
      `"${r.id}"`,
      `"${(r.registerId || 'レジ1').replace(/"/g, '""')}"`,
      `"${r.date.replace(/"/g, '""')}"`,
      `"${itemsDetail.replace(/"/g, '""')}"`,
      r.total,
      r.paid,
      r.change,
      `"${status}"`
    ]);
  });

  const csvContent = rows.map(r => r.join(',')).join('\r\n');
  const now = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  downloadCSV(`sales_receipts_detail_${now}.csv`, csvContent);
}

// =========================================================
// 11. 複数端末売上合算ツール（マージ集計）
// =========================================================

function handleMergeFilesInput(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  processMergeFiles(Array.from(files));
}

function handleMergeDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropzone = document.getElementById('merge-dropzone');
  if (dropzone) dropzone.classList.add('bg-indigo-100/90', 'border-indigo-500');
}

function handleMergeDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropzone = document.getElementById('merge-dropzone');
  if (dropzone) dropzone.classList.remove('bg-indigo-100/90', 'border-indigo-500');
}

function handleMergeDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropzone = document.getElementById('merge-dropzone');
  if (dropzone) dropzone.classList.remove('bg-indigo-100/90', 'border-indigo-500');

  const files = event.dataTransfer.files;
  if (files && files.length > 0) {
    processMergeFiles(Array.from(files));
  }
}

function processMergeFiles(fileList) {
  Sound.click();
  const jsonFiles = fileList.filter(f => f.name.endsWith('.json') || f.type === 'application/json');

  if (jsonFiles.length === 0) {
    showAlert('ファイル形式エラー', 'JSONファイル（.json）を選択してください。', '⚠️');
    return;
  }

  const readPromises = jsonFiles.map(file => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          resolve({ file: file.name, data: parsed, ok: true });
        } catch (err) {
          resolve({ file: file.name, error: err, ok: false });
        }
      };
      reader.onerror = () => resolve({ file: file.name, ok: false });
      reader.readAsText(file);
    });
  });

  Promise.all(readPromises).then(results => {
    const validResults = results.filter(r => r.ok && r.data);
    if (validResults.length === 0) {
      showAlert('読み込み失敗', '有効なPOSデータJSONを読み込めませんでした。', '⚠️');
      return;
    }

    // ファイルから読み込んだデータを既存ソースに追加・統合
    validResults.forEach(res => {
      const idx = mergedDataSources.findIndex(s => s.file === res.file);
      if (idx !== -1) mergedDataSources[idx] = res;
      else mergedDataSources.push(res);
    });

    mergeSalesData(mergedDataSources);
  });
}

// =========================================================
// 売上QRコード表示モーダル制御（【要望⑤対応】）
// =========================================================

function openSalesQrModal() {
  Sound.click();
  const modal = document.getElementById('sales-qr-display-modal');
  const container = document.getElementById('sales-qrcode-container');
  const termLabel = document.getElementById('sales-qr-terminal-label');
  const revEl = document.getElementById('sales-qr-revenue');
  const custEl = document.getElementById('sales-qr-customers');
  const itemsEl = document.getElementById('sales-qr-items');

  const regName = storeData.registerId || 'レジ1';
  if (termLabel) termLabel.textContent = `端末: ${regName} (${storeData.shopTitle || ''})`;
  if (revEl) revEl.textContent = `¥${storeData.sales.totalRevenue.toLocaleString()}`;
  if (custEl) custEl.textContent = `${storeData.sales.customerCount}人`;
  if (itemsEl) itemsEl.textContent = `${storeData.sales.itemsSoldCount}点`;

  // QRコード化する高効率データオブジェクト（短縮キーでデータ量を極小化し、カメラ読取成功率を最大化）
  const qrPayload = {
    _t: 'POS_QRSYNC',
    reg: regName,
    shop: storeData.shopTitle || '',
    rev: storeData.sales.totalRevenue,
    cust: storeData.sales.customerCount,
    sold: storeData.sales.itemsSoldCount,
    recs: storeData.sales.receipts.map(r => ({
      id: r.id,
      reg: r.registerId || regName,
      ts: r.timestamp,
      dt: r.date,
      tot: r.total,
      pd: r.paid,
      ch: r.change,
      vd: r.isVoid ? 1 : 0,
      disc: r.discount ? {
        t: r.discount.type,
        v: r.discount.value,
        l: r.discount.label,
        a: r.discount.amount
      } : null,
      items: r.items.map(it => ({
        pid: it.productId,
        n: it.name,
        em: it.emoji,
        p: it.price,
        c: it.count,
        sub: it.subtotal
      }))
    }))
  };

  if (container) {
    container.innerHTML = '';
    try {
      if (typeof qrcode !== 'undefined') {
        let jsonStr = JSON.stringify(qrPayload);

        // QR生成ヘルパー（qrcode-generator: Type 0 = 自動バージョン 1〜40, 'M' = 誤り訂正15%）
        const generateQrSvg = (str) => {
          const qr = qrcode(0, 'M');
          qr.addData(str);
          qr.make();
          return qr.createSvgTag(4, 4);
        };

        let svgHtml = '';
        try {
          svgHtml = generateQrSvg(jsonStr);
        } catch (lenErr) {
          console.warn('QR code length exceeded, trimming receipts to latest 30:', lenErr);
          // 件数が非常に多い場合は直近30件に絞って再試行
          qrPayload.recs = qrPayload.recs.slice(0, 30);
          jsonStr = JSON.stringify(qrPayload);
          try {
            svgHtml = generateQrSvg(jsonStr);
          } catch (lenErr2) {
            console.warn('QR code length exceeded, trimming receipts to latest 10:', lenErr2);
            // さらに直近10件に絞る
            qrPayload.recs = qrPayload.recs.slice(0, 10);
            jsonStr = JSON.stringify(qrPayload);
            svgHtml = generateQrSvg(jsonStr);
          }
        }

        container.innerHTML = `
          <div class="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow-xs border border-slate-200">
            <div class="w-[240px] h-[240px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full">
              ${svgHtml}
            </div>
          </div>
        `;
      } else {
        container.innerHTML = '<p class="text-rose-600 text-xs font-bold p-3">QRコード生成ライブラリを読み込み中です。少々お待ちください。</p>';
      }
    } catch (e) {
      console.error('QR generation error:', e);
      container.innerHTML = `
        <div class="p-3 text-center">
          <p class="text-rose-600 text-xs font-bold mb-2">QRコードの生成に失敗しました。</p>
          <p class="text-slate-500 text-[11px]">売上件数が極めて多い場合は、「JSONファイル保存」による合算機能をご利用ください。</p>
        </div>
      `;
    }
  }

  if (modal) modal.classList.remove('hidden');
}

function closeSalesQrModal() {
  Sound.click();
  const modal = document.getElementById('sales-qr-display-modal');
  if (modal) modal.classList.add('hidden');
}

function mergeSalesData(validResults) {
  const seenReceiptIds = new Set();
  const allReceipts = [];
  const registerStats = {};
  const productStats = {};

  let totalRevenue = 0;
  let customerCount = 0;
  let itemsSoldCount = 0;

  validResults.forEach(item => {
    const data = item.data;
    const receipts = (data.sales && Array.isArray(data.sales.receipts)) ? data.sales.receipts : [];

    receipts.forEach(r => {
      if (!r.id || seenReceiptIds.has(r.id)) return;
      seenReceiptIds.add(r.id);
      allReceipts.push(r);

      const reg = r.registerId || 'レジ未指定';
      if (!registerStats[reg]) {
        registerStats[reg] = { revenue: 0, customers: 0, items: 0 };
      }

      if (!r.isVoid) {
        totalRevenue += r.total;
        customerCount += 1;
        registerStats[reg].revenue += r.total;
        registerStats[reg].customers += 1;

        if (Array.isArray(r.items)) {
          r.items.forEach(it => {
            const count = it.count || 1;
            const subtotal = it.subtotal || (it.price * count);
            itemsSoldCount += count;
            registerStats[reg].items += count;

            const key = it.name;
            if (!productStats[key]) {
              productStats[key] = {
                name: it.name,
                emoji: it.emoji || '🏷️',
                price: it.price || 0,
                count: 0,
                subtotal: 0
              };
            }
            productStats[key].count += count;
            productStats[key].subtotal += subtotal;
          });
        }
      }
    });
  });

  lastMergedData = {
    totalRevenue,
    customerCount,
    itemsSoldCount,
    allReceipts,
    registerStats,
    productStats,
    sourceFileCount: validResults.length
  };

  const resContainer = document.getElementById('merge-result-container');
  const sumRev = document.getElementById('merge-sum-revenue');
  const sumCust = document.getElementById('merge-sum-customers');
  const sumItems = document.getElementById('merge-sum-items');
  const sumRegs = document.getElementById('merge-sum-registers');
  const regBreakdown = document.getElementById('merge-registers-breakdown');
  const prodBreakdown = document.getElementById('merge-products-breakdown');

  if (sumRev) sumRev.textContent = `¥${totalRevenue.toLocaleString()}`;
  if (sumCust) sumCust.textContent = `${customerCount.toLocaleString()}人`;
  if (sumItems) sumItems.textContent = `${itemsSoldCount.toLocaleString()}点`;
  if (sumRegs) sumRegs.textContent = `${Object.keys(registerStats).length}台 (${validResults.length}ファイル)`;

  if (regBreakdown) {
    regBreakdown.innerHTML = '';
    Object.keys(registerStats).forEach(reg => {
      const s = registerStats[reg];
      const div = document.createElement('div');
      div.className = 'flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-200';
      div.innerHTML = `
        <span class="font-bold text-slate-800">${reg}</span>
        <span class="text-slate-600 font-mono">${s.customers}客 / ${s.items}点</span>
        <span class="font-black text-blue-600 font-mono">¥${s.revenue.toLocaleString()}</span>
      `;
      regBreakdown.appendChild(div);
    });
  }

  if (prodBreakdown) {
    prodBreakdown.innerHTML = '';
    const sortedProds = Object.values(productStats).sort((a, b) => b.count - a.count);
    sortedProds.slice(0, 10).forEach(p => {
      const div = document.createElement('div');
      div.className = 'flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-200';
      div.innerHTML = `
        <span class="font-bold text-slate-800 truncate max-w-[140px]">${p.name}</span>
        <span class="text-slate-600 font-mono">${p.count}点</span>
        <span class="font-black text-emerald-600 font-mono">¥${p.subtotal.toLocaleString()}</span>
      `;
      prodBreakdown.appendChild(div);
    });
  }

  if (resContainer) resContainer.classList.remove('hidden');

  showAlert('合算完了', `全 ${validResults.length} ファイルから ${seenReceiptIds.size} 件の取引を重複排除して集計しました。\n合算総売上: ¥${totalRevenue.toLocaleString()}`, '📊');
}

function exportMergedCSV() {
  if (!lastMergedData) return;
  Sound.click();

  const rows = [
    ['=== 複数レジ合算集計レポート ==='],
    ['合算総売上', lastMergedData.totalRevenue],
    ['合算客数', lastMergedData.customerCount],
    ['合算販売総数', lastMergedData.itemsSoldCount],
    ['読み込みファイル数', lastMergedData.sourceFileCount],
    [],
    ['--- レジ別内訳 ---'],
    ['レジ名', '客数', '販売数', '売上金額']
  ];

  Object.keys(lastMergedData.registerStats).forEach(reg => {
    const s = lastMergedData.registerStats[reg];
    rows.push([`"${reg}"`, s.customers, s.items, s.revenue]);
  });

  rows.push([]);
  rows.push(['--- 商品別販売集計 ---']);
  rows.push(['商品名', '単価', '販売数', '売上小計']);

  Object.values(lastMergedData.productStats).sort((a, b) => b.count - a.count).forEach(p => {
    rows.push([`"${p.name}"`, p.price, p.count, p.subtotal]);
  });

  const csvContent = rows.map(r => r.join(',')).join('\r\n');
  const now = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  downloadCSV(`merged_pos_sales_report_${now}.csv`, csvContent);
}

// =========================================================
// 12. 在庫管理
// =========================================================

function renderInventoryList() {
  const container = document.getElementById('inventory-list');
  if (!container) return;
  container.innerHTML = '';

  storeData.products.forEach(p => {
    const isOutOfStock = p.stock <= 0;
    const isLow = p.stock > 0 && p.stock <= 5;
    const card = document.createElement('div');
    card.className = `pos-card p-3.5 flex flex-col justify-between gap-3 ${isOutOfStock ? 'border-rose-300 bg-rose-50/40' : (isLow ? 'border-amber-300 bg-amber-50/30' : '')}`;
    card.innerHTML = `
      <!-- 上段：商品基本情報（絵文字アイコン、商品名、カテゴリ、単価、販売済数） -->
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-2xl bg-slate-100 rounded-xl p-2 border border-slate-200 shrink-0 select-none shadow-2xs">${p.emoji || '🏷️'}</span>
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-bold text-sm sm:text-base text-slate-900 truncate" title="${p.name}">${p.name}</h4>
            <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium shrink-0">${p.category || 'その他'}</span>
            ${isOutOfStock ? '<span class="text-[10px] font-bold bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded border border-rose-300 shrink-0">品切れ</span>' : (isLow ? '<span class="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-300 shrink-0">残少</span>' : '')}
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-500 font-mono mt-0.5">
            <span class="font-bold text-slate-700">単価: ¥${p.price.toLocaleString()}</span>
            <span>•</span>
            <span>販売済: ${p.sold || 0}点</span>
          </div>
        </div>
      </div>

      <!-- 下段：ステッパー ＆ 直接数値入力エリア -->
      <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/80">
        <span class="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
          <i class="fa-solid fa-boxes-stacked text-slate-400"></i>
          <span>現在庫:</span>
        </span>
        <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-300 shadow-2xs shrink-0">
          <button type="button" onclick="adjustProductStock('${p.id}', -5)" class="pos-btn px-2 py-1 bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 text-xs font-bold rounded-lg border border-slate-200 shadow-2xs" title="5個減らす">
            -5
          </button>
          <button type="button" onclick="adjustProductStock('${p.id}', -1)" class="pos-btn w-7 h-7 bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 text-sm font-black rounded-lg border border-slate-200 shadow-2xs" title="1個減らす">
            －
          </button>

          <!-- 在庫数の直接数値編集 -->
          <div class="relative flex items-center">
            <input type="number" min="0" max="99999" value="${p.stock}"
              onchange="handleDirectStockChange('${p.id}', this.value)"
              onkeydown="if(event.key==='Enter'){this.blur();}"
              class="w-16 sm:w-18 text-center font-black text-sm sm:text-base border border-slate-300 rounded-lg py-0.5 px-1 bg-white text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isOutOfStock ? 'text-rose-600 font-black' : ''}"
              title="クリックして数値を直接入力・変更できます">
          </div>

          <button type="button" onclick="adjustProductStock('${p.id}', 1)" class="pos-btn w-7 h-7 bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 text-sm font-black rounded-lg border border-slate-200 shadow-2xs" title="1個増やす">
            ＋
          </button>
          <button type="button" onclick="adjustProductStock('${p.id}', 5)" class="pos-btn px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-2xs" title="5個増やす">
            +5
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function adjustProductStock(productId, delta) {
  Sound.click();
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  prod.stock = Math.max(0, (prod.stock || 0) + delta);

  // カート内個数の整合性確認
  const cartItem = cart.find(it => it.productId === productId);
  if (cartItem && cartItem.count > prod.stock) {
    if (prod.stock === 0) {
      cart = cart.filter(it => it.productId !== productId);
    } else {
      cartItem.count = prod.stock;
    }
    renderCart();
  }

  saveStoreData();
  renderInventoryList();
  renderRegisterGrid();
}

function handleDirectStockChange(productId, val) {
  Sound.click();
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  const parsed = parseInt(val, 10);
  const newStock = isNaN(parsed) ? 0 : Math.max(0, parsed);
  prod.stock = newStock;

  // カート内個数の整合性確認
  const cartItem = cart.find(it => it.productId === productId);
  if (cartItem && cartItem.count > prod.stock) {
    if (prod.stock === 0) {
      cart = cart.filter(it => it.productId !== productId);
    } else {
      cartItem.count = prod.stock;
    }
    renderCart();
  }

  saveStoreData();
  renderInventoryList();
  renderRegisterGrid();
  showAlert('在庫数更新', `「${prod.name}」の在庫数を ${newStock}点 に更新しました。`, '📦');
}

// 既存互換用
function restockProduct(productId, amount) {
  adjustProductStock(productId, amount);
}

function restockAllProducts(amount) {
  Sound.click();
  storeData.products.forEach(p => {
    p.stock += amount;
  });
  saveStoreData();
  renderInventoryList();
  renderRegisterGrid();
  showAlert('補充完了', `すべての商品を +${amount}点 補充しました。`, '📦');
}

// =========================================================
// 13. バーコード印刷
// =========================================================

function renderBarcodeCards() {
  const container = document.getElementById('printable-barcode-sheet');
  if (!container) return;
  container.innerHTML = '';

  storeData.products.forEach((p, idx) => {
    const card = document.createElement('div');
    card.id = `barcode-print-card-${p.id}`;
    card.className = 'bg-white border border-slate-300 rounded-xl p-3 flex flex-col items-center justify-between text-center page-break-inside-avoid shadow-sm';

    const svgId = `barcode-svg-render-${idx}`;
    card.innerHTML = `
      <div class="w-full flex justify-between items-center text-[10px] font-bold text-slate-400 border-b border-slate-200 pb-1">
        <span>${storeData.shopTitle}</span>
        <span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">${p.category}</span>
      </div>

      <div class="my-2">
        <span class="text-3xl block">${p.emoji || '🏷️'}</span>
        <h4 class="font-bold text-xs sm:text-sm text-slate-800 mt-1 line-clamp-1">${p.name}</h4>
        <div class="text-base font-black text-blue-600 mt-0.5">¥${p.price.toLocaleString()}</div>
      </div>

      <div class="w-full flex justify-center py-1">
        <svg id="${svgId}" class="max-w-full h-10"></svg>
      </div>
      <span class="text-[10px] font-mono text-slate-500 font-bold tracking-wider">${p.barcode || 'NO BARCODE'}</span>

      <div class="w-full pt-2 mt-1 border-t border-slate-100 flex gap-1.5 no-print">
        <button onclick="printSingleCard('${p.id}')" title="商品POPカードとして1枚印刷" class="pos-btn flex-1 py-1 px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 rounded">
          <i class="fa-solid fa-file-lines text-slate-500"></i> POP印刷
        </button>
        <button onclick="openProductLabelModal('${p.id}')" title="商品貼付用の値札ラベル用シートを印刷" class="pos-btn flex-1 py-1 px-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded shadow-2xs">
          <i class="fa-solid fa-tags"></i> ラベル印刷
        </button>
      </div>
    `;
    container.appendChild(card);

    setTimeout(() => {
      const svgEl = document.getElementById(svgId);
      if (svgEl && p.barcode) {
        try {
          const isEAN13 = /^\d{13}$/.test(p.barcode);
          JsBarcode(svgEl, p.barcode, {
            format: isEAN13 ? "EAN13" : "CODE128",
            width: 1.5,
            height: 36,
            displayValue: false,
            margin: 2
          });
        } catch (e) {
          try {
            JsBarcode(svgEl, p.barcode, { format: "CODE128", width: 1.5, height: 36, displayValue: false, margin: 2 });
          } catch (err) {}
        }
      }
    }, 10);
  });
}

function printAllBarcodeCards() {
  Sound.click();
  document.body.classList.add("print-all");
  window.print();
}

function printSingleCard(productId) {
  Sound.click();
  const cardEl = document.getElementById(`barcode-print-card-${productId}`);
  if (!cardEl) return;

  let singleTarget = document.getElementById('single-print-target');
  if (singleTarget) singleTarget.remove();

  singleTarget = cardEl.cloneNode(true);
  singleTarget.id = 'single-print-target';
  document.body.appendChild(singleTarget);

  document.body.classList.add("print-single");
  window.print();
}

// =========================================================
// 商品貼付ラベルシート印刷制御（【要望②対応】）
// =========================================================

let currentLabelConfig = {
  productId: null,
  layout: '24', // '24' (3列×8行) | '44' (4列×11行) | 'single'
  qtyMode: 'sheet', // 'sheet' | 'stock' | 'custom'
  customQty: 24
};

function openProductLabelModal(productId) {
  Sound.click();
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  currentLabelConfig.productId = productId;
  currentLabelConfig.qtyMode = 'sheet';
  currentLabelConfig.layout = '24';
  currentLabelConfig.customQty = 24;

  const modal = document.getElementById('product-label-modal');
  const prodIdInput = document.getElementById('label-modal-prod-id');
  const previewName = document.getElementById('label-preview-name');
  const previewPrice = document.getElementById('label-preview-price');
  const previewBarcode = document.getElementById('label-preview-barcode');
  const stockQtySpan = document.getElementById('label-stock-qty');
  const customQtyInput = document.getElementById('label-custom-qty-input');

  if (prodIdInput) prodIdInput.value = prod.id;
  if (previewName) previewName.textContent = prod.name;
  if (previewPrice) previewPrice.textContent = `¥${prod.price.toLocaleString()}`;
  if (previewBarcode) previewBarcode.textContent = prod.barcode || 'NO BARCODE';
  if (stockQtySpan) stockQtySpan.textContent = prod.stock || 0;
  if (customQtyInput) customQtyInput.value = 24;

  // プレビューのバーコード生成
  setTimeout(() => {
    const previewSvg = document.getElementById('label-preview-svg');
    if (previewSvg && prod.barcode) {
      try {
        const isEAN13 = /^\d{13}$/.test(prod.barcode);
        JsBarcode(previewSvg, prod.barcode, {
          format: isEAN13 ? "EAN13" : "CODE128",
          width: 1.4,
          height: 32,
          displayValue: false,
          margin: 0
        });
      } catch (e) {
        try {
          JsBarcode(previewSvg, prod.barcode, { format: "CODE128", width: 1.4, height: 32, displayValue: false, margin: 0 });
        } catch (err) {}
      }
    }
  }, 10);

  selectLabelLayout('24');
  selectLabelQuantityMode('sheet');

  if (modal) modal.classList.remove('hidden');
}

function closeProductLabelModal() {
  Sound.click();
  const modal = document.getElementById('product-label-modal');
  if (modal) modal.classList.add('hidden');
}

function selectLabelLayout(layout) {
  Sound.click();
  currentLabelConfig.layout = layout;

  const btn24 = document.getElementById('label-layout-btn-24');
  const btn44 = document.getElementById('label-layout-btn-44');
  const btnSingle = document.getElementById('label-layout-btn-single');
  const sheetMaxQty = document.getElementById('label-sheet-max-qty');

  const defaultClasses = 'pos-btn py-2 px-1 text-center bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg font-bold';
  const activeClasses = 'pos-btn py-2 px-1 text-center bg-blue-50 border-2 border-blue-600 text-blue-900 rounded-lg font-bold';

  if (btn24) btn24.className = layout === '24' ? activeClasses : defaultClasses;
  if (btn44) btn44.className = layout === '44' ? activeClasses : defaultClasses;
  if (btnSingle) btnSingle.className = layout === 'single' ? activeClasses : defaultClasses;

  let maxQty = 24;
  if (layout === '44') maxQty = 44;
  else if (layout === 'single') maxQty = 1;

  if (sheetMaxQty) sheetMaxQty.textContent = maxQty;

  // シート満杯モードの場合は数量も連動更新
  if (currentLabelConfig.qtyMode === 'sheet') {
    currentLabelConfig.customQty = maxQty;
    const input = document.getElementById('label-custom-qty-input');
    if (input) input.value = maxQty;
  }
}

function selectLabelQuantityMode(mode) {
  Sound.click();
  currentLabelConfig.qtyMode = mode;

  const btnSheet = document.getElementById('label-qty-btn-sheet');
  const btnStock = document.getElementById('label-qty-btn-stock');
  const btnCustom = document.getElementById('label-qty-btn-custom');
  const customRow = document.getElementById('label-custom-qty-row');

  const defaultClasses = 'pos-btn py-1.5 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-bold';
  const activeClasses = 'pos-btn py-1.5 bg-blue-600 text-white rounded font-bold';

  if (btnSheet) btnSheet.className = mode === 'sheet' ? activeClasses : defaultClasses;
  if (btnStock) btnStock.className = mode === 'stock' ? activeClasses : defaultClasses;
  if (btnCustom) btnCustom.className = mode === 'custom' ? activeClasses : defaultClasses;

  if (customRow) {
    if (mode === 'custom') customRow.classList.remove('hidden');
    else customRow.classList.add('hidden');
  }

  const prod = storeData.products.find(p => p.id === currentLabelConfig.productId);
  const input = document.getElementById('label-custom-qty-input');

  if (mode === 'sheet') {
    let sheetQty = currentLabelConfig.layout === '44' ? 44 : (currentLabelConfig.layout === 'single' ? 1 : 24);
    currentLabelConfig.customQty = sheetQty;
    if (input) input.value = sheetQty;
  } else if (mode === 'stock') {
    const stockQty = prod ? Math.max(1, prod.stock || 1) : 1;
    currentLabelConfig.customQty = stockQty;
    if (input) input.value = stockQty;
  }
}

function updateLabelQuantityFromInput() {
  const input = document.getElementById('label-custom-qty-input');
  if (input) {
    const val = parseInt(input.value, 10);
    currentLabelConfig.customQty = Math.max(1, Math.min(val || 1, 200));
  }
}

function executePrintLabels() {
  Sound.click();
  const prod = storeData.products.find(p => p.id === currentLabelConfig.productId);
  if (!prod) return;

  const container = document.getElementById('label-sheet-print-container');
  if (!container) return;
  container.innerHTML = '';

  const borderCheck = document.getElementById('label-print-border-check');
  const withBorder = borderCheck ? borderCheck.checked : true;

  let totalLabels = currentLabelConfig.customQty;
  if (currentLabelConfig.qtyMode === 'sheet') {
    totalLabels = currentLabelConfig.layout === '44' ? 44 : (currentLabelConfig.layout === 'single' ? 1 : 24);
  } else if (currentLabelConfig.qtyMode === 'stock') {
    totalLabels = Math.max(1, prod.stock || 1);
  } else if (currentLabelConfig.layout === 'single') {
    totalLabels = 1;
  }

  // グリッドラッパー
  const gridWrapper = document.createElement('div');
  if (currentLabelConfig.layout === '44') {
    gridWrapper.className = 'label-grid-44';
  } else if (currentLabelConfig.layout === 'single') {
    gridWrapper.className = 'label-grid-single';
  } else {
    gridWrapper.className = 'label-grid-24';
  }

  // 指定枚数分のラベルアイテムを生成（商品名・金額・バーコードのみの純粋な商品貼付ラベル）
  for (let i = 0; i < totalLabels; i++) {
    const labelItem = document.createElement('div');
    labelItem.className = `product-label-item ${withBorder ? 'with-border' : ''}`;
    const svgId = `print-label-svg-${i}`;

    labelItem.innerHTML = `
      <div class="product-label-header">
        <span class="product-label-name">${prod.name}</span>
        <span class="product-label-price">¥${prod.price.toLocaleString()}</span>
      </div>
      <div class="product-label-barcode">
        <svg id="${svgId}"></svg>
      </div>
      <div class="product-label-code">${prod.barcode || 'NO BARCODE'}</div>
    `;

    gridWrapper.appendChild(labelItem);
  }

  container.appendChild(gridWrapper);
  container.classList.remove('hidden');

  // 各バーコードSVGを描画
  const isEAN13 = /^\d{13}$/.test(prod.barcode);
  for (let i = 0; i < totalLabels; i++) {
    const svgEl = document.getElementById(`print-label-svg-${i}`);
    if (svgEl && prod.barcode) {
      try {
        JsBarcode(svgEl, prod.barcode, {
          format: isEAN13 ? "EAN13" : "CODE128",
          width: currentLabelConfig.layout === '44' ? 1.1 : 1.4,
          height: currentLabelConfig.layout === '44' ? 24 : 34,
          displayValue: false,
          margin: 0
        });
      } catch (e) {
        try {
          JsBarcode(svgEl, prod.barcode, {
            format: "CODE128",
            width: currentLabelConfig.layout === '44' ? 1.1 : 1.4,
            height: currentLabelConfig.layout === '44' ? 24 : 34,
            displayValue: false,
            margin: 0
          });
        } catch (err) {}
      }
    }
  }

  // モーダルを閉じて印刷プレビューを表示
  closeProductLabelModal();

  setTimeout(() => {
    document.body.classList.add('print-labels');
    window.print();
  }, 50);
}

window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-receipt', 'print-all', 'print-single', 'print-labels');
  const singleTarget = document.getElementById('single-print-target');
  if (singleTarget) singleTarget.remove();
  const labelContainer = document.getElementById('label-sheet-print-container');
  if (labelContainer) {
    labelContainer.innerHTML = '';
    labelContainer.classList.add('hidden');
  }
});

// =========================================================
// 14. 設定 & 商品登録 & プリセット切り替え
// =========================================================

function handleAddNewProduct(event) {
  event.preventDefault();
  Sound.click();

  const emoji = document.getElementById('new-prod-emoji').value.trim() || '🏷️';
  const name = document.getElementById('new-prod-name').value.trim();
  const price = parseInt(document.getElementById('new-prod-price').value, 10);
  const stock = parseInt(document.getElementById('new-prod-stock').value, 10);
  const category = document.getElementById('new-prod-category').value;
  const barcode = document.getElementById('new-prod-barcode').value.trim() || generateUniqueJanBarcode();

  if (!name || isNaN(price) || isNaN(stock)) {
    showAlert('入力エラー', '商品名・単価・在庫数を正しく入力してください。', '⚠️');
    return;
  }

  const newId = 'prod_' + Date.now();
  const newProduct = {
    id: newId,
    name: name,
    price: Math.max(1, price),
    stock: Math.max(1, stock),
    sold: 0,
    category: category,
    barcode: barcode,
    emoji: emoji
  };

  storeData.products.push(newProduct);
  saveStoreData();

  renderRegisterGrid();
  renderBarcodeCards();
  renderSettingsProductsTable();

  document.getElementById('new-prod-name').value = '';
  document.getElementById('new-prod-barcode').value = generateUniqueJanBarcode();
  updateFormBarcodePreview();

  showAlert('登録完了', `商品「${name}」を追加しました。`, '✅');
}

function renderSettingsProductsTable() {
  const container = document.getElementById('settings-products-table');
  const countEl = document.getElementById('registered-prods-count');
  if (!container) return;

  if (countEl) countEl.textContent = storeData.products.length;
  container.innerHTML = '';

  storeData.products.forEach(p => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 shadow-sm gap-2 hover:bg-slate-50 transition-colors';
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-2xl shrink-0">${p.emoji || '🏷️'}</span>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-bold text-xs sm:text-sm text-slate-800 truncate">${p.name}</span>
            <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">${p.category || 'その他'}</span>
          </div>
          <div class="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
            <span>${p.barcode || 'バーコード未設定'}</span>
            <span>•</span>
            <span class="${p.stock <= 5 ? 'text-amber-600 font-bold' : ''}">在庫: ${p.stock}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <span class="font-black text-xs sm:text-sm text-blue-600 font-mono">¥${p.price.toLocaleString()}</span>
        <button onclick="openEditProductModal('${p.id}')" class="pos-btn px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 rounded-lg flex items-center gap-1" title="商品データを編集">
          <i class="fa-solid fa-pen-to-square"></i>
          <span class="hidden sm:inline">編集</span>
        </button>
        <button onclick="deleteProductPrompt('${p.id}')" class="pos-btn px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold border border-rose-200 rounded-lg" title="削除">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    container.appendChild(row);
  });
}

// =========================================================
// 商品データ編集モーダル制御
// =========================================================

function openEditProductModal(productId) {
  Sound.click();
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  const idInput = document.getElementById('edit-prod-id');
  const emojiInput = document.getElementById('edit-prod-emoji');
  const nameInput = document.getElementById('edit-prod-name');
  const priceInput = document.getElementById('edit-prod-price');
  const stockInput = document.getElementById('edit-prod-stock');
  const catInput = document.getElementById('edit-prod-category');
  const barcodeInput = document.getElementById('edit-prod-barcode');

  if (idInput) idInput.value = prod.id;
  if (emojiInput) emojiInput.value = prod.emoji || '🏷️';
  if (nameInput) nameInput.value = prod.name;
  if (priceInput) priceInput.value = prod.price;
  if (stockInput) stockInput.value = prod.stock;
  if (catInput) catInput.value = prod.category || 'フード';
  if (barcodeInput) barcodeInput.value = prod.barcode || '';

  updateEditBarcodePreview();

  const modal = document.getElementById('edit-product-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeEditProductModal() {
  Sound.click();
  const modal = document.getElementById('edit-product-modal');
  if (modal) modal.classList.add('hidden');
}

function regenerateEditBarcode() {
  Sound.click();
  const input = document.getElementById('edit-prod-barcode');
  if (input) {
    input.value = generateUniqueJanBarcode();
    updateEditBarcodePreview();
  }
}

function updateEditBarcodePreview() {
  const input = document.getElementById('edit-prod-barcode');
  const svg = document.getElementById('edit-barcode-preview');
  if (!input || !svg) return;

  const val = input.value.trim();
  if (val && typeof JsBarcode !== 'undefined') {
    try {
      JsBarcode(svg, val, {
        format: "CODE128",
        width: 1.5,
        height: 34,
        displayValue: true,
        fontSize: 11,
        margin: 2
      });
      svg.style.display = 'block';
    } catch (e) {
      svg.style.display = 'none';
    }
  } else {
    svg.style.display = 'none';
  }
}

function handleSaveEditedProduct(event) {
  event.preventDefault();
  Sound.click();

  const productId = document.getElementById('edit-prod-id').value;
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) {
    showAlert('エラー', '対象の商品が見つかりません。', '⚠️');
    return;
  }

  const emoji = document.getElementById('edit-prod-emoji').value.trim() || '🏷️';
  const name = document.getElementById('edit-prod-name').value.trim();
  const price = parseInt(document.getElementById('edit-prod-price').value, 10);
  const stock = parseInt(document.getElementById('edit-prod-stock').value, 10);
  const category = document.getElementById('edit-prod-category').value;
  const barcode = document.getElementById('edit-prod-barcode').value.trim();

  if (!name || isNaN(price) || isNaN(stock)) {
    showAlert('入力エラー', '商品名・単価・在庫数を正しく入力してください。', '⚠️');
    return;
  }

  // バーコードの重複チェック（他商品と同じバーコードは警告）
  if (barcode) {
    const duplicate = storeData.products.find(p => p.id !== productId && p.barcode === barcode);
    if (duplicate) {
      showAlert('バーコード重複', `バーコード [${barcode}] は既に「${duplicate.name}」で使用されています。`, '⚠️');
      return;
    }
  }

  // 商品データ更新
  prod.emoji = emoji;
  prod.name = name;
  prod.price = Math.max(1, price);
  prod.stock = Math.max(0, stock);
  prod.category = category;
  prod.barcode = barcode;

  // カート内商品の整合性を確保（在庫が減った場合や削除された場合の調整）
  const cartItem = cart.find(it => it.productId === productId);
  if (cartItem) {
    if (prod.stock <= 0) {
      cart = cart.filter(it => it.productId !== productId);
    } else if (cartItem.count > prod.stock) {
      cartItem.count = prod.stock;
    }
  }

  saveStoreData();

  renderSettingsProductsTable();
  renderRegisterGrid();
  renderBarcodeCards();
  renderInventoryList();
  renderCart();

  closeEditProductModal();
  showAlert('更新完了', `商品「${name}」の情報を更新しました。`, '✅');
}

function deleteProductPrompt(productId) {
  Sound.click();
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  showConfirm('商品削除の確認', `「${prod.name}」を商品マスターから削除しますか？`, () => {
    storeData.products = storeData.products.filter(p => p.id !== productId);
    cart = cart.filter(it => it.productId !== productId);
    saveStoreData();
    renderRegisterGrid();
    renderBarcodeCards();
    renderSettingsProductsTable();
    renderCart();
  });
}

function loadPresetShop(presetKey) {
  Sound.click();
  const preset = PRESET_SHOPS[presetKey];
  if (!preset) return;

  showConfirm('プリセット適用の確認', `「${preset.title}」の品揃えデータに切り替えますか？\n（現在の売上記録は保持されます）`, () => {
    storeData.shopTitle = preset.title;
    storeData.products = JSON.parse(JSON.stringify(preset.products));
    cart = [];
    saveStoreData();

    const titleDisplay = document.getElementById('shop-title-display');
    if (titleDisplay) titleDisplay.textContent = preset.title;

    renderRegisterGrid();
    renderBarcodeCards();
    renderSettingsProductsTable();
    renderCart();
    showAlert('切替完了', `「${preset.title}」のデータを適用しました。`, '✅');
  });
}

function exportDataJSON() {
  Sound.click();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storeData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  const now = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  downloadAnchor.setAttribute("download", `pos_backup_${storeData.registerId || 'reg1'}_${now}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importDataJSON(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && Array.isArray(parsed.products)) {
        storeData = parsed;
        saveStoreData();
        renderRegisterGrid();
        renderBarcodeCards();
        renderSettingsProductsTable();
        renderSalesDashboard();
        showAlert('復元完了', '保存されたPOSデータと売上記録を正常に復元しました。', '✅');
      } else {
        showAlert('ファイル形式エラー', '有効なPOSデータJSONではありません。', '⚠️');
      }
    } catch (err) {
      showAlert('エラー', 'JSONファイルの読み込みに失敗しました。', '⚠️');
    }
  };
  reader.readAsText(file);
}

// =========================================================
// 15. 汎用ダイアログ (Alert / Confirm / Prompt)
// =========================================================

let alertModalCallback = null;

function showAlert(title, message, icon = '🔔', onClose = null) {
  const modal = document.getElementById('alert-modal');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const actionsContainer = document.getElementById('alert-actions');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.add('hidden');

  alertModalCallback = onClose;

  if (actionsContainer) {
    actionsContainer.innerHTML = `
      <button onclick="closeAlertModal()" class="pos-btn w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg">
        OK
      </button>
    `;
  }

  modal.classList.remove('hidden');
}

function showConfirm(title, message, onConfirm, onCancel = null) {
  const modal = document.getElementById('alert-modal');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const actionsContainer = document.getElementById('alert-actions');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.add('hidden');

  if (actionsContainer) {
    actionsContainer.innerHTML = '';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'pos-btn flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs sm:text-sm rounded-lg';
    cancelBtn.textContent = 'キャンセル';
    cancelBtn.onclick = () => {
      Sound.click();
      modal.classList.add('hidden');
      if (onCancel) onCancel();
    };

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'pos-btn flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-lg';
    confirmBtn.textContent = '実行する';
    confirmBtn.onclick = () => {
      Sound.click();
      modal.classList.add('hidden');
      if (onConfirm) onConfirm();
    };

    actionsContainer.appendChild(cancelBtn);
    actionsContainer.appendChild(confirmBtn);
  }

  modal.classList.remove('hidden');
}

function showPrompt(title, message, defaultValue = '', onSubmit) {
  const modal = document.getElementById('alert-modal');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const inputEl = document.getElementById('alert-prompt-input');
  const actionsContainer = document.getElementById('alert-actions');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  if (inputContainer && inputEl) {
    inputContainer.classList.remove('hidden');
    inputEl.value = defaultValue;
    setTimeout(() => inputEl.focus(), 80);
  }

  if (actionsContainer) {
    actionsContainer.innerHTML = '';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'pos-btn flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs sm:text-sm rounded-lg';
    cancelBtn.textContent = 'キャンセル';
    cancelBtn.onclick = () => {
      Sound.click();
      modal.classList.add('hidden');
    };

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'pos-btn flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-lg';
    confirmBtn.textContent = '確定';
    confirmBtn.onclick = () => {
      Sound.click();
      const val = inputEl ? inputEl.value : '';
      modal.classList.add('hidden');
      if (onSubmit) onSubmit(val);
    };

    actionsContainer.appendChild(cancelBtn);
    actionsContainer.appendChild(confirmBtn);
  }

  modal.classList.remove('hidden');
}

function closeAlertModal() {
  Sound.click();
  const modal = document.getElementById('alert-modal');
  modal.classList.add('hidden');
  if (alertModalCallback) {
    alertModalCallback();
    alertModalCallback = null;
  }
}

function openHelpModal() {
  Sound.click();
  const modal = document.getElementById('help-modal');
  modal.classList.remove('hidden');
}

function closeHelpModal() {
  Sound.click();
  const modal = document.getElementById('help-modal');
  modal.classList.add('hidden');
}

// =========================================================
// 16. ハードウェアバーコードリーダー常時検知リスナー
// =========================================================

let barcodeBuffer = '';
let lastKeypressTime = 0;
const BARCODE_SCAN_INTERVAL_MS = 65;

window.addEventListener('keydown', (e) => {
  // 巨大おつりポップアップ表示中なら、任意のキー入力（Enter, Space, Escape等）で消滅
  const changePopup = document.getElementById('change-popup-modal');
  if (changePopup && !changePopup.classList.contains('hidden')) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      dismissChangePopup();
      e.preventDefault();
      return;
    }
  }

  // 支払いモーダル表示中に Enter キー押下で会計完了
  const payModal = document.getElementById('payment-modal');
  if (payModal && !payModal.classList.contains('hidden')) {
    if (e.key === 'Enter') {
      const compBtn = document.getElementById('complete-sale-btn');
      if (compBtn && !compBtn.disabled) {
        e.preventDefault();
        executeCompleteSale();
        return;
      }
    }
  }

  const currentTime = Date.now();
  const timeDiff = currentTime - lastKeypressTime;
  lastKeypressTime = currentTime;

  if (e.key === 'Enter') {
    if (barcodeBuffer.length >= 3) {
      const scannedCode = barcodeBuffer.trim();
      barcodeBuffer = '';

      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        if (timeDiff < BARCODE_SCAN_INTERVAL_MS * 3) {
          e.preventDefault();
          e.target.blur();
        }
      }

      handleGlobalBarcodeScanned(scannedCode);
      return;
    }
    barcodeBuffer = '';
    return;
  }

  if (e.key && e.key.length === 1) {
    if (timeDiff > 120 && barcodeBuffer.length > 0) {
      barcodeBuffer = '';
    }
    barcodeBuffer += e.key;
  }
});

function handleGlobalBarcodeScanned(code) {
  const regScreen = document.getElementById('screen-register');
  if (regScreen && regScreen.classList.contains('hidden')) {
    switchTab('register');
  }
  onBarcodeScannedSuccess(code);
}

// =========================================================
// 17. 初期ロード
// =========================================================

window.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
  renderRegisterGrid();
  renderCart();

  const titleDisplay = document.getElementById('shop-title-display');
  if (titleDisplay) titleDisplay.textContent = storeData.shopTitle;

  const settingShopInput = document.getElementById('setting-shop-title');
  if (settingShopInput) settingShopInput.value = storeData.shopTitle || 'イベント・店舗 POSレジ';

  const badgeText = document.getElementById('register-id-badge-text');
  if (badgeText) badgeText.textContent = storeData.registerId || 'レジ1';

  const settingRegInput = document.getElementById('setting-register-id');
  if (settingRegInput) settingRegInput.value = storeData.registerId || 'レジ1';

  const barcodeInput = document.getElementById('new-prod-barcode');
  if (barcodeInput && (!barcodeInput.value || barcodeInput.value.includes('NaN'))) {
    barcodeInput.value = generateUniqueJanBarcode();
    updateFormBarcodePreview();
  }
});

// =========================================================
// 16. PWA (Progressive Web App) & Service Worker 制御
// =========================================================

let deferredInstallPrompt = null;

// Service Worker の登録（オフライン動作対応）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('[PWA] Service Worker registered with scope:', reg.scope);
      })
      .catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
  });
}

// PWA インストールプロンプトの捕捉
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  console.log('[PWA] beforeinstallprompt captured');

  // ヘッダーや設定画面のインストールボタンを表示
  const headerInstallBtn = document.getElementById('pwa-install-btn');
  const settingsInstallBtn = document.getElementById('pwa-settings-install-btn');
  if (headerInstallBtn) headerInstallBtn.classList.remove('hidden');
  if (settingsInstallBtn) settingsInstallBtn.classList.remove('hidden');
});

// インストール完了時のハンドラ
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  console.log('[PWA] App successfully installed!');
  const headerInstallBtn = document.getElementById('pwa-install-btn');
  const settingsInstallBtn = document.getElementById('pwa-settings-install-btn');
  if (headerInstallBtn) headerInstallBtn.classList.add('hidden');
  if (settingsInstallBtn) settingsInstallBtn.classList.add('hidden');
  showAlert('インストール完了', 'POSレジシステムが端末にインストールされました！ホーム画面やアプリ一覧から直接全画面で起動できます。', '🎉');
});

// PWA インストール実行
function triggerPwaInstall() {
  Sound.click();
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted the install prompt');
      } else {
        console.log('[PWA] User dismissed the install prompt');
      }
      deferredInstallPrompt = null;
    });
  } else {
    // iOS Safari または既にインストール済みの案内
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIos) {
      showAlert(
        'iPhone / iPadでのインストール',
        'Safari画面下部の「共有アイコン（四角から上矢印）」をタップし、メニューから「ホーム画面に追加」を選択してください。\n電波のない場所でもアプリとしてサクサク起動できます。',
        '📱'
      );
    } else {
      showAlert(
        'アプリのインストール',
        'ブラウザ右上のメニュー（︙）から「アプリをインストール」または「ホーム画面に追加」を選択してください。\nインストール済みの場合はアプリ一覧から直接起動できます。',
        '📲'
      );
    }
  }
}

