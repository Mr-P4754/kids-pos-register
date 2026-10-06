const STORAGE_KEY = 'KIDS_BARCODE_POS_DATA_V3';
const SALES_CACHE_KEY = 'KIDS_BARCODE_POS_SALES_CACHE_V1';

// プリセット商品群（JAN-13風の初期バーコード付き）
const PRESET_SHOPS = {
  convenience: {
    title: "🏪 24じかん こどもコンビニ",
    products: [
      { id: 'cv_1', name: 'しゃけのおにぎり', price: 140, emoji: '🍙', stock: 12, sold: 0, category: 'ごはん', barcode: '4901001000012' },
      { id: 'cv_2', name: 'たまごサンドイッチ', price: 230, emoji: '🥪', stock: 8, sold: 0, category: 'ごはん', barcode: '4901001000029' },
      { id: 'cv_3', name: 'からあげチキン', price: 240, emoji: '🍗', stock: 10, sold: 0, category: 'おかし', barcode: '4901001000036' },
      { id: 'cv_4', name: 'あつあつ 肉まん', price: 160, emoji: '🥟', stock: 6, sold: 0, category: 'ごはん', barcode: '4901001000043' },
      { id: 'cv_5', name: 'ポテトチップス', price: 150, emoji: '🥔', stock: 15, sold: 0, category: 'おかし', barcode: '4901001000050' },
      { id: 'cv_6', name: 'ソフトクリーム', price: 180, emoji: '🍦', stock: 9, sold: 0, category: 'おかし', barcode: '4901001000067' },
      { id: 'cv_7', name: 'りょくちゃ 500ml', price: 130, emoji: '🍵', stock: 16, sold: 0, category: 'のみもの', barcode: '4901001000074' },
      { id: 'cv_8', name: 'いちごオ・レ', price: 140, emoji: '🍓', stock: 11, sold: 0, category: 'のみもの', barcode: '4901001000081' },
    ]
  },
  sweets: {
    title: "🍭 かわいい おかしやさん",
    products: [
      { id: 'sw_1', name: 'ペロペロキャンディ', price: 80, emoji: '🍭', stock: 15, sold: 0, category: 'おかし', barcode: '4902002000019' },
      { id: 'sw_2', name: 'ショートケーキ', price: 320, emoji: '🍰', stock: 8, sold: 0, category: 'おかし', barcode: '4902002000026' },
      { id: 'sw_3', name: 'チョコドーナツ', price: 150, emoji: '🍩', stock: 12, sold: 0, category: 'おかし', barcode: '4902002000033' },
      { id: 'sw_4', name: 'カラフルアイス', price: 200, emoji: '🍨', stock: 10, sold: 0, category: 'おかし', barcode: '4902002000040' },
      { id: 'sw_5', name: 'カスタードプリン', price: 180, emoji: '🍮', stock: 6, sold: 0, category: 'おかし', barcode: '4902002000057' },
      { id: 'sw_6', name: 'クッキーアソート', price: 120, emoji: '🍪', stock: 20, sold: 0, category: 'おかし', barcode: '4902002000064' },
      { id: 'sw_7', name: '板チョコレート', price: 110, emoji: '🍫', stock: 14, sold: 0, category: 'おかし', barcode: '4902002000071' },
      { id: 'sw_8', name: 'リンゴジュース', price: 100, emoji: '🧃', stock: 15, sold: 0, category: 'のみもの', barcode: '4902002000088' },
    ]
  },
  bakery: {
    title: "🥐 やきたて パンやさん",
    products: [
      { id: 'bk_1', name: 'サクサククロワッサン', price: 180, emoji: '🥐', stock: 10, sold: 0, category: 'パン', barcode: '4903003000016' },
      { id: 'bk_2', name: 'メロンパン', price: 140, emoji: '🍈', stock: 12, sold: 0, category: 'パン', barcode: '4903003000023' },
      { id: 'bk_3', name: 'まいにちの食パン', price: 280, emoji: '🍞', stock: 8, sold: 0, category: 'パン', barcode: '4903003000030' },
      { id: 'bk_4', name: '焼きたてピザパン', price: 250, emoji: '🍕', stock: 7, sold: 0, category: 'パン', barcode: '4903003000047' },
      { id: 'bk_5', name: 'ホットドッグ', price: 220, emoji: '🌭', stock: 11, sold: 0, category: 'パン', barcode: '4903003000054' },
      { id: 'bk_6', name: 'ホットケーキ', price: 200, emoji: '🥞', stock: 6, sold: 0, category: 'パン', barcode: '4903003000061' },
      { id: 'bk_7', name: 'ホットカフェラテ', price: 160, emoji: '☕', stock: 15, sold: 0, category: 'のみもの', barcode: '4903003000078' },
      { id: 'bk_8', name: 'ぎゅうにゅうパック', price: 120, emoji: '🥛', stock: 14, sold: 0, category: 'のみもの', barcode: '4903003000085' },
    ]
  },
  vegetable: {
    title: "🥕 しんせん やおやさん",
    products: [
      { id: 'vg_1', name: 'まっかなりんご', price: 120, emoji: '🍎', stock: 15, sold: 0, category: 'くだもの', barcode: '4905005000010' },
      { id: 'vg_2', name: 'あまいバナナ', price: 150, emoji: '🍌', stock: 12, sold: 0, category: 'くだもの', barcode: '4905005000027' },
      { id: 'vg_3', name: 'あまおうイチゴ', price: 380, emoji: '🍓', stock: 8, sold: 0, category: 'くだもの', barcode: '4905005000034' },
      { id: 'vg_4', name: 'みかん 1ふくろ', price: 250, emoji: '🍊', stock: 10, sold: 0, category: 'くだもの', barcode: '4905005000041' },
      { id: 'vg_5', name: 'あまいにんじん', price: 90, emoji: '🥕', stock: 18, sold: 0, category: 'くだもの', barcode: '4905005000058' },
      { id: 'vg_6', name: 'スイートコーン', price: 130, emoji: '🌽', stock: 9, sold: 0, category: 'くだもの', barcode: '4905005000065' },
      { id: 'vg_7', name: 'ブロッコリー', price: 160, emoji: '🥦', stock: 7, sold: 0, category: 'くだもの', barcode: '4905005000072' },
      { id: 'vg_8', name: 'シャキシャキトマト', price: 110, emoji: '🍅', stock: 14, sold: 0, category: 'くだもの', barcode: '4905005000089' },
    ]
  }
};

// えもじ選択用プリセット
const POPULAR_EMOJIS = ['🍎', '🥐', '🍫', '✏️', '🍦', '🍙', '🍰', '🧃', '🍓', '🍩', '🍔', '🍕', '🍉', '🥛', '🍪', '🍮', '🌭', '🥞', '🍇', '🍭', '🧸', '🚗', '⭐', '🎁'];

// アプリケーション状態
let storeData = {
  shopTitle: PRESET_SHOPS.convenience.title,
  currentCategory: 'ALL',
  products: JSON.parse(JSON.stringify(PRESET_SHOPS.convenience.products)),
  sales: {
    totalRevenue: 0,
    customerCount: 0,
    itemsSoldCount: 0,
    receipts: []
  }
};

let cart = []; // カート内アイテム { productId, count }
let paymentInserted = 0; // 投入された合計金額
let insertedCoins = { 1: 0, 5: 0, 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 5000: 0, 10000: 0 }; // 金種ごとの投入枚数
let soundEnabled = true;

// カメラ関連状態
let html5QrScanner = null;
let cameraActive = false;
let currentFacingMode = "environment"; // "environment" (アウトカメ優先) or "user" (インカメ)
let scannerPurpose = "cart"; // "cart" (レジ用) or "form" (商品登録フォーム用)
let scanCooldown = false;
let pendingBarcodeToAssign = null; // 未登録バーコードの一時保持

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

// iOS Safari / iPad / モバイル対応: 画面の初回タッチ・タップで AudioContext を確実にアンロック
['pointerdown', 'touchstart', 'click'].forEach(evt => {
  document.addEventListener(evt, () => {
    getAudioContext();
  }, { once: true, passive: true });
});

let speechEnabled = true;

/**
 * Web Speech API による音声読み上げ（未就学児対応）
 * @param {string} text 読み上げるテキスト
 */
function speak(text) {
  if (!speechEnabled) return;
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel(); // 前の読み上げを中断
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'ja-JP';
    uttr.rate = 1.15; // 元気で聞き取りやすいテンポ
    uttr.pitch = 1.1; // 親しみやすい少し高めのピッチ
    window.speechSynthesis.speak(uttr);
  } catch(e) {
    console.warn("SpeechSynthesis error:", e);
  }
}

const Sound = {
  // バーコードリーダー「ピッ！」音（高音サイン波）
  scan() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2093, ctx.currentTime); // C7 (ピッ！)
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.14);
    } catch(e) { console.warn(e); }
  },

  // コイン投入「チャリーン！」音
  coin() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [1760, 2637].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.04);
        gain.gain.setValueAtTime(0.18, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28 + i * 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + 0.3 + i * 0.04);
      });
    } catch(e) { console.warn(e); }
  },

  // ボタン押し「ポチッ」音
  click() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch(e) { console.warn(e); }
  },

  // 配達トラック到着「プップー！」音
  truckHorn() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [349.23, 440].forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.38);
      });
    } catch(e) { console.warn(e); }
  },

  // おかいけい完了「ファンファーレ」
  fanfare() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.12;
        const duration = idx === notes.length - 1 ? 0.65 : 0.18;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.22, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch(e) { console.warn(e); }
  },

  // 未登録バーコード発見「ピロリ〜ン！」音
  discovery() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      const now = ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.2);
      });
    } catch(e) { console.warn(e); }
  },

  // うりきれ・エラー「ブブー！」音
  buzzer() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      // 2回の低いブザーパルス
      [0, 0.15].forEach(delay => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now + delay);
        gain.gain.setValueAtTime(0.2, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.11);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.12);
      });
    } catch(e) { console.warn(e); }
  },

  // ポイントカード読み取り「ピロリン♪」音
  pointCard() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [1318.51, 1567.98, 2093.00]; // E6, G6, C7 の輝かしいアルペジオ
      const now = ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.07;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.18);
      });
    } catch(e) { console.warn(e); }
  }
};

// 重複しないインストアJAN-13形式（200 + 9桁乱数 + チェックディジット）の自動生成
function generateUniqueJanBarcode() {
  let code = '';
  let isDuplicate = true;
  let attempts = 0;

  while (isDuplicate && attempts < 100) {
    attempts++;
    // 200で始まるインストアマーキング風9桁乱数（計12桁）
    let raw12 = '200' + String(Math.floor(100000000 + Math.random() * 900000000));
    
    // モジュラス10 ウェイト3（モジュラス10 / チェックディジット計算）
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < 12; i++) {
      const num = parseInt(raw12[i], 10);
      if (i % 2 === 0) {
        oddSum += num; // 1,3,5,7,9,11桁目（0-indexed偶数）
      } else {
        evenSum += num; // 2,4,6,8,10,12桁目（0-indexed奇数）
      }
    }
    const total = oddSum * 1 + evenSum * 3;
    const checkDigit = (10 - (total % 10)) % 10;
    code = raw12 + String(checkDigit);

    // 重複チェック
    isDuplicate = storeData.products.some(p => p.barcode === code);
  }
  return code;
}

// 登録フォームのバーコード再発行ボタン
function regenerateNewProductBarcode() {
  Sound.click();
  const newBarcode = generateUniqueJanBarcode();
  const barcodeInput = document.getElementById('new-prod-barcode');
  barcodeInput.value = newBarcode;
  updateFormBarcodePreview();
}

// フォーム内リアルタイムJsBarcodeプレビューの更新
function updateFormBarcodePreview() {
  const barcodeInput = document.getElementById('new-prod-barcode');
  const val = barcodeInput.value.trim();
  const previewText = document.getElementById('form-barcode-preview-text');
  const previewSvg = document.getElementById('form-barcode-preview');

  if (!val) {
    previewSvg.innerHTML = '';
    previewText.textContent = 'バーコード番号を入力してね';
    return;
  }

  try {
    JsBarcode("#form-barcode-preview", val, {
      format: "CODE128",
      width: 1.4,
      height: 38,
      displayValue: false,
      margin: 0
    });
    previewText.textContent = val;
  } catch (e) {
    previewSvg.innerHTML = '';
    previewText.textContent = '※ 正しいバーコード形式ではありません';
  }
}

function openCameraScanner(purpose = "cart") {
  Sound.click();
  scannerPurpose = purpose;

  const titleEl = document.getElementById("scanner-purpose-title");
  const hintEl = document.getElementById("scanner-bottom-hint");

  if (titleEl) {
    if (purpose === "form") {
      titleEl.textContent = "商品登録用のバーコードをスキャン";
    } else {
      titleEl.textContent = "バーコードリーダー";
    }
  }

  if (hintEl) {
    if (purpose === "form") {
      hintEl.textContent = "💡 おうちのお菓子やおもちゃの箱のバーコードをかざしてね！";
    } else {
      hintEl.textContent = "💡 レジに通したい商品のバーコードをかざしてね！";
    }
  }

  const modal = document.getElementById('camera-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
  startCameraScanner();
}

function closeCameraScannerModal() {
  Sound.click();
  const modal = document.getElementById('camera-modal');
  modal.classList.add('hidden');
  stopCameraScanner();
}

// バーコードスキャンで対応するフォーマット一覧（JANコード・EAN・CODE128・QR等）
function getSupportedBarcodeFormats() {
  if (typeof Html5QrcodeSupportedFormats === 'undefined') return undefined;
  return [
    Html5QrcodeSupportedFormats.EAN_13,
    Html5QrcodeSupportedFormats.EAN_8,
    Html5QrcodeSupportedFormats.CODE_128,
    Html5QrcodeSupportedFormats.CODE_39,
    Html5QrcodeSupportedFormats.UPC_A,
    Html5QrcodeSupportedFormats.UPC_E,
    Html5QrcodeSupportedFormats.CODABAR,
    Html5QrcodeSupportedFormats.ITF,
    Html5QrcodeSupportedFormats.QR_CODE
  ];
}

async function startCameraScanner() {
  const qrEl = document.getElementById("qr-reader");
  if (!qrEl) return;

  if (html5QrScanner) {
    try {
      await html5QrScanner.stop();
      html5QrScanner.clear();
    } catch (e) {}
    html5QrScanner = null;
  }

  // インカメラ時のみ鏡面反転
  if (currentFacingMode === "user") {
    qrEl.classList.add("mirror-video");
  } else {
    qrEl.classList.remove("mirror-video");
  }

  // 1Dバーコード（JAN/EAN）に対応したHtml5Qrcodeインスタンスを初期化
  // experimentalFeaturesでブラウザネイティブの高速BarcodeDetectorを有効化
  const formats = getSupportedBarcodeFormats();
  const scannerConfig = {
    verbose: false,
    experimentalFeatures: {
      useBarCodeDetectorIfSupported: true
    }
  };
  if (formats) {
    scannerConfig.formatsToSupport = formats;
  }

  html5QrScanner = new Html5Qrcode("qr-reader", scannerConfig);

  // 横長バーコードに最適化したスキャン枠
  const config = {
    fps: 20,
    qrbox: (viewfinderWidth, viewfinderHeight) => {
      // 画面の幅の85%（最大380px）、高さの45%（最大180px）の横長枠
      const width = Math.min(Math.floor(viewfinderWidth * 0.85), 380);
      const height = Math.min(Math.floor(viewfinderHeight * 0.45), 180);
      return { width, height };
    },
    aspectRatio: 1.0,
    videoConstraints: {
      facingMode: currentFacingMode,
      width: { min: 640, ideal: 1280, max: 1920 },
      height: { min: 480, ideal: 720, max: 1080 }
    }
  };

  try {
    await html5QrScanner.start(
      { facingMode: currentFacingMode },
      config,
      onBarcodeScannedSuccess,
      () => {}
    );
    cameraActive = true;
  } catch (err) {
    console.warn("Camera start with high-res failed, falling back to simple config:", err);
    try {
      // 高解像度や制約で失敗した場合はシンプル設定でリトライ
      await html5QrScanner.start(
        { facingMode: currentFacingMode },
        { fps: 15, qrbox: { width: 280, height: 160 } },
        onBarcodeScannedSuccess,
        () => {}
      );
      cameraActive = true;
    } catch (fallbackErr) {
      console.error("Camera start fallback failed:", fallbackErr);
      cameraActive = false;
      showAlert("カメラがひらけません", "カメラへのアクセスを許可してください（ブラウザの設定など）。", "📷");
    }
  }
}

async function stopCameraScanner() {
  if (html5QrScanner && cameraActive) {
    try {
      await html5QrScanner.stop();
      html5QrScanner.clear();
    } catch (e) {
      console.warn("Camera stop error:", e);
    }
    cameraActive = false;
    html5QrScanner = null;
  }
}

async function toggleCameraFacing() {
  Sound.click();
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  
  const label = document.getElementById('camera-facing-label');
  const btnText = document.getElementById('facing-toggle-text');
  
  if (currentFacingMode === "user") {
    label.textContent = "じぶんのほう（インカメラ）";
    btnText.textContent = "そとがわカメラへ";
  } else {
    label.textContent = "そとがわ（アウトカメラ）";
    btnText.textContent = "インカメラへ";
  }

  await startCameraScanner();
}

/**
 * 写真・画像ファイルからバーコードをスキャンする
 */
async function scanBarcodeFromFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  Sound.click();
  try {
    const formats = getSupportedBarcodeFormats();
    const fileScannerConfig = {
      verbose: false,
      experimentalFeatures: { useBarCodeDetectorIfSupported: true }
    };
    if (formats) {
      fileScannerConfig.formatsToSupport = formats;
    }

    const tempScanner = new Html5Qrcode("qr-reader-file-temp", fileScannerConfig);
    const decodedText = await tempScanner.scanFile(file, true);
    try { tempScanner.clear(); } catch (e) {}

    closeCameraScannerModal();
    onBarcodeScannedSuccess(decodedText);
  } catch (err) {
    console.error("File barcode scan error:", err);
    showAlert("バーコードがみつかりません", "写真からバーコードを読み取れませんでした。ピントが合っている写真をお試しください。", "⚠️");
  } finally {
    event.target.value = '';
  }
}

/**
 * バーコード番号を手動入力する（モーダル表示）
 */
function openManualBarcodeEntry() {
  Sound.click();
  closeCameraScannerModal();
  showPrompt(
    "バーコードの手入力",
    "商品のバーコード番号（数字）を入力してね！",
    "",
    (code) => {
      if (code) {
        onBarcodeScannedSuccess(code);
      }
    },
    "🔢"
  );
}

// 市販のUSB / Bluetooth バーコードリーダー対応（キーボードHID入力リスナー）
let barcodeInputBuffer = '';
let lastBarcodeKeyTime = Date.now();

window.addEventListener('keydown', (e) => {
  // 入力フォーム（input, select, textarea）にフォーカスがある時は通常キー入力を妨げない
  const activeEl = document.activeElement;
  if (activeEl && ['INPUT', 'SELECT', 'TEXTAREA'].includes(activeEl.tagName)) {
    return;
  }

  const now = Date.now();
  // 130ms以上空いた場合は手入力キーまたは別操作とみなしてクリア
  if (now - lastBarcodeKeyTime > 130) {
    barcodeInputBuffer = '';
  }
  lastBarcodeKeyTime = now;

  if (e.key === 'Enter') {
    if (barcodeInputBuffer.length >= 3) {
      e.preventDefault();
      const scannedCode = barcodeInputBuffer.trim();
      barcodeInputBuffer = '';
      onBarcodeScannedSuccess(scannedCode);
    }
  } else if (/^[0-9a-zA-Z\-_]$/.test(e.key)) {
    barcodeInputBuffer += e.key;
  }
});

// バーコードスキャン読み取り成功時
function onBarcodeScannedSuccess(decodedText) {
  if (scanCooldown) return;
  scanCooldown = true;
  setTimeout(() => { scanCooldown = false; }, 1200);

  const cleanCode = decodedText.trim();

  // バイブレーション演出
  if (navigator.vibrate) {
    navigator.vibrate([80, 50, 80]);
  }

  // 商品登録フォームからの呼び出しだった場合
  if (scannerPurpose === "form") {
    Sound.scan();
    closeCameraScannerModal();
    const barcodeInput = document.getElementById('new-prod-barcode');
    barcodeInput.value = cleanCode;
    updateFormBarcodePreview();
    showAlert('バーコードを読み取りました！', `バーコード「${cleanCode}」を入力欄にセットしました！`, '✨');
    return;
  }

  // 通常レジスキャンの場合
  const matchedProduct = storeData.products.find(p => p.barcode === cleanCode);

  if (matchedProduct) {
    // 在庫0チェック（バグ②修正：ブザー音・音声・アラートで分かりやすく案内）
    if (matchedProduct.stock <= 0) {
      Sound.buzzer();
      speak(`${matchedProduct.name}は うりきれです！`);
      showAlert('⚠️ うりきれ だよ！', `「${matchedProduct.emoji} ${matchedProduct.name}」は うりきれです。\n「はっちゅう」して在庫をふやしてね！`, '📦');
      return;
    }

    const cartItem = cart.find(ci => ci.productId === matchedProduct.id);
    const currentCount = cartItem ? cartItem.count : 0;
    if (currentCount >= matchedProduct.stock) {
      Sound.buzzer();
      speak(`これ以上 カゴに入れられません`);
      showAlert('⚠️ ざいこが 足りないよ！', `これ以上 カゴに入れられません。（のこり ${matchedProduct.stock}こ）`, '📦');
      return;
    }

    Sound.scan();
    addToCart(matchedProduct.id);
    showScanToast(matchedProduct);
    speak(`${matchedProduct.name}、${matchedProduct.price}円！`);
  } else {
    // 未登録バーコードの場合 -> 紐付けまたは新規登録ダイアログへ
    Sound.discovery();
    openUnknownBarcodeModal(cleanCode);
  }
}

function showScanToast(product) {
  const toast = document.getElementById('scan-feedback-toast');
  document.getElementById('scan-feedback-emoji').textContent = product.emoji;
  document.getElementById('scan-feedback-name').textContent = product.name;
  document.getElementById('scan-feedback-price').textContent = `${product.price}円`;

  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 1300);
}

function openUnknownBarcodeModal(barcode) {
  // バグ③修正: 未登録モーダル表示中にカメラの裏解析を一時停止
  if (html5QrScanner && cameraActive) {
    try {
      html5QrScanner.pause(true);
    } catch (e) {
      console.warn("Camera pause error:", e);
    }
  }

  pendingBarcodeToAssign = barcode;
  document.getElementById('unknown-barcode-number').textContent = barcode;

  const container = document.getElementById('assign-product-list');
  container.innerHTML = '';

  storeData.products.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'w-full p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 flex items-center justify-between text-left transition-all';
    btn.innerHTML = `
      <div class="flex items-center gap-2.5">
        <span class="text-3xl">${p.emoji}</span>
        <div>
          <p class="font-black text-sm text-slate-800">${p.name}</p>
          <p class="text-xs font-bold text-rose-600">${p.price}円</p>
        </div>
      </div>
      <span class="toy-btn text-xs font-black bg-rose-500 text-white px-3 py-1.5 rounded-xl shadow-sm">
        これにする！
      </span>
    `;
    btn.onclick = () => assignBarcodeToProduct(p.id, barcode);
    container.appendChild(btn);
  });

  document.getElementById('barcode-unknown-modal').classList.remove('hidden');
}

function closeUnknownBarcodeModal() {
  Sound.click();
  pendingBarcodeToAssign = null;
  document.getElementById('barcode-unknown-modal').classList.add('hidden');

  // バグ③修正: モーダルを閉じたらカメラ解析を再開
  if (html5QrScanner && cameraActive) {
    try {
      html5QrScanner.resume();
    } catch (e) {
      console.warn("Camera resume error:", e);
    }
  }
}

// 読み取ったバーコードをそのまま新規商品登録へ引き継ぐ
function forwardBarcodeToNewProduct() {
  Sound.click();
  const code = pendingBarcodeToAssign;
  closeUnknownBarcodeModal();
  closeCameraScannerModal();

  // せってい・登録タブに切り替え
  switchTab('settings');

  const barcodeInput = document.getElementById('new-prod-barcode');
  if (barcodeInput && code) {
    barcodeInput.value = code;
    updateFormBarcodePreview();
  }

  document.getElementById('new-prod-name').focus();
  showAlert("バーコードを引き継ぎました！", `バーコード「${code}」をセットしました。名前と値段を入力して登録してね！`, "📝");
}

function assignBarcodeToProduct(productId, barcode) {
  Sound.scan();
  const product = storeData.products.find(p => p.id === productId);
  if (!product) return;

  product.barcode = barcode;
  saveStoreData();
  closeUnknownBarcodeModal();

  addToCart(product.id);
  showScanToast(product);
  renderBarcodeCards();
  renderSettingsProductsTable();
  showAlert("バーコードを とうろくしたよ！", `「${product.emoji} ${product.name}」のバーコードに登録して、カゴにいれました！`, "🎉");
}

/**
 * 売上データをブラウザのキャッシュ（localStorage）に一時保存
 */
function saveSalesCache() {
  try {
    if (storeData && storeData.sales) {
      localStorage.setItem(SALES_CACHE_KEY, JSON.stringify(storeData.sales));
    }
  } catch (e) {
    console.warn('Sales cache save failed:', e);
  }
}

/**
 * キャッシュから売上データを読み込み
 */
function loadSalesCache() {
  try {
    const raw = localStorage.getItem(SALES_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.totalRevenue === 'number') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Sales cache load failed:', e);
  }
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

    // 売上データ（キャッシュ）の安全なマージ・復元
    const salesCache = loadSalesCache();
    if (salesCache) {
      if (!storeData.sales || (salesCache.totalRevenue >= (storeData.sales.totalRevenue || 0))) {
        storeData.sales = salesCache;
      }
    } else if (storeData.sales) {
      saveSalesCache();
    }

    // salesオブジェクトが万一未定義なら初期化
    if (!storeData.sales) {
      storeData.sales = {
        totalRevenue: 0,
        customerCount: 0,
        itemsSoldCount: 0,
        receipts: []
      };
    }
  } catch (e) {
    console.error('LocalStorage load failed:', e);
  }
}

function saveStoreData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storeData));
    saveSalesCache(); // 売上キャッシュも即座に同期保存
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
  if (soundEnabled) {
    icon.textContent = '🔊';
    text.textContent = 'おと: ON';
    Sound.coin();
    speak('おとをオンにしました！');
  } else {
    icon.textContent = '🔇';
    text.textContent = 'おと: OFF';
  }
}

function switchTab(tabName) {
  Sound.click();
  const screens = ['register', 'sales', 'inventory', 'cards', 'settings'];
  screens.forEach(s => {
    const screenEl = document.getElementById(`screen-${s}`);
    const btnEl = document.getElementById(`tab-btn-${s}`);
    if (!screenEl || !btnEl) return;

    if (s === tabName) {
      // 選択された画面を表示（Tailwindのレスポンシブdisplayを活かすためインラインdisplayを解除）
      screenEl.classList.remove('hidden', '!hidden');
      screenEl.style.display = '';
      btnEl.className = 'nav-tab flex-1 py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 rounded-xl sm:rounded-2xl font-black text-[11px] sm:text-xs md:text-sm lg:text-base flex items-center justify-center gap-1 sm:gap-1.5 bg-rose-500 text-white shadow-[0_3px_0_#9f1239] whitespace-nowrap';
    } else {
      // 非選択画面はインラインスタイルで確実に非表示化（Tailwindのmd:gridを確実に無効化）
      screenEl.classList.add('hidden', '!hidden');
      screenEl.style.display = 'none';
      btnEl.className = 'nav-tab flex-1 py-1.5 sm:py-2 md:py-2.5 px-1 sm:px-2 md:px-3 rounded-xl sm:rounded-2xl font-black text-[11px] sm:text-xs md:text-sm lg:text-base flex items-center justify-center gap-1 sm:gap-1.5 bg-white text-slate-700 hover:bg-amber-100 shadow-[0_3px_0_#cbd5e1] whitespace-nowrap';
    }
  });

  if (tabName === 'register') renderRegisterGrid();
  if (tabName === 'sales') renderSalesDashboard();
  if (tabName === 'inventory') renderInventoryList();
  if (tabName === 'cards') renderBarcodeCards();
  if (tabName === 'settings') {
    renderEmojiPalette();
    renderSettingsProductsTable();
    // 自動バーコード発行が空ならセット
    if (!document.getElementById('new-prod-barcode').value) {
      regenerateNewProductBarcode();
    }
  }
}

let currentMobileView = 'products';

/**
 * モバイル（スマホ）画面でのおかいけい画面ビュー切り替え
 * @param {'products' | 'cart'} view 表示するビュー
 */
function switchMobileRegisterView(view) {
  Sound.click();
  currentMobileView = view;
  const cartPane = document.getElementById('register-cart-pane');
  const productsPane = document.getElementById('register-products-pane');
  const btnProducts = document.getElementById('mobile-toggle-products');
  const btnCart = document.getElementById('mobile-toggle-cart');

  if (!cartPane || !productsPane) return;

  if (view === 'cart') {
    cartPane.classList.remove('hidden');
    productsPane.classList.add('hidden');
    if (btnCart && btnProducts) {
      btnCart.className = 'flex-1 py-1.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 bg-white text-amber-950 shadow-sm transition-all';
      btnProducts.className = 'flex-1 py-1.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 text-amber-900 hover:bg-white/50 transition-all';
    }
  } else {
    cartPane.classList.add('hidden');
    productsPane.classList.remove('hidden');
    if (btnCart && btnProducts) {
      btnProducts.className = 'flex-1 py-1.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 bg-white text-amber-950 shadow-sm transition-all';
      btnCart.className = 'flex-1 py-1.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 text-amber-900 hover:bg-white/50 transition-all';
    }
  }
}

function renderRegisterGrid() {
  document.getElementById('shop-title-display').textContent = storeData.shopTitle;

  const categories = ['ALL', ...new Set(storeData.products.map(p => p.category || 'その他'))];
  const catContainer = document.getElementById('category-filter-list');
  catContainer.innerHTML = '';

  categories.forEach(cat => {
    const btn = document.createElement('button');
    const isActive = storeData.currentCategory === cat;
    btn.className = `toy-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
      isActive 
        ? 'bg-amber-500 text-white border-2 border-amber-600' 
        : 'bg-slate-100 hover:bg-amber-100 text-slate-700 border border-slate-300'
    }`;
    btn.textContent = cat === 'ALL' ? '🌟 ぜんぶ' : cat;
    btn.onclick = () => {
      Sound.click();
      storeData.currentCategory = cat;
      renderRegisterGrid();
    };
    catContainer.appendChild(btn);
  });

  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  const filtered = storeData.products.filter(p => {
    if (storeData.currentCategory === 'ALL') return true;
    return (p.category || 'その他') === storeData.currentCategory;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-10 font-bold text-slate-400">しょうひんが ありません</div>`;
    return;
  }

  filtered.forEach(p => {
    const isOutOfStock = p.stock <= 0;
    const isLowStock = p.stock > 0 && p.stock <= 3;

    const card = document.createElement('button');
    card.id = `prod-card-${p.id}`;
    card.disabled = isOutOfStock;
    card.onclick = () => addToCart(p.id);
    card.className = `toy-card group relative text-left p-3 rounded-3xl border-3 transition-all flex flex-col justify-between ${
      isOutOfStock
        ? 'bg-slate-100 border-slate-300 opacity-60 cursor-not-allowed'
        : 'bg-white border-amber-200 hover:border-amber-400 active:scale-95'
    }`;

    card.innerHTML = `
      <div class="flex justify-between items-center mb-1">
        <span class="text-[11px] sm:text-xs font-black px-2 py-0.5 rounded-full ${
          isOutOfStock 
            ? 'bg-rose-500 text-white' 
            : isLowStock 
              ? 'bg-amber-400 text-amber-950 animate-pulse' 
              : 'bg-emerald-100 text-emerald-800'
        }">
          ${isOutOfStock ? 'うりきれ' : `のこり ${p.stock}`}
        </span>
        <span class="text-[10px] text-slate-400 font-mono">🏷️${p.barcode ? p.barcode.slice(-4) : 'なし'}</span>
      </div>

      <div class="text-center my-1">
        <span class="text-5xl sm:text-6xl inline-block transition-transform group-hover:scale-110">${p.emoji}</span>
      </div>

      <div>
        <h3 class="font-black text-xs sm:text-base text-slate-800 line-clamp-1">${p.name}</h3>
        <div class="mt-1 flex items-baseline justify-between">
          <span class="text-lg sm:text-2xl font-black text-rose-600">${p.price}</span>
          <span class="text-xs font-bold text-slate-500">円</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function addToCart(productId) {
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock <= 0) {
    Sound.buzzer();
    speak(`${prod.name}は うりきれです！`);
    showAlert('⚠️ うりきれ だよ！', `「${prod.emoji} ${prod.name}」は うりきれです。\n「はっちゅう」して在庫をふやしてね！`, '📦');
    return;
  }

  const cartItem = cart.find(ci => ci.productId === productId);
  const currentCartCount = cartItem ? cartItem.count : 0;

  if (currentCartCount >= prod.stock) {
    Sound.buzzer();
    speak('ざいこが たりないよ！');
    showAlert('⚠️ ざいこが 足りないよ！', `これ以上 カゴに入れられません。（のこり ${prod.stock}こ）`, '📦');
    return;
  }

  Sound.scan();
  speak(`${prod.name}、${prod.price}円！`);

  const cardEl = document.getElementById(`prod-card-${productId}`);
  if (cardEl) {
    cardEl.classList.remove('scan-pop');
    void cardEl.offsetWidth;
    cardEl.classList.add('scan-pop');
  }

  if (cartItem) {
    cartItem.count += 1;
  } else {
    cart.push({ productId, count: 1 });
  }

  renderCart();
}

function changeCartItemCount(productId, delta) {
  Sound.click();
  const cartItem = cart.find(ci => ci.productId === productId);
  if (!cartItem) return;

  const prod = storeData.products.find(p => p.id === productId);
  const newCount = cartItem.count + delta;

  if (newCount <= 0) {
    cart = cart.filter(ci => ci.productId !== productId);
  } else {
    if (delta > 0 && newCount > prod.stock) {
      showAlert('⚠️ ざいこが 足りないよ！', `お店にあるのは ${prod.stock}こ までです。`, '📦');
      return;
    }
    cartItem.count = newCount;
  }
  renderCart();
}

function clearCart(playSound = false) {
  if (playSound) Sound.click();
  cart = [];
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-start-btn');
  const totalDisplay = document.getElementById('cart-total');
  const countDisplay = document.getElementById('cart-item-count');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <span class="text-5xl block mb-2">🍎🥪🍩</span>
        <p class="font-bold text-base">しょうひんか バーコードを<br>スキャンしてね！</p>
      </div>
    `;
    totalDisplay.textContent = '0';
    countDisplay.textContent = '0 こ';
    checkoutBtn.disabled = true;

    // モバイル用サマリー表示の同期
    const mobileCartBadge = document.getElementById('mobile-cart-badge');
    const mobileBarCount = document.getElementById('mobile-bar-count');
    const mobileBarTotal = document.getElementById('mobile-bar-total');
    const mobileQuickBar = document.getElementById('mobile-quick-cart-bar');
    if (mobileCartBadge) mobileCartBadge.textContent = '0';
    if (mobileBarCount) mobileBarCount.textContent = '0こ';
    if (mobileBarTotal) mobileBarTotal.textContent = '0 円';
    if (mobileQuickBar) mobileQuickBar.classList.add('hidden');
    return;
  }

  checkoutBtn.disabled = false;
  let totalAmount = 0;
  let totalCount = 0;
  container.innerHTML = '';

  cart.forEach(item => {
    const prod = storeData.products.find(p => p.id === item.productId);
    if (!prod) return;

    const subtotal = prod.price * item.count;
    totalAmount += subtotal;
    totalCount += item.count;

    const div = document.createElement('div');
    div.className = 'flex items-center justify-between p-2.5 bg-amber-50/70 rounded-2xl border border-amber-200';
    div.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 flex-1">
        <span class="text-3xl">${prod.emoji}</span>
        <div class="min-w-0">
          <h4 class="font-black text-sm text-slate-800 truncate">${prod.name}</h4>
          <p class="text-xs font-bold text-rose-600">${prod.price}円 × ${item.count} = ${subtotal}円</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 ml-2">
        <button onclick="changeCartItemCount('${prod.id}', -1)" class="w-8 h-8 rounded-xl bg-slate-200 hover:bg-slate-300 font-black text-lg flex items-center justify-center text-slate-700">-</button>
        <span class="w-6 text-center font-black text-sm text-slate-800">${item.count}</span>
        <button onclick="changeCartItemCount('${prod.id}', 1)" class="w-8 h-8 rounded-xl bg-amber-300 hover:bg-amber-400 font-black text-lg flex items-center justify-center text-amber-950">+</button>
      </div>
    `;
    container.appendChild(div);
  });

  totalDisplay.textContent = totalAmount.toLocaleString();
  countDisplay.textContent = `${totalCount} こ`;

  // モバイル用サマリー表示の同期
  const mobileCartBadge = document.getElementById('mobile-cart-badge');
  const mobileBarCount = document.getElementById('mobile-bar-count');
  const mobileBarTotal = document.getElementById('mobile-bar-total');
  const mobileQuickBar = document.getElementById('mobile-quick-cart-bar');
  if (mobileCartBadge) mobileCartBadge.textContent = totalCount;
  if (mobileBarCount) mobileBarCount.textContent = `${totalCount}こ`;
  if (mobileBarTotal) mobileBarTotal.textContent = `${totalAmount.toLocaleString()} 円`;
  if (mobileQuickBar) {
    if (totalCount > 0) {
      mobileQuickBar.classList.remove('hidden');
    } else {
      mobileQuickBar.classList.add('hidden');
    }
  }
}

let hasShoppingBag = false; // レジ袋 (+5円)
let hasPointCard = false;   // ポイントカード (+1P)

/**
 * レジ袋の要・不要切り替え
 */
function toggleShoppingBag(useBag) {
  Sound.click();
  hasShoppingBag = useBag;
  const btnNo = document.getElementById('bag-btn-no');
  const btnYes = document.getElementById('bag-btn-yes');
  const badge = document.getElementById('bag-status-badge');

  if (hasShoppingBag) {
    if (btnYes) btnYes.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-black text-xs bg-amber-400 text-amber-950 border border-amber-500 shadow-sm';
    if (btnNo) btnNo.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-bold text-xs bg-white hover:bg-amber-100 text-slate-600 border border-slate-300';
    if (badge) {
      badge.textContent = 'あり (+5円)';
      badge.className = 'text-[10px] font-black bg-amber-200 text-amber-950 px-2 py-0.5 rounded-full';
    }
    speak('レジ袋をつけました！');
  } else {
    if (btnNo) btnNo.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-black text-xs bg-amber-400 text-amber-950 border border-amber-500 shadow-sm';
    if (btnYes) btnYes.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-bold text-xs bg-white hover:bg-amber-100 text-slate-600 border border-slate-300';
    if (badge) {
      badge.textContent = 'なし (0円)';
      badge.className = 'text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full';
    }
  }

  updatePaymentUI();
}

/**
 * ポイントカードの有無切り替え
 */
function togglePointCard(useCard) {
  hasPointCard = useCard;
  const btnNo = document.getElementById('point-btn-no');
  const btnYes = document.getElementById('point-btn-yes');
  const badge = document.getElementById('point-status-badge');

  if (hasPointCard) {
    Sound.pointCard();
    if (btnYes) btnYes.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-black text-xs bg-sky-400 text-sky-950 border border-sky-500 shadow-sm';
    if (btnNo) btnNo.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-bold text-xs bg-white hover:bg-sky-100 text-slate-600 border border-slate-300';
    if (badge) {
      badge.textContent = '1ポイントGET! ⭐';
      badge.className = 'text-[10px] font-black bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded-full animate-pulse';
    }
    speak('ポイントカードを読み取りました！');
  } else {
    Sound.click();
    if (btnNo) btnNo.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-black text-xs bg-sky-400 text-sky-950 border border-sky-500 shadow-sm';
    if (btnYes) btnYes.className = 'toy-btn flex-1 py-1 px-2 rounded-xl font-bold text-xs bg-white hover:bg-sky-100 text-slate-600 border border-slate-300';
    if (badge) {
      badge.textContent = 'なし';
      badge.className = 'text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full';
    }
  }
}

function getCartTotal() {
  const itemsTotal = cart.reduce((acc, item) => {
    const prod = storeData.products.find(p => p.id === item.productId);
    return acc + (prod ? prod.price * item.count : 0);
  }, 0);
  return itemsTotal + (hasShoppingBag ? 5 : 0);
}

/**
 * お金の投入枚数を変更（＋・－ステッパー）
 * @param {number} coin 金種（1, 5, 10, 50, 100, 500, 1000, 5000, 10000）
 * @param {number} delta 変化量（+1 または -1）
 */
function changeCoinCount(coin, delta) {
  const current = insertedCoins[coin] || 0;
  const next = Math.max(0, current + delta);
  if (current === next && delta < 0) return; // すでに0枚なら何もしない

  insertedCoins[coin] = next;
  if (delta > 0) {
    Sound.coin();
  } else {
    Sound.click();
  }

  recalculatePaymentFromCoins();
}

/**
 * コイン・紙幣の枚数から投入金額を再計算しUIを更新
 */
function recalculatePaymentFromCoins() {
  const denominations = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000];
  let sum = 0;

  denominations.forEach(c => {
    const count = insertedCoins[c] || 0;
    sum += c * count;

    // 枚数表示とマイナスボタンの状態を更新
    const countEl = document.getElementById(`coin-count-${c}`);
    const minusBtn = document.getElementById(`coin-minus-${c}`);
    if (countEl) {
      countEl.textContent = `${count}まい`;
      if (count > 0) {
        countEl.className = 'flex-1 text-center font-black text-[10px] sm:text-xs text-rose-700 bg-amber-100 py-0.5 rounded border border-amber-300 shadow-inner scale-105 transition-all';
      } else {
        countEl.className = 'flex-1 text-center font-black text-[10px] sm:text-xs text-slate-800 bg-white py-0.5 rounded border border-slate-200 shadow-inner transition-all';
      }
    }
    if (minusBtn) {
      minusBtn.disabled = count <= 0;
    }
  });

  paymentInserted = sum;
  updatePaymentUI();
}

function openPaymentModal() {
  if (cart.length === 0) return;
  Sound.coin();
  // レジ袋・ポイントカードの初期化
  hasShoppingBag = false;
  hasPointCard = false;
  toggleShoppingBag(false);
  togglePointCard(false);

  // コイン・お札枚数をリセット
  insertedCoins = { 1: 0, 5: 0, 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 5000: 0, 10000: 0 };
  recalculatePaymentFromCoins();

  const total = getCartTotal();
  speak(`ごうけいは、${total}円です！`);
  document.getElementById('payment-modal').classList.remove('hidden');
}

function closePaymentModal() {
  Sound.click();
  document.getElementById('payment-modal').classList.add('hidden');
}

function insertMoney(amount) {
  // 互換性維持：従来のinsertMoneyが呼ばれた場合
  if ([1, 5, 10, 50, 100, 500, 1000, 5000, 10000].includes(amount)) {
    changeCoinCount(amount, 1);
  } else {
    Sound.coin();
    paymentInserted += amount;
    updatePaymentUI();
  }
}

/**
 * 請求金額に対して最適なお金（お札・硬貨）を自動計算してセット（ぴったりはらう）
 */
function payExactAmount() {
  Sound.coin();
  const total = getCartTotal();
  let remaining = total;
  const denominations = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  const newCoins = { 1: 0, 5: 0, 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 5000: 0, 10000: 0 };

  denominations.forEach(denom => {
    if (remaining >= denom) {
      const count = Math.floor(remaining / denom);
      newCoins[denom] = count;
      remaining -= denom * count;
    }
  });

  // 端数がある場合は1円玉を追加
  if (remaining > 0) {
    newCoins[1] = (newCoins[1] || 0) + Math.ceil(remaining);
  }

  insertedCoins = newCoins;
  recalculatePaymentFromCoins();
}

function clearInsertedMoney() {
  Sound.click();
  insertedCoins = { 1: 0, 5: 0, 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 5000: 0, 10000: 0 };
  recalculatePaymentFromCoins();
}

function updatePaymentUI() {
  const total = getCartTotal();
  const change = paymentInserted - total;

  document.getElementById('pay-total-display').textContent = total.toLocaleString();
  document.getElementById('pay-received-display').textContent = paymentInserted.toLocaleString();
  
  const changeDisplay = document.getElementById('pay-change-display');
  const statusBox = document.getElementById('payment-status-box');
  const completeBtn = document.getElementById('complete-sale-btn');

  if (paymentInserted >= total) {
    changeDisplay.textContent = change.toLocaleString();
    statusBox.className = 'p-3 rounded-2xl text-center font-bold text-sm bg-emerald-50 text-emerald-800 border border-emerald-300';
    if (change === 0) {
      statusBox.innerHTML = `✨ ぴったり です！ ありがとうございます！`;
    } else {
      statusBox.innerHTML = `✨ おつりは <strong class="text-xl text-emerald-700 font-black">${change.toLocaleString()}円</strong> です！`;
    }
    completeBtn.disabled = false;
  } else {
    const shortage = total - paymentInserted;
    changeDisplay.textContent = '0';
    statusBox.className = 'p-3 rounded-2xl text-center font-bold text-sm bg-rose-50 text-rose-700 border border-rose-200';
    statusBox.innerHTML = `あと <strong class="text-base font-black text-rose-600">${shortage.toLocaleString()}円</strong> たりないよ！`;
    completeBtn.disabled = true;
  }
}

function executeCompleteSale() {
  const total = getCartTotal();
  if (paymentInserted < total) return;

  Sound.fanfare();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 }
    });
  }

  const receiptItems = [];
  let totalItemCount = 0;

  cart.forEach(item => {
    const prod = storeData.products.find(p => p.id === item.productId);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.count);
      prod.sold = (prod.sold || 0) + item.count;
      totalItemCount += item.count;
      receiptItems.push({
        name: prod.name,
        emoji: prod.emoji,
        price: prod.price,
        count: item.count,
        subtotal: prod.price * item.count
      });
    }
  });

  // レジ袋ギミックの反映
  if (hasShoppingBag) {
    receiptItems.push({
      name: 'レジぶくろ',
      emoji: '🛍️',
      price: 5,
      count: 1,
      subtotal: 5
    });
  }

  const change = paymentInserted - total;
  const receiptRecord = {
    id: 'REC_' + Date.now(),
    date: new Date().toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: receiptItems,
    total: total,
    paid: paymentInserted,
    change: change,
    pointEarned: hasPointCard ? 1 : 0
  };

  storeData.sales.totalRevenue += total;
  storeData.sales.customerCount += 1;
  storeData.sales.itemsSoldCount += totalItemCount;
  storeData.sales.receipts.unshift(receiptRecord);

  if (storeData.sales.receipts.length > 30) {
    storeData.sales.receipts.pop();
  }

  saveStoreData();
  closePaymentModal();
  showReceiptModal(receiptRecord);
  clearCart(false);
  renderRegisterGrid();

  // お会計完了時の元気な音声読み上げ（知育・ごっこ遊び体験極大化）
  if (change === 0) {
    speak('まいどありがとうございます！ぴったりのお支払いです！');
  } else {
    speak(`まいどありがとうございます！おつりは${change}円です！`);
  }
}

function showReceiptModal(receipt) {
  document.getElementById('receipt-shop-name').textContent = storeData.shopTitle;
  document.getElementById('receipt-date').textContent = receipt.date;

  const container = document.getElementById('receipt-items-container');
  container.innerHTML = '';

  receipt.items.forEach(it => {
    const row = document.createElement('div');
    row.className = 'flex justify-between items-center';
    row.innerHTML = `
      <span>${it.emoji} ${it.name} × ${it.count}</span>
      <span class="font-bold">${it.subtotal.toLocaleString()}円</span>
    `;
    container.appendChild(row);
  });

  // ポイントカード特典行の印字
  if (receipt.pointEarned) {
    const pointRow = document.createElement('div');
    pointRow.className = 'flex justify-between items-center text-amber-700 font-black border-t border-dashed border-amber-300 pt-1 text-xs bg-amber-50 px-1 rounded-md mt-1';
    pointRow.innerHTML = `
      <span>⭐ ポイントカード</span>
      <span>+${receipt.pointEarned}P ついたよ！</span>
    `;
    container.appendChild(pointRow);
  }

  document.getElementById('receipt-total').textContent = `${receipt.total.toLocaleString()}円`;
  document.getElementById('receipt-paid').textContent = `${receipt.paid.toLocaleString()}円`;
  document.getElementById('receipt-change').textContent = `${receipt.change.toLocaleString()}円`;

  document.getElementById('receipt-modal').classList.remove('hidden');
}

function closeReceiptModal() {
  Sound.click();
  document.getElementById('receipt-modal').classList.add('hidden');
}

// 印刷終了時の確実なスタイル復元リスナー（バグ①修正: スクロールロック・レイアウト完全維持）
window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-receipt', 'print-all', 'print-single');
  const singleTarget = document.getElementById('single-print-target');
  if (singleTarget) singleTarget.remove();
});

function printReceiptOnly() {
  document.body.classList.add("print-receipt");
  window.print();
  document.body.classList.remove("print-receipt");
}

// バーコードお買い物カードの描画（新規追加商品も即座にここに含まれる）
function renderBarcodeCards() {
  const container = document.getElementById('printable-barcode-sheet');
  if (!container) return;
  container.innerHTML = '';

  storeData.products.forEach((p, idx) => {
    const card = document.createElement('div');
    card.id = `barcode-print-card-${p.id}`;
    card.className = 'bg-white border-2 border-dashed border-slate-400 rounded-3xl p-3 flex flex-col items-center justify-between text-center page-break-inside-avoid shadow-sm hover:border-pink-400 transition-all';
    
    const svgId = `barcode-svg-render-${idx}`;
    card.innerHTML = `
      <div class="w-full flex justify-between items-center text-[11px] font-bold text-slate-400 border-b border-slate-200 pb-1">
        <span>✂️️ きりとりせん</span>
        <span class="bg-pink-100 text-pink-700 px-2 py-0.2 rounded-full font-black">${p.category || 'おみせ'}</span>
      </div>

      <div class="my-1.5 flex flex-col items-center">
        <span class="text-4xl block">${p.emoji}</span>
        <h4 class="font-black text-sm text-slate-800 mt-1 line-clamp-1">${p.name}</h4>
        <p class="font-black text-xl text-rose-600">${p.price} <span class="text-xs text-slate-500">円</span></p>
      </div>

      <!-- JsBarcodeが描画するSVG -->
      <div class="w-full flex justify-center overflow-hidden my-1">
        <svg id="${svgId}" class="max-w-full h-12"></svg>
      </div>
      <span class="text-[11px] font-mono text-slate-500 font-black tracking-wider">${p.barcode || 'NO BARCODE'}</span>

      <!-- 単品カード印刷ボタン（画面表示時のみ） -->
      <div class="w-full pt-2 mt-1 border-t border-slate-100 flex gap-1 no-print">
        <button onclick="printSingleCard('${p.id}')" class="toy-btn flex-1 py-1 px-1.5 bg-slate-100 hover:bg-pink-100 text-slate-700 hover:text-pink-800 text-[11px] font-black rounded-lg border border-slate-200">
          <i class="fa-solid fa-print"></i> 1枚いんさつ
        </button>
      </div>
    `;
    container.appendChild(card);

    // JsBarcodeで描画
    try {
      JsBarcode(`#${svgId}`, p.barcode || `ITEM${p.id}`, {
        format: "CODE128",
        width: 1.5,
        height: 38,
        displayValue: false,
        margin: 0
      });
    } catch (e) {
      console.warn("JsBarcode render error:", e);
    }
  });
}

// 全カードのA4印刷
function printAllBarcodeCards() {
  Sound.click();
  document.body.classList.add("print-all");
  window.print();
  document.body.classList.remove("print-all");
}

// 単品カード印刷
function printSingleCard(productId) {
  Sound.click();
  const cardEl = document.getElementById(`barcode-print-card-${productId}`);
  if (!cardEl) return;

  // 単品ターゲット用クローン作成
  let singleTarget = document.getElementById('single-print-target');
  if (singleTarget) singleTarget.remove();

  singleTarget = cardEl.cloneNode(true);
  singleTarget.id = 'single-print-target';
  document.body.appendChild(singleTarget);

  document.body.classList.add("print-single");
  window.print();

  singleTarget.remove();
  document.body.classList.remove("print-single");
}

function renderSalesDashboard() {
  document.getElementById('sales-total-amount').textContent = storeData.sales.totalRevenue.toLocaleString();
  document.getElementById('sales-customer-count').textContent = storeData.sales.customerCount.toLocaleString();
  document.getElementById('sales-items-sold').textContent = storeData.sales.itemsSoldCount.toLocaleString();

  const sortedProds = [...storeData.products]
    .sort((a, b) => (b.sold || 0) - (a.sold || 0));

  const maxSold = sortedProds[0]?.sold || 1;
  const rankContainer = document.getElementById('sales-ranking-list');
  rankContainer.innerHTML = '';

  sortedProds.slice(0, 5).forEach((p, idx) => {
    const soldCount = p.sold || 0;
    const percentage = Math.max(8, Math.round((soldCount / (maxSold || 1)) * 100));
    const medals = ['🥇 1い', '🥈 2い', '🥉 3い', '⭐ 4い', '⭐ 5い'];

    const div = document.createElement('div');
    div.className = 'bg-white p-2.5 rounded-2xl border border-amber-200';
    div.innerHTML = `
      <div class="flex justify-between items-center text-sm font-black mb-1">
        <div class="flex items-center gap-1.5">
          <span class="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">${medals[idx]}</span>
          <span>${p.emoji} ${p.name}</span>
        </div>
        <span class="text-rose-600">${soldCount} こ 売れた！</span>
      </div>
      <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <div class="bg-gradient-to-r from-amber-400 to-rose-400 h-3 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
      </div>
    `;
    rankContainer.appendChild(div);
  });

  const histContainer = document.getElementById('sales-history-list');
  histContainer.innerHTML = '';

  if (storeData.sales.receipts.length === 0) {
    histContainer.innerHTML = '<p class="text-slate-400 text-center py-6 font-bold">まだ おかいけいのきろくは ありません</p>';
  } else {
    storeData.sales.receipts.forEach(r => {
      const div = document.createElement('div');
      div.className = 'bg-white p-2.5 rounded-2xl border border-slate-200 flex justify-between items-center';
      const itemsSummary = r.items.map(it => `${it.emoji}${it.count}`).join(' ');
      div.innerHTML = `
        <div>
          <span class="text-xs text-slate-400 font-bold block">${r.date}</span>
          <span class="font-bold text-slate-800 text-xs sm:text-sm">${itemsSummary}</span>
        </div>
        <div class="text-right">
          <span class="font-black text-rose-600 text-sm sm:text-base">${r.total.toLocaleString()}円</span>
          <span class="text-xs text-emerald-600 block font-bold">おつり ${r.change.toLocaleString()}円</span>
        </div>
      `;
      histContainer.appendChild(div);
    });
  }
}

function resetSalesDataPrompt() {
  Sound.click();
  showConfirm('うりあげを リセットする？', 'きょうの売上やレシートの記録を 0 にもどします。よろしいですか？', () => {
    storeData.sales = {
      totalRevenue: 0,
      customerCount: 0,
      itemsSoldCount: 0,
      receipts: []
    };
    storeData.products.forEach(p => p.sold = 0);
    saveStoreData();
    renderSalesDashboard();
    showAlert('リセットしたよ！', 'うりあげを0にしました。またいっぱい売ろう！', '✨');
  });
}

function renderInventoryList() {
  const container = document.getElementById('inventory-list');
  container.innerHTML = '';

  storeData.products.forEach(p => {
    const isLow = p.stock <= 3;
    const div = document.createElement('div');
    div.className = `p-4 rounded-3xl border-3 bg-white flex flex-col justify-between ${
      isLow ? 'border-rose-300 shadow-sm' : 'border-emerald-200'
    }`;

    div.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <span class="text-4xl sm:text-5xl">${p.emoji}</span>
          <div>
            <h4 class="font-black text-base text-slate-800">${p.name}</h4>
            <p class="text-xs font-bold text-slate-400">ねだん: ${p.price}円</p>
            <p class="text-[11px] font-mono text-slate-400">🏷️️ ${p.barcode || '未登録'}</p>
          </div>
        </div>
        <span class="text-xs font-black px-2.5 py-1 rounded-full ${
          isLow ? 'bg-rose-100 text-rose-700 animate-bounce' : 'bg-emerald-100 text-emerald-800'
        }">
          ${isLow ? 'すくないよ！' : 'たっぷり'}
        </span>
      </div>

      <div class="my-3 flex items-baseline justify-between bg-slate-50 p-2.5 rounded-2xl">
        <span class="text-xs font-bold text-slate-500">いまの ざいこ</span>
        <span class="text-2xl font-black text-slate-800">${p.stock} <span class="text-sm font-bold text-slate-500">こ</span></span>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button onclick="restockProduct('${p.id}', 5)" class="toy-btn text-xs font-black bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-2 border-emerald-300 py-2 rounded-xl flex items-center justify-center gap-1">
          <span>🚚</span> +5こ はっちゅう
        </button>
        <button onclick="restockProduct('${p.id}', 10)" class="toy-btn text-xs font-black bg-sky-50 hover:bg-sky-100 text-sky-800 border-2 border-sky-300 py-2 rounded-xl flex items-center justify-center gap-1">
          <span>📦</span> +10こ はっちゅう
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

function restockProduct(productId, amount) {
  const prod = storeData.products.find(p => p.id === productId);
  if (!prod) return;

  prod.stock += amount;
  saveStoreData();
  triggerTruckAnimation();
  renderInventoryList();
}

function restockAllProducts(amount) {
  storeData.products.forEach(p => p.stock += amount);
  saveStoreData();
  triggerTruckAnimation();
  renderInventoryList();
}

function triggerTruckAnimation() {
  Sound.truckHorn();
  const banner = document.getElementById('truck-delivery-banner');
  banner.classList.remove('hidden');
  setTimeout(() => {
    banner.classList.add('hidden');
  }, 2100);
}

// 絵文字パレットの描画
function renderEmojiPalette() {
  const palette = document.getElementById('emoji-palette');
  palette.innerHTML = '';
  POPULAR_EMOJIS.forEach(emo => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'w-9 h-9 text-xl flex items-center justify-center rounded-xl bg-amber-50 hover:bg-amber-200 border border-amber-300 transition-all active:scale-90';
    btn.textContent = emo;
    btn.onclick = () => {
      Sound.click();
      document.getElementById('new-prod-emoji').value = emo;
    };
    palette.appendChild(btn);
  });
}

// 商品追加ハンドラ
function handleAddNewProduct(event) {
  event.preventDefault();
  Sound.coin();

  const emoji = document.getElementById('new-prod-emoji').value.trim() || '🎁';
  const name = document.getElementById('new-prod-name').value.trim();
  const price = parseInt(document.getElementById('new-prod-price').value, 10);
  const stock = parseInt(document.getElementById('new-prod-stock').value, 10);
  const category = document.getElementById('new-prod-category').value;
  let barcode = document.getElementById('new-prod-barcode').value.trim();

  if (!barcode) {
    barcode = generateUniqueJanBarcode();
  }

  if (!name || isNaN(price) || isNaN(stock)) return;

  const newId = 'prod_' + Date.now();
  const newProduct = {
    id: newId,
    name: name,
    price: price,
    emoji: emoji,
    stock: stock,
    sold: 0,
    category: category,
    barcode: barcode
  };

  // 商品リストの先頭に追加
  storeData.products.unshift(newProduct);
  saveStoreData();

  // フォームをリセットし、次回用の新しいバーコードを即座に自動生成
  event.target.reset();
  document.getElementById('new-prod-emoji').value = '🍎';
  regenerateNewProductBarcode();

  // UI各画面を即座に更新
  renderRegisterGrid();
  renderBarcodeCards();
  renderSettingsProductsTable();

  showAlert(
    'とうろく かんりょう！🎉',
    `「${emoji} ${name}」をお店にならべました！\nバーコードカード一覧にも追加されたので、いんさつタブで確認してね！`,
    '🏷️'
  );
}

// 設定画面内の登録商品一覧テーブル描画
function renderSettingsProductsTable() {
  const container = document.getElementById('settings-products-table');
  const countEl = document.getElementById('registered-prods-count');
  countEl.textContent = storeData.products.length;
  container.innerHTML = '';

  storeData.products.forEach(p => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-2.5 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm';
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-2xl">${p.emoji}</span>
        <div class="min-w-0">
          <span class="font-black text-slate-800 truncate block">${p.name} (${p.price}円)</span>
          <span class="font-mono text-[10px] text-slate-400">🏷️ ${p.barcode}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 ml-2">
        <button onclick="deleteProductPrompt('${p.id}')" class="toy-btn text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-300 px-2 py-1 rounded-xl">
          <i class="fa-solid fa-trash mr-1"></i>さくじょ
        </button>
      </div>
    `;
    container.appendChild(row);
  });
}

function deleteProductPrompt(productId) {
  Sound.click();
  const p = storeData.products.find(item => item.id === productId);
  if (!p) return;

  showConfirm('しょうひんを けす？', `「${p.emoji} ${p.name}」をお店から削除しますか？`, () => {
    storeData.products = storeData.products.filter(item => item.id !== productId);
    cart = cart.filter(item => item.productId !== productId);
    saveStoreData();
    renderRegisterGrid();
    renderCart();
    renderBarcodeCards();
    renderSettingsProductsTable();
    showAlert('けしました', `「${p.name}」を削除しました。`, '🗑️️');
  });
}

function loadPresetShop(presetKey) {
  Sound.click();
  const preset = PRESET_SHOPS[presetKey];
  if (!preset) return;

  showConfirm('おみせを かえる？', `「${preset.title}」に切り替えます。いまのカゴはリセットされます。（※これまでの売上記録は残ります）`, () => {
    storeData.shopTitle = preset.title;
    storeData.currentCategory = 'ALL';
    // 売上データは保持
    const currentSales = storeData.sales || loadSalesCache() || { totalRevenue: 0, customerCount: 0, itemsSoldCount: 0, receipts: [] };
    storeData.products = JSON.parse(JSON.stringify(preset.products));
    storeData.sales = currentSales;
    clearCart(false);
    saveStoreData();
    renderRegisterGrid();
    renderBarcodeCards();
    renderSettingsProductsTable();
    showAlert('へんしん！', `${preset.title} がオープンしたよ！`, '🏬');
  });
}

function exportDataJSON() {
  Sound.coin();
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storeData, null, 2));
    const downloadAnchor = document.createElement('a');
    const filename = `こどもバーコードPOS_${new Date().toISOString().slice(0,10)}.json`;
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showAlert('保存できたよ！', `「${filename}」をダウンロード保存しました。`, '💾');
  } catch (err) {
    console.error(err);
    showAlert('エラー', 'データの保存に失敗しました。', '⚠️');
  }
}

function importDataJSON(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && Array.isArray(imported.products)) {
        storeData = imported;
        clearCart(false);
        saveStoreData();
        renderRegisterGrid();
        renderBarcodeCards();
        renderSettingsProductsTable();
        Sound.fanfare();
        showAlert('よみこみ 成功！', 'ファイルから おみせのデータを復元しました！', '🎉');
      } else {
        showAlert('読み込めないファイル', 'お店のデータ形式が違います。', '⚠️');
      }
    } catch (err) {
      showAlert('読み込みエラー', 'JSONファイルを正しく読み込めませんでした。', '⚠️');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

/**
 * アラートモーダルを表示（ブラウザ標準alertの代替）
 * @param {string} title タイトル
 * @param {string} message メッセージ
 * @param {string} [icon='💡'] アイコン絵文字
 * @param {Function} [onClose] 閉じたときのコールバック
 */
function showAlert(title, message, icon = '💡', onClose = null) {
  Sound.click();
  const modal = document.getElementById('alert-modal');
  const iconEl = document.getElementById('alert-icon');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const actionsEl = document.getElementById('alert-actions');

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.add('hidden');

  if (actionsEl) {
    actionsEl.innerHTML = `
      <button id="alert-ok-btn" class="toy-btn w-full py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black rounded-2xl shadow-[0_4px_0_#b45309] text-sm sm:text-base">
        わかった！
      </button>
    `;
    document.getElementById('alert-ok-btn').onclick = () => {
      closeAlertModal();
      if (onClose) onClose();
    };
  }

  if (modal) modal.classList.remove('hidden');
}

/**
 * 確認モーダルを表示（ブラウザ標準confirmの代替）
 * @param {string} title タイトル
 * @param {string} message メッセージ
 * @param {Function} onConfirm 「はい」を押したときのコールバック
 * @param {Function} [onCancel] 「やめる」を押したときのコールバック
 * @param {string} [icon='❓'] アイコン絵文字
 */
function showConfirm(title, message, onConfirm, onCancel = null, icon = '❓') {
  Sound.click();
  const modal = document.getElementById('alert-modal');
  const iconEl = document.getElementById('alert-icon');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const actionsEl = document.getElementById('alert-actions');

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.add('hidden');

  if (actionsEl) {
    actionsEl.innerHTML = `
      <button id="confirm-cancel-btn" class="toy-btn flex-1 py-2 sm:py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-black rounded-2xl shadow-[0_3px_0_#94a3b8] text-xs sm:text-sm">
        やめる
      </button>
      <button id="confirm-ok-btn" class="toy-btn flex-1 py-2 sm:py-2.5 bg-rose-500 hover:bg-rose-400 text-white font-black rounded-2xl shadow-[0_3px_0_#9f1239] text-xs sm:text-sm">
        はい！
      </button>
    `;

    document.getElementById('confirm-cancel-btn').onclick = () => {
      closeAlertModal();
      if (onCancel) onCancel();
    };

    document.getElementById('confirm-ok-btn').onclick = () => {
      closeAlertModal();
      if (onConfirm) onConfirm();
    };
  }

  if (modal) modal.classList.remove('hidden');
}

/**
 * 文字入力モーダルを表示（ブラウザ標準promptの代替）
 * @param {string} title タイトル
 * @param {string} message メッセージ
 * @param {string} defaultValue 初期値
 * @param {Function} onSubmit 決定時のコールバック (value) => void
 * @param {string} [icon='✏️'] アイコン絵文字
 */
function showPrompt(title, message, defaultValue = '', onSubmit, icon = '✏️') {
  Sound.click();
  const modal = document.getElementById('alert-modal');
  const iconEl = document.getElementById('alert-icon');
  const titleEl = document.getElementById('alert-title');
  const msgEl = document.getElementById('alert-message');
  const inputContainer = document.getElementById('alert-input-container');
  const inputEl = document.getElementById('alert-prompt-input');
  const actionsEl = document.getElementById('alert-actions');

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  if (inputContainer && inputEl) {
    inputContainer.classList.remove('hidden');
    inputEl.value = defaultValue;
    setTimeout(() => {
      inputEl.focus();
      inputEl.select();
    }, 150);
  }

  if (actionsEl) {
    actionsEl.innerHTML = `
      <button id="prompt-cancel-btn" class="toy-btn flex-1 py-2 sm:py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-black rounded-2xl shadow-[0_3px_0_#94a3b8] text-xs sm:text-sm">
        やめる
      </button>
      <button id="prompt-ok-btn" class="toy-btn flex-1 py-2 sm:py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-2xl shadow-[0_3px_0_#065f46] text-xs sm:text-sm">
        けってい！
      </button>
    `;

    const handleConfirm = () => {
      const val = inputEl ? inputEl.value.trim() : '';
      closeAlertModal();
      if (onSubmit && val) onSubmit(val);
    };

    document.getElementById('prompt-cancel-btn').onclick = () => {
      closeAlertModal();
    };

    document.getElementById('prompt-ok-btn').onclick = handleConfirm;

    if (inputEl) {
      inputEl.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleConfirm();
        }
      };
    }
  }

  if (modal) modal.classList.remove('hidden');
}

function closeAlertModal() {
  Sound.click();
  const modal = document.getElementById('alert-modal');
  if (modal) modal.classList.add('hidden');
}

// ブラウザ標準ダイアログ（alert / confirm / prompt）を独自モーダルに差し替え（オーバーライド）
window.alert = function(message) {
  showAlert('おしらせ', String(message), '💡');
};

window.confirm = function(message) {
  showConfirm('かくにん', String(message), () => {});
  return false;
};

window.prompt = function(message, defaultValue = '') {
  showPrompt('にゅうりょく', String(message), defaultValue, () => {});
  return null;
};

function openHelpModal() {
  Sound.click();
  document.getElementById('help-modal').classList.remove('hidden');
}

function closeHelpModal() {
  Sound.click();
  document.getElementById('help-modal').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
  renderRegisterGrid();
  renderCart();
  renderBarcodeCards();
  renderEmojiPalette();
  regenerateNewProductBarcode();
});
