// ─── Firebase config (shared across storefront) ───────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB2VpDwq1bmnuD4BtfMMQUPQeri5fyoG-o",
  authDomain: "seven-14202.firebaseapp.com",
  projectId: "seven-14202",
  storageBucket: "seven-14202.firebasestorage.app",
  messagingSenderId: "215608487838",
  appId: "1:215608487838:web:f4b8e124cfd8092873308f",
  measurementId: "G-871DBCE8GJ"
};

// ─── Size charts per product type ─────────────────────────────────────────────
const SIZE_CHARTS = {
  'tshirt-reg-1': {
    label: 'Regular Shirt — Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['M',   '54', '70'],
      ['L',   '56', '72'],
      ['XL',  '58', '74'],
      ['XXL', '60', '76'],
    ]
  },
  'tshirt-over-1': {
    label: 'Oversize Shirt — Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['M',   '58', '71'],
      ['L',   '59', '73'],
      ['XL',  '62', '75'],
      ['XXL', '64', '77'],
    ]
  },
  'tshirt-box-1': {
    label: 'Boxy Fit Shirt — Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['M/S', '58', '64'],
      ['L',   '60', '66'],
      ['XL',  '62', '68'],
      ['XXL', '64', '70'],
    ]
  },
  'tshirt-over-new-1': {
    label: 'Oversize Shirt — New Drop Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['S',   '56', '69'],
      ['M',   '58', '71'],
      ['L',   '59', '73'],
      ['XL',  '62', '75'],
      ['XXL', '64', '77'],
    ],
  },
  'tshirt-box-new-1': {
    label: 'Boxy Fit Shirt — New Drop Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['M',   '56', '60'],
      ['L',   '58', '63'],
      ['XL',  '60', '66'],
      ['XXL', '62', '69'],
    ],
  },
  'cloud-box-tee': {
    label: 'Cloud Box Tee — Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['M',   '56', '60'],
      ['L',   '58', '63'],
      ['XL',  '60', '66'],
      ['XXL', '62', '69'],
    ],
  },
  'slouch-standard-tee': {
    label: 'Slouch Standard Tee — Measurements',
    columns: ['Size', 'Width (cm)', 'Length (cm)'],
    rows: [
      ['S',   '56', '69'],
      ['M',   '58', '71'],
      ['L',   '59', '73'],
      ['XL',  '62', '75'],
      ['XXL', '64', '77'],
    ],
  },
  'Pants-1': {
    label: 'Wide Leg Pants — Measurements',
    columns: ['Size', 'Width (cm)', 'Thigh (cm)', 'Length (cm)'],
    rows: [
      ['L',   '50', '30', '105'],
      ['XL',  '55', '35', '107'],
      ['XXL', '60', '40', '110'],
    ]
  },
};

// ─── Color palettes ────────────────────────────────────────────────────────────
// Original catalog color variants — kept alongside the uploaded New Drop assets.
const ORIGINAL_BOX_FIT_COLORS = [
  { name: 'White',    hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-box-1': 'assets/tshirt-box-white.PNG' }
  },
  { name: 'Black',    hex: '#0a0a0a', threehex: 0x0a0a0a,
    images: { 'tshirt-box-1': 'assets/tshirt-box-black.PNG' }
  },
  { name: 'Gray',     hex: '#8A8A8A', threehex: 0x8a8a8a,
    images: { 'tshirt-box-1': 'assets/tshirt-box-gray.PNG' }
  },
  { name: 'Burgundy', hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-box-1': 'assets/tshirt-box-burgundy.PNG' }
  },
];

const BOX_FIT_COLORS = [
  { name: 'White',    hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-box-new-1': ['assets/box-fit/box_white1.PNG', 'assets/box-fit/box_white2.PNG'] }
  },
  { name: 'Black', hex: '#0A0A0A', threehex: 0x0a0a0a,
    images: { 'tshirt-box-new-1': ['assets/box-fit/box_black.PNG'] }
  },
  { name: 'Navy Blue', hex: '#1B2A4A', threehex: 0x1b2a4a,
    images: { 'tshirt-box-new-1': ['assets/box-fit/box_navy_blue1.PNG', 'assets/box-fit/box_navy_blue2.PNG'] }
  },
  { name: 'Dark Gray', hex: '#555555', threehex: 0x555555,
    images: { 'tshirt-box-new-1': ['assets/box-fit/box_dark_gray1.PNG', 'assets/box-fit/box_dark_gray2.PNG'] }
  },
  { name: 'Burgundy', hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-box-new-1': ['assets/box-fit/box_burgundy1.PNG',] }
  },
];

const ORIGINAL_OVERSIZE_FIT_COLORS = [
  { name: 'White',      hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-over-1': 'assets/tshirt-box-white.PNG' }
  },
  { name: 'Black',      hex: '#0a0a0a', threehex: 0x0a0a0a,
    images: { 'tshirt-over-1': 'assets/tshirt-box-black.PNG' }
  },
  { name: 'Light Gray', hex: '#C0C0C0', threehex: 0xc0c0c0,
    images: { 'tshirt-over-1': 'assets/IMG_1387.PNG' }
  },
  { name: 'Burgundy',   hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-over-1': 'assets/tshirt-box-burgundy.PNG' }
  },
  { name: 'Baby Blue',  hex: '#89C4E1', threehex: 0x89c4e1,
    images: { 'tshirt-over-1': 'assets/tshirt-box-babyblue.PNG' }
  },
];

const OVERSIZE_FIT_COLORS = [
  { name: 'White',      hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-over-new-1': ['assets/oversize-fit/over_white1.PNG', 'assets/oversize-fit/over_white2.PNG' ] }
  },
  { name: 'Black',      hex: '#0a0a0a', threehex: 0x0a0a0a,
    images: { 'tshirt-over-new-1': ['assets/oversize-fit/over_over_black1.PNG', 'assets/oversize-fit/over_black2.PNG'] }
  },
  { name: 'Dark Gray', hex: '#555555', threehex: 0x555555,
    images: { 'tshirt-over-new-1': ['assets/oversize-fit/over_dark_gray1.PNG', 'assets/oversize-fit/over_dark_gray2.PNG'] }
  },
  { name: 'Navy Blue', hex: '#1B2A4A', threehex: 0x1b2a4a,
    images: { 'tshirt-over-new-1': ['assets/oversize-fit/over_navy_blue1.PNG', 'assets/oversize-fit/over_navy_blue2.PNG'] }
  },
  { name: 'Burgundy', hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-over-new-1': ['assets/oversize-fit/over_burgundy2.PNG',] }
  },
];

// ─── New Cloud / Slouch color catalog ─────────────────────────────────────────
const CLOUD_SLouch_COLORS = [
  { name: 'Red',        hex: '#C62828', threehex: 0xc62828,
    images: {
      'cloud-box-tee': ['assets/new/red-face.png', 'assets/new/red-back.png'],
      'slouch-standard-tee': ['assets/new/red-face.png', 'assets/new/red-back.png']
    }
  },
  { name: 'Black',      hex: '#0A0A0A', threehex: 0x0a0a0a,
    images: {
      'cloud-box-tee': ['assets/new/black-face.png', 'assets/new/black-back.png'],
      'slouch-standard-tee': ['assets/new/black-face.png', 'assets/new/black-back.png']
    }
  },
  { name: 'Navy Blue',  hex: '#1B2A4A', threehex: 0x1b2a4a,
    images: {
      'cloud-box-tee': ['assets/new/navy-blue-face.png', 'assets/new/navy-blue-back.png'],
      'slouch-standard-tee': ['assets/new/navy-blue-face.png', 'assets/new/navy-blue-back.png']
    }
  },
  { name: 'White',      hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: {
      'cloud-box-tee': ['assets/new/White-face.png', 'assets/new/white-back.png'],
      'slouch-standard-tee': ['assets/new/White-face.png', 'assets/new/white-back.png']
    }
  },
  { name: 'Gray',       hex: '#8A8A8A', threehex: 0x8a8a8a,
    images: {
      'cloud-box-tee': ['assets/new/gray-face.png', 'assets/new/gray-back.png'],
      'slouch-standard-tee': ['assets/new/gray-face.png', 'assets/new/gray-back.png']
    }
  },
  { name: 'Burgundy',   hex: '#6E1423', threehex: 0x6e1423,
    images: {
      'cloud-box-tee': ['assets/new/bergandy-face.png', 'assets/new/bergandy-back.png'],
      'slouch-standard-tee': ['assets/new/bergandy-face.png', 'assets/new/bergandy-back.png']
    }
  },
];

const REGULAR_FIT_COLORS = [
  { name: 'White',     hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-reg-1': 'assets/tshirt-box-white.PNG' }
  },
  { name: 'Black',     hex: '#0a0a0a', threehex: 0x0a0a0a,
    images: { 'tshirt-reg-1': 'assets/tshirt-box-black.PNG' }
  },
  { name: 'Navy Blue', hex: '#1B2A4A', threehex: 0x1b2a4a,
    images: { 'tshirt-reg-1': 'assets/tshirt-box-navy.PNG' }
  },
  { name: 'Burgundy',  hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-reg-1': 'assets/tshirt-box-burgundy.PNG' }
  },
];

const TSHIRT_COLORS = [
  { name: 'White',    hex: '#FFFFFF', threehex: 0xf5f5f5,
    images: { 'tshirt-box-1': 'assets/tshirt-box-white.PNG', 'tshirt-over-1': 'assets/tshirt-box-white.PNG', 'tshirt-reg-1': 'assets/tshirt-box-white.PNG', 'tshirt-1': 'assets/tshirt-box-white.PNG', 'tshirt-2': 'assets/tshirt-box-white.PNG' }
  },
  { name: 'Black',    hex: '#0a0a0a', threehex: 0x0a0a0a,
    images: { 'tshirt-box-1': 'assets/tshirt-box-black.PNG', 'tshirt-over-1': 'assets/tshirt-box-black.PNG', 'tshirt-reg-1': 'assets/tshirt-box-black.PNG', 'tshirt-1': 'assets/tshirt-box-black.PNG', 'tshirt-2': 'assets/tshirt-box-black.PNG' }
  },
  { name: 'Gray',     hex: '#8A8A8A', threehex: 0x8a8a8a,
    images: { 'tshirt-box-1': 'assets/tshirt-box-gray.PNG', 'tshirt-over-1': 'assets/tshirt-box-gray.PNG', 'tshirt-reg-1': 'assets/tshirt-box-gray.PNG', 'tshirt-1': 'assets/tshirt-box-gray.PNG', 'tshirt-2': 'assets/tshirt-box-gray.PNG' }
  },
  { name: 'Navy Blue',hex: '#1B2A4A', threehex: 0x1b2a4a,
    images: { 'tshirt-box-1': 'assets/tshirt-box-navy.PNG', 'tshirt-over-1': 'assets/tshirt-box-navy.PNG', 'tshirt-reg-1': 'assets/tshirt-box-navy.PNG', 'tshirt-1': 'assets/tshirt-box-navy.PNG', 'tshirt-2': 'assets/tshirt-box-navy.PNG' }
  },
  { name: 'Burgundy', hex: '#6E1423', threehex: 0x6e1423,
    images: { 'tshirt-box-1': 'assets/tshirt-box-burgundy.PNG', 'tshirt-over-1': 'assets/tshirt-box-burgundy.PNG', 'tshirt-reg-1': 'assets/tshirt-box-burgundy.PNG', 'tshirt-1': 'assets/tshirt-box-burgundy.PNG', 'tshirt-2': 'assets/tshirt-box-burgundy.PNG' }
  },
  { name: 'Baby Blue',hex: '#89C4E1', threehex: 0x89c4e1,
    images: { 'tshirt-box-1': 'assets/tshirt-box-babyblue.PNG', 'tshirt-over-1': 'assets/tshirt-box-babyblue.PNG', 'tshirt-reg-1': 'assets/tshirt-box-babyblue.PNG', 'tshirt-1': 'assets/tshirt-box-babyblue.PNG', 'tshirt-2': 'assets/tshirt-box-babyblue.PNG' }
  },
];

const PANTS_COLORS = [
  { name: 'White', hex: '#FFFFFF', threehex: 0xf5f5f5, images: { 'Pants-1': 'assets/IMG_1349.PNG' } },
  { name: 'Gray',  hex: '#8A8A8A', threehex: 0x8a8a8a, images: { 'Pants-1': 'assets/IMG_1341.PNG' } },
  { name: 'Black', hex: '#0a0a0a', threehex: 0x0a0a0a, images: { 'Pants-1': 'assets/IMG_1346.PNG' } },
];

// ─── Product catalog ───────────────────────────────────────────────────────────
const PRODUCTS = {
  'tshirt-box-1': { id: 'tshirt-box-1', name: 'Box Fit Tee — Original', category: 'T-Shirt', subcategory: 'Box Fit', type: 'tshirt', price: 550, currency: 'L.E', colors: ORIGINAL_BOX_FIT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/tshirt-box-white.PNG', description: 'The original Box Fit T-Shirt from the Se7en collection. Unisex, 100% cotton, with dropped shoulders and a structured hem.' },
  'tshirt-over-1': { id: 'tshirt-over-1', name: 'Oversize Fit Tee — Original', category: 'T-Shirt', subcategory: 'Oversize Fit', type: 'tshirt', price: 600, currency: 'L.E', colors: ORIGINAL_OVERSIZE_FIT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/tshirt-box-black.PNG', description: 'The original Oversize Fit unisex tee from the Se7en collection. Premium feel and 100% cotton.' },
  'tshirt-reg-1': { id: 'tshirt-reg-1', name: 'Regular Fit Tee', category: 'T-Shirt', subcategory: 'Regular', type: 'tshirt', price: 550, currency: 'L.E', colors: REGULAR_FIT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/tshirt-box-navy.PNG', description: 'Classic everyday t-shirt with a clean fit, soft fabric, 100% cotton and all-day comfort.' },
  'tshirt-box-new-1': { id: 'tshirt-box-new-1', name: 'Box Fit Tee — New Drop', category: 'T-Shirt', subcategory: 'Box Fit', type: 'tshirt', price: 720, currency: 'L.E', colors: BOX_FIT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/box-fit/box_white1.PNG', description: 'New Box Fit T-Shirt drop. Unisex 100% cotton with a structured shape and front/back product imagery.' },
  'tshirt-over-new-1': { id: 'tshirt-over-new-1', name: 'Oversize Fit Tee — New Drop', category: 'T-Shirt', subcategory: 'Oversize Fit', type: 'tshirt', price: 750, currency: 'L.E', colors: OVERSIZE_FIT_COLORS, sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'assets/oversize-fit/over_over_black1.PNG', description: 'New Oversize Fit T-Shirt drop. Unisex 100% cotton with a relaxed silhouette and front/back product imagery.' },
  'tshirt-1': { id: 'tshirt-1', name: 'Core T-Shirt', category: 'T-Shirt', subcategory: 'Box Fit', type: 'tshirt', price: 68, currency: 'L.E', colors: TSHIRT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/tshirt-box-white.PNG', description: 'A minimal jersey essential with a boxy fit.' },
  'tshirt-2': { id: 'tshirt-2', name: 'Contour Tee', category: 'T-Shirt', subcategory: 'Regular', type: 'tshirt', price: 74, currency: 'L.E', colors: TSHIRT_COLORS, sizes: ['M', 'L', 'XL', 'XXL'], image: 'assets/tshirt-box-navy.PNG', description: 'Built with soft structure and tailored proportions.' },
  'cloud-box-tee': {
    id: 'cloud-box-tee',
    name: 'Cloud Box tee',
    category: 'T-Shirt',
    subcategory: 'Box Fit',
    type: 'tshirt',
    price: 720,
    currency: 'L.E',
    colors: CLOUD_SLouch_COLORS,
    sizes: ['M', 'L', 'XL', 'XXL'],
    image: 'assets/new/White-face.png',
    description: 'Cloud Box tee with a clean boxy silhouette, structured shape and front/back product imagery.'
  },
  'slouch-standard-tee': {
    id: 'slouch-standard-tee',
    name: 'Slouch Standard tee',
    category: 'T-Shirt',
    subcategory: 'Oversize Fit',
    type: 'tshirt',
    price: 750,
    currency: 'L.E',
    colors: CLOUD_SLouch_COLORS,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'assets/new/red.png',
    description: 'Slouch Standard tee with a relaxed oversized silhouette and front/back product imagery.'
  },
  'accessory-1': { id: 'accessory-1', name: 'Signature Cap', category: 'Accessory', type: 'cap', price: 52, description: 'An everyday cap stripped down to proportion, contrast, and shape.' },
  'accessory-2': { id: 'accessory-2', name: 'Utility Tote', category: 'Accessory', type: 'bag', price: 86, description: 'A premium carry-all designed with clean geometry.' },
  'Pants-1': { id: 'Pants-1', name: 'Monolith Pants', category: 'Pants', type: 'Pants', price: 600, currency: 'L.E', colors: PANTS_COLORS, image: 'assets/IMG_1349.PNG', description: 'Premium heavyweight Pants with a clean oversized silhouette and refined monochrome detailing.' },
};

// Product thumbnail map for cart
const PRODUCT_THUMBNAILS = {
  'cloud-box-tee':       'assets/new/White-face.png',
  'slouch-standard-tee': 'assets/new/White-face.png',
  'tshirt-box-1':  'assets/tshirt-box-white.PNG',
  'tshirt-over-1': 'assets/tshirt-box-black.PNG',
  'tshirt-box-new-1':  'assets/box-fit/box_white1.PNG',
  'tshirt-over-new-1': 'assets/oversize-fit/over_over_black1.PNG',
  'tshirt-reg-1':  'assets/tshirt-box-navy.PNG',
  'Pants-1':       'assets/IMG_1349.PNG',
};

// ─── Cart ─────────────────────────────────────────────────────────────────────
const CART_KEY = 'se7en-cart';

const state = {
  cart: loadCart(),
  activeProductId: null,
  productSize: 'S',
  productColor: BOX_FIT_COLORS[0],
  db: null
};

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  renderCart();
  renderCheckoutSummary();
}

function addToCart(productId, size = 'M', color = null) {
  const product = PRODUCTS[productId];
  if (!product) return;
  const colorName = color || (product.colors ? product.colors[0].name : null);
  state.cart.push({ productId, size, color: colorName, quantity: 1, at: Date.now() });
  saveCart();
  openCart();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
}

function cartSubtotalValue() {
  return state.cart.reduce((sum, item) => {
    const p = PRODUCTS[item.productId];
    return p ? sum + p.price * item.quantity : sum;
  }, 0);
}

// ─── Shipping rules ───────────────────────────────────────────────────────────
function checkoutShippingValue(subtotal) {
  return subtotal >= 1500 ? 0 : 65;
}

// ─── Firebase / Firestore helpers ──────────────────────────────────────────────
async function initFirestore() {
  if (state.db) return state.db;
  const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
  const { getFirestore, collection, addDoc, getDocs, query, orderBy, onSnapshot }
    = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');

  const app = initializeApp(FIREBASE_CONFIG);
  const firestore = getFirestore(app);
  state.db = { firestore, collection, addDoc, getDocs, query, orderBy, onSnapshot };
  return state.db;
}

async function saveOrderToFirestore(order) {
  try {
    const { firestore, collection, addDoc } = await initFirestore();
    const docRef = await addDoc(collection(firestore, 'orders'), order);
    return docRef.id;
  } catch (err) {
    console.error('Firestore write failed:', err);
    _persistOrderLocally(order);
    return null;
  }
}

function _persistOrderLocally(order) {
  try {
    const raw = localStorage.getItem('se7en_orders_v2');
    const parsed = raw ? JSON.parse(raw) : { orders: [] };
    const orders = Array.isArray(parsed) ? parsed : (parsed.orders || []);
    orders.unshift(order);
    localStorage.setItem('se7en_orders_v2', JSON.stringify({ orders }));
  } catch { /* silent */ }
}

// ─── DOM helpers ───────────────────────────────────────────────────────────────
const qs  = (sel, scope = document) => scope.querySelector(sel);
const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

// ─── Cart UI ──────────────────────────────────────────────────────────────────
function renderCart() {
  const cartCount    = qs('#cartCount');
  const cartItems    = qs('#cartItems');
  const cartSubtotal = qs('#cartSubtotal');
  if (cartCount) cartCount.textContent = String(state.cart.reduce((s, i) => s + i.quantity, 0));
  if (!cartItems || !cartSubtotal) return;

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="cart-empty-state">
      <div style="font-size:36px;opacity:.25">🛍</div>
      <span>Your cart is empty</span>
    </div>`;
    cartSubtotal.textContent = '0 L.E';
    return;
  }

  let subtotal = 0;
  cartItems.innerHTML = state.cart.map((item, index) => {
    const product = PRODUCTS[item.productId];
    if (!product) return '';
    const lineTotal = product.price * item.quantity;
    subtotal += lineTotal;
    let thumb = PRODUCT_THUMBNAILS[item.productId];

if (product.colors && item.color) {
  const selectedColor = product.colors.find(c => c.name === item.color);

  if (selectedColor) {
    thumb = resolveProductImage(product, selectedColor);
  }
}
    const thumbHTML = thumb
      ? `<img src="${thumb}" alt="${product.name}" loading="lazy">`
      : `<div class="cart-item__thumb-fallback">👕</div>`;
    const colorLine = item.color ? item.color + ' · ' : '';
    return `
      <div class="cart-item" id="cart-item-${index}">
        <div class="cart-item__thumb">${thumbHTML}</div>
        <div class="cart-item__body">
          <div class="cart-item__name">${product.name}</div>
          <div class="cart-item__meta">${colorLine}Size ${item.size}</div>
          <div class="cart-item__row">
            <div class="qty-control">
              <button class="qty-btn" data-qty-index="${index}" data-delta="-1" aria-label="Decrease">−</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" data-qty-index="${index}" data-delta="1" aria-label="Increase">+</button>
            </div>
            <span class="cart-item__price">${lineTotal.toLocaleString()} L.E</span>
            <button class="del-item-btn" data-remove-index="${index}" aria-label="Remove ${product.name}">✕</button>
          </div>
        </div>
      </div>`;
  }).join('');

  cartSubtotal.textContent = `${subtotal.toLocaleString()} L.E`;

  // Quantity buttons
  qsa('[data-qty-index]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx   = Number(btn.dataset.qtyIndex);
      const delta = Number(btn.dataset.delta);
      if (!state.cart[idx]) return;
      state.cart[idx].quantity = Math.max(1, state.cart[idx].quantity + delta);
      saveCart();
    });
  });

  // Animated remove buttons
  qsa('[data-remove-index]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.removeIndex);
      const el  = qs(`#cart-item-${idx}`);
      if (el) {
        el.classList.add('removing');
        setTimeout(() => removeCartItem(idx), 310);
      } else {
        removeCartItem(idx);
      }
    });
  });
}

function openCart() {
  qs('#cartDrawer')?.classList.add('open');
  qs('#backdrop')?.classList.add('visible');
  qs('#cartDrawer')?.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  qs('#cartDrawer')?.classList.remove('open');
  qs('#backdrop')?.classList.remove('visible');
  qs('#cartDrawer')?.setAttribute('aria-hidden', 'true');
}

function goToCheckout() { window.location.href = 'checkout.html'; }

// ─── Navigation / header ──────────────────────────────────────────────────────
function setupNavigation() {
  const header    = qs('#siteHeader');
  const navToggle = qs('#navToggle');
  const navMenu   = qs('#navMenu');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    qsa('.nav-link', navMenu).forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  qs('#cartButton')?.addEventListener('click', openCart);
  qs('#closeCart')?.addEventListener('click', closeCart);
  qs('#backdrop')?.addEventListener('click', closeCart);
  qsa('.checkout-button').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); goToCheckout(); });
  });
}

// ─── Reveal / Parallax / Tilt / Transitions ───────────────────────────────────
function setupRevealAnimations() {
  const items = qsa('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.16 });
  items.forEach(item => observer.observe(item));
}

function setupParallax() {
  const nodes = qsa('.parallax');
  if (!nodes.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const update = () => {
    const y = window.scrollY;
    nodes.forEach(node => {
      const speed = Number(node.dataset.speed || 0.04);
      const rect  = node.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      node.style.transform = `translate3d(0, ${offset * -0.18 + y * speed * 0.04}px, 0)`;
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function setupPageTransitions() {
  qsa('a[href$=".html"], a[href*="product.html"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || link.target === '_blank') return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      document.body.classList.add('is-transitioning');
      setTimeout(() => { window.location.href = href; }, 380);
    });
  });
}

function setupTiltEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  qsa('.product-tilt').forEach(card => {
    let frame = null;
    const move = event => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        card.style.transform = `perspective(1200px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 10}deg) translateY(-6px)`;
      });
    };
    const reset = () => { card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)'; };
    card.addEventListener('mousemove', move);
    card.addEventListener('mouseleave', reset);
  });
}

// ─── Shop filters ─────────────────────────────────────────────────────────────
function setupFilters() {
  const chips = qsa('.filter-chip');
  const cards = qsa('.product-card[data-category]');
  if (!chips.length || !cards.length) return;

  const subChips = qsa('.subfilter-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;

      const subRow = qs('#tshirt-subfilters');
      if (subRow) subRow.style.display = filter === 'tshirt' ? 'flex' : 'none';

      subChips.forEach(c => c.classList.remove('active'));
      const allSub = qs('.subfilter-chip[data-sub="all"]');
      if (allSub) allSub.classList.add('active');

      cards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
    });
  });

  subChips.forEach(chip => {
    chip.addEventListener('click', () => {
      subChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const sub = chip.dataset.sub;
      cards.forEach(card => {
        if (card.dataset.category !== 'tshirt') return;
        card.classList.toggle('hidden', sub !== 'all' && card.dataset.subcategory !== sub);
      });
    });
  });
}

// ─── Product image switcher ───────────────────────────────────────────────────
function resolveProductImage(product, color) {
  if (!product) return '';
  const gallery = color && color.images && color.images[product.id];
  if (Array.isArray(gallery)) return gallery[0] || '';
  if (gallery) return gallery;
  return product.image || '';
}

function resolveProductGallery(product, color) {
  if (!product) return [];
  const gallery = color && color.images && color.images[product.id];
  if (Array.isArray(gallery)) return gallery;
  if (gallery) return [gallery];
  return product.image ? [product.image] : [];
}

function renderProductGallery(product, color) {
  const row = qs('#thumbnailRow');
  if (!row) return;
  const gallery = resolveProductGallery(product, color);
  row.innerHTML = gallery.map((src, index) => `
    <button class="thumb ${index === 0 ? 'active' : ''}" type="button" data-gallery-src="${src}" aria-label="View image ${index + 1}">
      <img src="${src}" alt="${product.name} image ${index + 1}" loading="lazy">
    </button>
  `).join('');
  row.style.display = gallery.length > 1 ? 'flex' : 'none';
  qsa('.thumb', row).forEach(thumb => {
    thumb.addEventListener('click', () => {
      qsa('.thumb', row).forEach(item => item.classList.remove('active'));
      thumb.classList.add('active');
      const img = qs('#productMainImage');
      if (!img) return;
      img.classList.add('switching');
      setTimeout(() => {
        img.src = thumb.dataset.gallerySrc || '';
        img.classList.remove('switching');
      }, 220);
    });
  });
}

function swapProductImage(newSrc, colorName) {
  const img   = qs('#productMainImage');
  const label = qs('#productColorLabel');
  if (!img) return;
  img.classList.add('switching');
  setTimeout(() => {
    img.src = newSrc;
    img.alt = colorName || 'Product';
    img.classList.remove('switching');
  }, 320);
  if (label) label.textContent = colorName || '';
}

// ─── Color selector on product page ──────────────────────────────────────────
function setupColorSelector() {
  const swatches = qsa('.color-swatch');
  if (!swatches.length) return;

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const colorName = swatch.dataset.color;
      const product   = PRODUCTS[state.activeProductId];
      const palette   = product?.colors || [];
      const color     = palette.find(c => c.name === colorName);

      if (color) {
        state.productColor = color;
        const lbl = qs('#selectedColorName');
        if (lbl) lbl.textContent = color.name;
        swapProductImage(resolveProductImage(product, color), color.name);
        renderProductGallery(product, color);
        if (window._garmentMeshes) {
          window._garmentMeshes.forEach(mesh => {
            mesh.material.color.setHex(color.threehex);
            mesh.material.needsUpdate = true;
          });
        }
      }
    });
  });
}

// ─── Size chart injection ─────────────────────────────────────────────────────
function buildSizeChartHTML(chart) {
  const headerCells = chart.columns.map(col => `<th>${col}</th>`).join('');
  const bodyRows = chart.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
  const image = chart.image ? `<img class="size-chart-image" src="${chart.image}" alt="${chart.label} reference chart" loading="lazy">` : '';
  return `<div class="size-chart-section"><div class="size-chart-label">${chart.label}</div>${image}<table class="size-chart-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
}

function injectSizeChart(productId) {
  const block = qs('#sizeChartBlock');
  const panel = qs('#sizeChartPanel');
  if (!block || !panel) return;
  const chart = SIZE_CHARTS[productId];
  if (!chart) { block.style.display = 'none'; return; }
  panel.innerHTML = buildSizeChartHTML(chart);
  block.style.display = 'block';
}

// ─── Add-to-cart buttons ──────────────────────────────────────────────────────
function setupAddToCartButtons() {
  qsa('.add-to-cart').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const product = PRODUCTS[id];
    const color = product?.colors ? product.colors[0].name : null;
    addToCart(id, 'M', color);
  }));

  qs('#addProductToCart')?.addEventListener('click', () => {
    addToCart(state.activeProductId || 'tshirt-box-1', state.productSize, state.productColor?.name || null);
  });
}

function setupSizeSelector() {
  const pills = qsa('.size-pill');
  if (!pills.length) return;
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.productSize = pill.textContent.trim();
    });
  });
}

// ─── Contact form ─────────────────────────────────────────────────────────────
function setupContactForm() {
  const form = qs('.contact-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const btn = qs('button[type="submit"]', form);
    const orig = btn.textContent;
    btn.textContent = 'Message Sent';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; form.reset(); }, 1800);
  });
}

// ─── Product page hydration ───────────────────────────────────────────────────
function hydrateProductPage() {
  if (document.body.dataset.page !== 'product') return;

  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id') || 'tshirt-box-1';
  const product = PRODUCTS[id] || PRODUCTS['tshirt-box-1'];
  state.activeProductId = product.id;

  if (product.colors && product.colors.length) state.productColor = product.colors[0];

  const set = (sel, val) => { const el = qs(sel); if (el) el.textContent = val; };
  set('#productCategory', product.subcategory ? `${product.category} — ${product.subcategory}` : product.category);
  set('#productName', product.name);
  set('#productFit', product.subcategory || 'Classic');
  set('#productPalette', product.colors ? `${product.colors.length} Colors` : 'Core');

  const priceEl = qs('#productPrice');
  if (priceEl) priceEl.textContent = product.currency ? `${product.price} ${product.currency}` : `$${product.price}`;
  set('#productDescription', product.description);

  const sizes = product.sizes || (SIZE_CHARTS[product.id]?.rows || []).map(row => row[0]);
  const sizeSelector = qs('#sizeSelector');
  if (sizeSelector && sizes.length) {
    sizeSelector.innerHTML = sizes.map((size, index) =>
      `<button class="size-pill ${index === 0 ? 'active' : ''}" type="button">${size}</button>`
    ).join('');
    state.productSize = sizes[0];
    setupSizeSelector();
  }

  const img = qs('#productMainImage');
  if (img && product.image) {
    const defaultColor = product.colors ? product.colors[0] : null;
    img.src = resolveProductImage(product, defaultColor) || product.image;
    img.alt = product.name;
    const label = qs('#productColorLabel');
    if (label) label.textContent = defaultColor ? defaultColor.name : '';
    renderProductGallery(product, defaultColor);
  }

  const colorBlock = qs('#colorSelectorBlock');
  if (colorBlock && product.colors) {
    colorBlock.style.display = 'block';
    const swatchRow = qs('#colorSwatches');
    if (swatchRow) {
      swatchRow.innerHTML = product.colors.map((c, i) => `
        <button class="color-swatch ${i === 0 ? 'active' : ''}" data-color="${c.name}" style="--swatch-color:${c.hex}" title="${c.name}" aria-label="${c.name}"></button>
      `).join('');
    }
    const lbl = qs('#selectedColorName');
    if (lbl) lbl.textContent = product.colors[0].name;
    state.productColor = product.colors[0];
  } else {
    const label = qs('#productColorLabel');
    if (label) label.style.display = 'none';
  }

  setupColorSelector();
  injectSizeChart(product.id);
}

// ─── Checkout summary ─────────────────────────────────────────────────────────
function renderCheckoutSummary() {
  if (document.body.dataset.page !== 'checkout') return;
  const checkoutItems    = qs('#checkoutItems');
  const checkoutSubtotal = qs('#checkoutSubtotal');
  const checkoutShipping = qs('#checkoutShipping');
  const checkoutTotal    = qs('#checkoutTotal');
  const checkoutEmpty    = qs('#checkoutEmpty');
  const checkoutContent  = qs('#checkoutContent');
  const submitButton     = qs('#placeOrderButton');

  if (!checkoutItems) return;

  if (!state.cart.length) {
    checkoutItems.innerHTML = '';
    if (checkoutSubtotal) checkoutSubtotal.textContent = '0 L.E';
    if (checkoutShipping) checkoutShipping.textContent = '0 L.E';
    if (checkoutTotal)    checkoutTotal.textContent    = '0 L.E';
    if (checkoutEmpty)    checkoutEmpty.hidden   = false;
    if (checkoutContent)  checkoutContent.hidden = true;
    if (submitButton)     submitButton.disabled  = true;
    return;
  }

  const subtotal = cartSubtotalValue();
  const shipping = checkoutShippingValue(subtotal);
  const total    = subtotal + shipping;

  checkoutItems.innerHTML = state.cart.map(item => {
    const product = PRODUCTS[item.productId];
    if (!product) return '';
    const colorLine = item.color ? ` / ${item.color}` : '';
    const priceDisplay = product.currency ? `${product.price} ${product.currency}` : `$${product.price}`;
    return `<div class="summary-item"><div><strong>${product.name}</strong><small>${product.category}${colorLine} / Size ${item.size}</small></div><strong>${priceDisplay}</strong></div>`;
  }).join('');

  if (checkoutSubtotal) checkoutSubtotal.textContent = `${subtotal} L.E`;
  if (checkoutShipping) checkoutShipping.textContent = shipping === 0 ? 'Free' : `${shipping} L.E`;
  if (checkoutTotal)    checkoutTotal.textContent    = `${total} L.E`;
  if (checkoutEmpty)    checkoutEmpty.hidden   = true;
  if (checkoutContent)  checkoutContent.hidden = false;
  if (submitButton)     submitButton.disabled  = false;

  window.dispatchEvent(new Event('se7en:summaryRendered'));
}

// ─── Order form (checkout page) ───────────────────────────────────────────────
function createOrderId() {
  return `SE${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

function buildOrderFromForm(form) {
  const fd    = new FormData(form);
  const items = state.cart.map(item => {
    const p = PRODUCTS[item.productId];
    return p ? {
      productId: item.productId, productName: p.name, price: p.price,
      size: item.size, color: item.color || null, quantity: item.quantity
    } : null;
  }).filter(Boolean);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // ── FIX: Read activeDiscount from window scope (set by checkout.html) ──
  const discountPct = (typeof window.activeDiscount === 'number') ? window.activeDiscount : 0;
  const discountAmt = Math.round(subtotal * discountPct / 100);
  const promoCode   = discountPct > 0
    ? (document.getElementById('promoInput')?.value.trim().toUpperCase() || '')
    : '';
  const discountedSubtotal = subtotal - discountAmt;
  const shipping           = checkoutShippingValue(discountedSubtotal);

  return {
    id:           createOrderId(),
    firstName:    String(fd.get('firstName') || '').trim(),
    lastName:     String(fd.get('lastName')  || '').trim(),
    email:        String(fd.get('email')     || '').trim(),
    phone:        String(fd.get('phone')     || '').trim(),
    address:      String(fd.get('address')   || '').trim(),
    city:         String(fd.get('city')      || '').trim(),
    country:      String(fd.get('country')   || '').trim(),
    notes:        String(fd.get('notes')     || '').trim(),
    status:       'New',
    source:       'storefront',
    items,
    subtotal,
    discountCode: promoCode,
    discountPct,
    discountAmt,
    shipping,
    total: discountedSubtotal + shipping,   // ← correct: subtotal - discount + shipping
    createdAt: Date.now()
  };
}

function setupOrderForm() {
  const form = qs('#orderForm');
  if (!form) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!state.cart.length) { goToCheckout(); return; }
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const successMessage = qs('#orderSuccess');
    const submitButton   = qs('#placeOrderButton');
    const originalText   = submitButton?.textContent || 'Place Order';

    if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Placing Order…'; }

    const order = buildOrderFromForm(form);

    const firestoreId = await saveOrderToFirestore(order);
    _persistOrderLocally(order);

    state.cart = [];
    saveCart();

    if (successMessage) {
      successMessage.hidden = false;
      successMessage.innerHTML = `<strong>Order placed successfully.</strong><p>Order <span class="mono">${order.id}</span> has been sent to the Se7en team and is ready for processing.</p>`;
    }

    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (submitButton) {
      submitButton.textContent = 'Order Placed ✓';
      setTimeout(() => { submitButton.disabled = false; submitButton.textContent = originalText; }, 2200);
    }
  });
}

// ─── Three.js helpers ─────────────────────────────────────────────────────────
function createRenderer(canvas, alpha = true) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  return renderer;
}

function addStudioLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  const key     = new THREE.DirectionalLight(0xffffff, 1.8);
  key.position.set(3, 5, 5);
  const rim = new THREE.DirectionalLight(0xffffff, 1.1);
  rim.position.set(-4, 3, -4);
  scene.add(ambient, key, rim);
}

function buildGarment(type = 'hoodie', colorHex = 0xf2f2f2) {
  const group    = new THREE.Group();
  const mat      = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.48, metalness: 0.1 });
  const darkTrim = new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 0.74, metalness: 0.08 });
  const coloredMeshes = [];

  if (type === 'cap') {
    const crown = new THREE.Mesh(new THREE.SphereGeometry(1.4, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2), mat);
    crown.scale.set(1.2, 0.8, 1);
    coloredMeshes.push(crown);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 1.25, 0.26, 48), darkTrim);
    brim.rotation.z = Math.PI / 2.4;
    brim.position.set(1.1, -0.28, 0.1);
    group.add(crown, brim);
    group.scale.setScalar(1.1);
    window._garmentMeshes = coloredMeshes;
    return group;
  }

  if (type === 'bag') {
    const body   = new THREE.Mesh(new THREE.BoxGeometry(2.7, 3.2, 1), mat);
    coloredMeshes.push(body);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.12, 24, 48, Math.PI), darkTrim);
    handle.rotation.z = Math.PI;
    handle.position.set(0, 1.62, 0);
    group.add(body, handle);
    window._garmentMeshes = coloredMeshes;
    return group;
  }

  const body        = new THREE.Mesh(new THREE.BoxGeometry(2.8, type === 'hoodie' ? 3.5 : 3.2, 1.15), mat);
  const leftSleeve  = new THREE.Mesh(new THREE.BoxGeometry(1.05, 2.9, 1), mat.clone());
  const rightSleeve = leftSleeve.clone();
  coloredMeshes.push(body, leftSleeve, rightSleeve);
  leftSleeve.position.set(-2.02, 0.15, 0);
  rightSleeve.position.set(2.02, 0.15, 0);
  leftSleeve.rotation.z  =  Math.PI / 6.5;
  rightSleeve.rotation.z = -Math.PI / 6.5;
  group.add(body, leftSleeve, rightSleeve);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.12, 18, 40, Math.PI * 2), darkTrim);
  collar.rotation.x = Math.PI / 2;
  collar.position.set(0, 1.7, 0.12);
  group.add(collar);

  if (type === 'hoodie') {
    const hoodMat = mat.clone();
    const hood = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.36, 20, 48, Math.PI), hoodMat);
    coloredMeshes.push(hood);
    hood.position.set(0, 1.85, -0.05);
    hood.rotation.x = Math.PI / 2;
    hood.rotation.z = Math.PI;
    const pocket = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.75, 0.1), darkTrim);
    pocket.position.set(0, -0.82, 0.6);
    group.add(hood, pocket);
  }

  window._garmentMeshes = coloredMeshes;
  return group;
}

function runHeroScene() {
  const canvas = qs('#heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.4, 11);
  const renderer = createRenderer(canvas, true);
  addStudioLights(scene);

  const garment = buildGarment('hoodie');
  garment.rotation.set(-0.18, 0.7, 0.08);
  scene.add(garment);

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.03, 12, 120),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 })
  );
  halo.rotation.x = Math.PI / 2.6;
  scene.add(halo);

  const backdrop = new THREE.Mesh(
    new THREE.SphereGeometry(7, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.04 })
  );
  backdrop.scale.set(1.2, 0.68, 1.1);
  scene.add(backdrop);

  const pointer = { x: 0, y: 0 };
  canvas.addEventListener('pointermove', e => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  const resize = () => {
    const parent = canvas.parentElement;
    renderer.setSize(parent.clientWidth, parent.clientHeight, false);
    camera.aspect = parent.clientWidth / parent.clientHeight;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  (function tick() {
    const t = clock.getElapsedTime();
    garment.position.y  = Math.sin(t * 1.4) * 0.28;
    garment.rotation.y += 0.0032;
    garment.rotation.x  = -0.18 + pointer.y * 0.16;
    garment.rotation.z  =  0.08 + pointer.x * 0.12;
    halo.rotation.z     = t * 0.4;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  })();
}

function runProductScene() {
  const canvas = qs('#productCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const product   = PRODUCTS[state.activeProductId || 'tshirt-box-1'];
  const initColor = (product.colors ? product.colors[0].threehex : 0xf2f2f2);

  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0.3, 12);
  const renderer = createRenderer(canvas, true);
  addStudioLights(scene);

  const garment = buildGarment(product.type, initColor);
  garment.rotation.set(-0.15, 0.6, 0.08);
  if (product.type === 'cap') garment.scale.setScalar(1.5);
  if (product.type === 'bag') garment.scale.setScalar(1.15);
  scene.add(garment);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(4.6, 80),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.8;
  scene.add(floor);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3, 0.03, 8, 100),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.24 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -0.5;
  scene.add(ring);

  let targetRotationY = garment.rotation.y;
  canvas.addEventListener('pointermove', event => {
    const rect = canvas.getBoundingClientRect();
    targetRotationY = 0.25 + (event.clientX - rect.left) / rect.width * 1.5;
  });

  const resize = () => {
    const stage = canvas.parentElement;
    renderer.setSize(stage.clientWidth - 36, stage.clientHeight - 36, false);
    camera.aspect = (stage.clientWidth - 36) / (stage.clientHeight - 36);
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  (function animate() {
    const t = clock.getElapsedTime();
    garment.position.y  = Math.sin(t * 1.25) * 0.12;
    garment.rotation.y += (targetRotationY - garment.rotation.y) * 0.05;
    ring.rotation.z     = t * 0.32;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
function init() {
  renderCart();
  setupNavigation();
  setupRevealAnimations();
  setupParallax();
  setupPageTransitions();
  setupTiltEffects();
  setupFilters();
  setupAddToCartButtons();
  setupSizeSelector();
  setupContactForm();
  hydrateProductPage();
  renderCheckoutSummary();
  setupOrderForm();
  runHeroScene();
  runProductScene();
  if (document.body.dataset.page === 'checkout') initFirestore().catch(() => {});
}

document.addEventListener('DOMContentLoaded', init);