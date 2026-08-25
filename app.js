// ==========================================
// FRUTÍCOLA LA CULEBRA - MERCADO DE COCHE
// Base de Datos y Lógica del Catálogo Mayorista (v7)
// ==========================================

// --- 1. Base de Datos Oficial (v8) ---
const catálogoProductos = [
    // === 1. PRODUCTOS ESTRELLA / DESTACADOS ===
    { id: 'aguacate-grande', nombre: 'aguacate (Grande)', categoria: 'aguacates', unidad: 'Cestas', destacado: true, emoji: '🥑', imagen: 'assets/images/aguacate.jpg' },
    { id: 'aguacate-mediano', nombre: 'aguacate (Mediano)', categoria: 'aguacates', unidad: 'Cestas', destacado: true, emoji: '🥑', imagen: 'assets/images/aguacate.jpg' },
    { id: 'aguacate-pequeno', nombre: 'aguacate (Pequeño)', categoria: 'aguacates', unidad: 'Cestas', destacado: true, emoji: '🥑', imagen: 'assets/images/aguacate.jpg' },
    { id: 'limon', nombre: 'limon', categoria: 'frutas', destacado: true, unidad: 'Cestas', emoji: '🍋', imagen: 'assets/images/limon.webp' },
    { id: 'lechoza', nombre: 'lechoza', categoria: 'frutas', destacado: true, unidad: 'Kilos', emoji: '🍐', imagen: 'assets/images/lechoza.jpg' },
    { id: 'coco', nombre: 'coco', categoria: 'frutas', destacado: true, unidad: 'Cestas', emoji: '🥥', imagen: 'assets/images/coco.jfif' },
    { id: 'melon', nombre: 'melon', categoria: 'frutas', destacado: true, unidad: 'Kilos', emoji: '🍈', imagen: 'assets/images/melon.jpg' },

    // === 2. CATÁLOGO GENERAL EXTENSO ===
    // Categoría: Frutas (Pestaña "Frutas 🍎")
    { id: 'patilla', nombre: 'patilla', categoria: 'frutas', destacado: false, unidad: 'Kilos', emoji: '🍉', imagen: 'assets/images/patilla.jpg' },
    { id: 'cambur', nombre: 'cambur', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🍌' },
    { id: 'pina', nombre: 'piña', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🍍' },
    { id: 'naranja', nombre: 'naranja', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🍊', imagen: 'assets/images/naranja.jpg' },
    { id: 'mandarina', nombre: 'mandarina', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🍊', imagen: 'assets/images/mandarina.jfif' },
    { id: 'mango', nombre: 'mango', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🥭' },
    { id: 'durazno', nombre: 'durazno', categoria: 'frutas', destacado: false, unidad: 'Cestas', emoji: '🍑', imagen: 'assets/images/Duraznos.jpg' },
    { id: 'parchita', nombre: 'parchita', categoria: 'frutas', destacado: false, unidad: 'Kilos', emoji: '🟡' },

    // Categoría: Aliños (Pestaña "Aliños 🌿")
    { id: 'aji', nombre: 'aji', categoria: 'alinos', destacado: false, unidad: 'Kilos', emoji: '🌶️' },
    { id: 'cebollin', nombre: 'cebollin', categoria: 'alinos', destacado: false, unidad: 'Atados', emoji: '🌱' },
    { id: 'cilantro', nombre: 'cilantro', categoria: 'alinos', destacado: false, unidad: 'Atados', emoji: '🌿' },
    { id: 'perejil', nombre: 'perejil', categoria: 'alinos', destacado: false, unidad: 'Atados', emoji: '🍃' },
    { id: 'ajo-porro', nombre: 'ajo porro', categoria: 'alinos', destacado: false, unidad: 'Atados', emoji: '🥬' },
    { id: 'ajo-criollo', nombre: 'ajo criollo', categoria: 'alinos', destacado: false, unidad: 'Kilos', emoji: '🧄' },
    { id: 'pimenton', nombre: 'pimenton', categoria: 'alinos', destacado: false, unidad: 'Kilos', emoji: '🫑' },

    // Categoría: Verduras y Hortalizas (Pestaña "Verduras 🥔")
    { id: 'papa', nombre: 'papa', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🥔' },
    { id: 'zanahoria', nombre: 'zanahoria', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🥕' },
    { id: 'yuca', nombre: 'yuca', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🪵' },
    { id: 'ocumo-chino', nombre: 'ocumo chino', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🤎' },
    { id: 'name', nombre: 'ñame', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🍠' },
    { id: 'auyama', nombre: 'auyama', categoria: 'verduras', destacado: false, unidad: 'Kilos', emoji: '🎃' },
    { id: 'repollo', nombre: 'repollo', categoria: 'verduras', destacado: false, unidad: 'Sacos', emoji: '🥬' },
    { id: 'tomate', nombre: 'tomate', categoria: 'verduras', destacado: false, unidad: 'Cestas', emoji: '🍅' }
];

const carouselItems = [
    { id: 'aguacate-grande', name: 'aguacate', img: 'assets/images/aguacate.jpg' },
    { id: 'limon', name: 'limon', img: 'assets/images/limon.webp' },
    { id: 'lechoza', name: 'lechoza', img: 'assets/images/lechoza.jpg' },
    { id: 'coco', name: 'coco', img: 'assets/images/coco.jfif' },
    { id: 'melon', name: 'melon', img: 'assets/images/melon.jpg' },
    { id: 'patilla', name: 'patilla', img: 'assets/images/patilla.jpg' }
];

// --- 2. Persistencia Compartida del Carrito (localStorage) ---
let cart = JSON.parse(localStorage.getItem('culebra_cart')) || [];

// --- 3. Referencias al DOM ---
const featuredGrid = document.getElementById('featured-products-grid');
const generalList = document.getElementById('general-products-list');
const carouselTrack = document.getElementById('carousel-track');
const tabs = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('search-input');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartPanel = document.getElementById('cart-panel');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const whatsappBtn = document.getElementById('whatsapp-checkout-btn');
const specialRequest = document.getElementById('special-request');

// --- 4. Inicialización con Verificación Defensiva ---
function init() {
    if (carouselTrack) {
        renderCarousel();
    }
    if (featuredGrid) {
        renderFeaturedProducts();
    }
    if (generalList) {
        filterProducts();
    }
    updateCartUI();
    setupEventListeners();
    setupEventDelegation();
}

// --- 5. Renderizado de Componentes ---

function renderCarousel() {
    if (!carouselTrack) return;
    const items = [...carouselItems, ...carouselItems, ...carouselItems];
    carouselTrack.innerHTML = items.map(item => `
        <div onclick="irAlProducto('${item.id}')" class="w-72 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-md group cursor-pointer">
            <img src="${item.img}" alt="${item.name}" class="w-full h-56 object-cover group-hover:scale-110 transition duration-700 ease-in-out">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 class="text-white font-bold text-xl">${item.name}</h3>
            </div>
        </div>
    `).join('');
}

// --- Función de formateo estético de categorías ---
function getCategoryLabel(categoria) {
    const map = {
        'aguacates': 'Aguacates',
        'frutas': 'Frutas',
        'alinos': 'Aliños',
        'aliños': 'Aliños',
        'verduras': 'Verduras',
        'hortalizas': 'Hortalizas'
    };
    return map[categoria] || (categoria.charAt(0).toUpperCase() + categoria.slice(1));
}

function renderFeaturedProducts() {
    if (!featuredGrid) return;
    const featured = catálogoProductos.filter(p => p.destacado);
    featuredGrid.innerHTML = featured.map(product => `
        <div id="card-${product.id}" class="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
            <div class="relative h-48 overflow-hidden">
                <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur text-fresh-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ${getCategoryLabel(product.categoria)}
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight">${product.nombre}</h3>
                <div class="mt-auto flex items-center justify-between gap-2 mb-4">
                    <div class="qty-control-wrapper flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-fresh-green transition">
                        <button type="button" data-action="decrement" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-r transition">-</button>
                        <input type="number" min="1" value="1" id="qty-${product.id}" class="w-12 px-1 py-1.5 text-center font-bold text-gray-700 focus:outline-none bg-transparent text-sm">
                        <button type="button" data-action="increment" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-l transition">+</button>
                    </div>
                    <span class="text-gray-500 font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">${product.unidad}</span>
                </div>
                <button type="button" data-action="add-to-cart" data-id="${product.id}" class="w-full bg-avocado-deep hover:bg-green-800 text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm">
                    <span id="btn-text-${product.id}">Añadir a la lista</span>
                </button>
            </div>
        </div>
    `).join('');
}

function renderGeneralProducts(items) {
    if (!generalList) return;

    if (items.length === 0) {
        generalList.innerHTML = `
            <li class="p-12 text-center text-gray-500">
                <span class="text-4xl mb-3 block">🔍</span>
                <p class="text-lg font-medium">No encontramos rubros con esa búsqueda.</p>
                <p class="text-sm text-gray-400 mt-1">Escríbelo en la caja de notas del carrito y lo buscaremos por ti.</p>
            </li>`;
        return;
    }

    generalList.innerHTML = items.map(product => `
        <li id="card-list-${product.id}" class="p-4 sm:px-6 hover:bg-gray-50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4 flex-1">
                <span class="text-3xl flex-shrink-0">${product.emoji || '📦'}</span>
                <div>
                    <h4 class="font-bold text-gray-800 text-base sm:text-lg leading-tight">${product.nombre}</h4>
                    <span class="text-xs font-semibold text-fresh-green uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-md mt-1 inline-block">${getCategoryLabel(product.categoria)}</span>
                </div>
            </div>
            <div class="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                <span class="text-gray-500 font-bold text-sm min-w-[4.5rem] text-right">${product.unidad}</span>
                <div class="qty-control-wrapper flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button type="button" data-action="decrement" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-r">-</button>
                    <input type="number" min="1" value="1" id="qty-list-${product.id}" class="w-12 px-1 py-1.5 text-center font-bold text-gray-700 focus:outline-none text-sm">
                    <button type="button" data-action="increment" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-l">+</button>
                </div>
                <button type="button" data-action="add-to-cart" data-id="${product.id}" class="bg-fresh-green hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold transition shadow-sm whitespace-nowrap text-sm flex items-center gap-1">
                    <span id="btn-text-list-${product.id}">Añadir</span>
                </button>
            </div>
        </li>
    `).join('');
}

// --- 6. Filtros y Búsqueda Inteligente ---
function filterProducts() {
    if (!generalList) return;
    const activeTab = document.querySelector('.tab-btn.active')?.dataset.category || 'all';
    const searchTerm = searchInput ? searchInput.value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim() : '';

    const filtered = catálogoProductos.filter(p => {
        const matchCategory = activeTab === 'all' || p.categoria === activeTab;
        const normalizedName = p.nombre
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
        const matchSearch = normalizedName.includes(searchTerm) || p.categoria.includes(searchTerm);
        return matchCategory && matchSearch;
    });

    renderGeneralProducts(filtered);
}

// --- 7. Event Listeners y Delegación de Eventos ---

function setupEventListeners() {
    if (tabs && tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                tabs.forEach(t => {
                    t.classList.remove('active', 'bg-fresh-green', 'text-white', 'shadow-md');
                    t.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
                });
                const clicked = e.currentTarget;
                clicked.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
                clicked.classList.add('active', 'bg-fresh-green', 'text-white', 'shadow-md');
                filterProducts();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (whatsappBtn) whatsappBtn.addEventListener('click', checkoutToWhatsApp);
}

// Delegación global de eventos para evitar que los botones se queden sin listener al filtrar o buscar
function setupEventDelegation() {
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;

        const action = btn.getAttribute('data-action');
        const productId = btn.getAttribute('data-id');

        if (action === 'increment') {
            const container = btn.closest('.qty-control-wrapper');
            const input = container ? container.querySelector('input[type="number"]') : null;
            if (input) {
                input.value = (parseInt(input.value) || 1) + 1;
            }
        } else if (action === 'decrement') {
            const container = btn.closest('.qty-control-wrapper');
            const input = container ? container.querySelector('input[type="number"]') : null;
            if (input && parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        } else if (action === 'add-to-cart') {
            const card = btn.closest(`#card-${productId}`) || btn.closest(`#card-list-${productId}`);
            const input = card ? card.querySelector('input[type="number"]') : null;
            const qty = input ? (parseInt(input.value) || 1) : 1;
            addToCart(productId, qty, btn, input);
        } else if (action === 'cart-increment') {
            const item = cart.find(i => i.id === productId);
            if (item) updateCartItemQty(productId, item.qty + 1);
        } else if (action === 'cart-decrement') {
            const item = cart.find(i => i.id === productId);
            if (item) updateCartItemQty(productId, item.qty - 1);
        } else if (action === 'cart-remove') {
            removeFromCart(productId);
        }
    });
}

// --- 8. Lógica del Carrito ---

function addToCart(productId, qty = 1, triggerBtn = null, inputToReset = null) {
    const product = catálogoProductos.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }

    saveCart();
    updateCartUI();

    // Feedback visual en el botón
    const btn = triggerBtn || document.querySelector(`[data-action="add-to-cart"][data-id="${productId}"]`);
    if (btn) {
        const textSpan = btn.querySelector('span') || btn;
        const originalText = textSpan.innerText;
        textSpan.innerText = '¡Añadido! ✅';
        btn.classList.add('bg-fresh-green');
        btn.classList.remove('bg-avocado-deep');

        setTimeout(() => {
            if (textSpan) textSpan.innerText = originalText;
            if (btn) {
                btn.classList.remove('bg-fresh-green');
                btn.classList.add('bg-avocado-deep');
            }
            if (inputToReset) inputToReset.value = 1;
        }, 1500);
    }

    // Animación del contador del carrito
    if (cartCount) {
        cartCount.classList.add('scale-150', 'text-white', 'bg-avocado-deep');
        setTimeout(() => {
            if (cartCount) cartCount.classList.remove('scale-150', 'text-white', 'bg-avocado-deep');
        }, 300);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartItemQty(productId, newQty) {
    if (newQty < 1) {
        removeFromCart(productId);
        return;
    }
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty = newQty;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('culebra_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + 1, 0);
    if (cartCount) {
        cartCount.innerText = totalItems;
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center py-12">
                <span class="text-6xl mb-4 opacity-20">📝</span>
                <p class="text-gray-500 text-lg">Aún no has agregado rubros a tu lista.</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="bg-white p-4 rounded-xl shadow-sm mb-3 flex items-center justify-between border border-gray-100">
            <div class="flex-1">
                <h4 class="font-bold text-gray-800 leading-tight mb-2">${item.nombre}</h4>
                <div class="flex items-center gap-1">
                    <button type="button" data-action="cart-decrement" data-id="${item.id}" class="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200 text-gray-600 transition">-</button>
                    <span class="w-10 text-center font-bold text-avocado-deep">${item.qty}</span>
                    <button type="button" data-action="cart-increment" data-id="${item.id}" class="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200 text-gray-600 transition">+</button>
                    <span class="text-gray-400 text-xs ml-2 uppercase font-bold tracking-wider">${item.unidad}</span>
                </div>
            </div>
            <button type="button" data-action="cart-remove" data-id="${item.id}" class="text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition ml-3" title="Eliminar">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>
    `).join('');
}

function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('invisible');
    setTimeout(() => {
        if (cartOverlay) cartOverlay.classList.remove('opacity-0');
        if (cartPanel) cartPanel.classList.remove('translate-x-full');
    }, 10);
}

function closeCart() {
    if (!cartDrawer) return;
    if (cartOverlay) cartOverlay.classList.add('opacity-0');
    if (cartPanel) cartPanel.classList.add('translate-x-full');
    setTimeout(() => {
        if (cartDrawer) cartDrawer.classList.add('invisible');
    }, 300);
}

// --- 9. Integración con WhatsApp API (Estricto UTF-8 para PC y Móvil) ---
function checkoutToWhatsApp() {
    if (cart.length === 0) {
        alert("¡Tu lista de cotización está vacía! Añade algunos rubros primero.");
        closeCart();
        const catalogEl = document.getElementById('catalog') || document.getElementById('tabla-productos');
        if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const phone = "584241576083";

    const lineasProductos = cart.map(item => {
        const emoji = item.emoji || '📦';
        return `• ${emoji} *${item.qty} ${item.unidad}* x ${item.nombre}`;
    }).join('\n');

    let detalleNota = '';
    if (specialRequest && specialRequest.value.trim()) {
        detalleNota = `\n\n📝 *Mercancía Especial o No Listada:*\n_${specialRequest.value.trim()}_`;
    }

    const mensaje = `🥑 *SOLICITUD DE COTIZACIÓN - FRUTÍCOLA LA CULEBRA* 🥑
📍 *Mercado Mayor de Coche, Caracas*

📦 *Detalle del Pedido:*
${lineasProductos}${detalleNota}

📍 *Lugar de Despacho:* Caracas
¡Quedo atento a los precios y disponibilidad del día!`;

    const encoded = encodeURIComponent(mensaje);
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`, '_blank');
}

// Scroll interactivo para elementos del carrusel
window.irAlProducto = function(productId) {
    const product = catálogoProductos.find(p => p.id === productId);
    if (!product) return;

    // Si estamos en index.html y la tarjeta destacada está en pantalla
    const featuredCard = document.getElementById(`card-${productId}`);
    if (featuredCard) {
        featuredCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        featuredCard.classList.add('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
        setTimeout(() => {
            featuredCard.classList.remove('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
        }, 1500);
        return;
    }

    // Si estamos en catalogo.html o no está en la grilla destacada
    if (generalList) {
        const tabToClick = document.querySelector(`.tab-btn[data-category="${product.categoria}"]`) || document.querySelector('.tab-btn[data-category="all"]');
        if (tabToClick && !tabToClick.classList.contains('active')) {
            tabToClick.click();
        }

        setTimeout(() => {
            const card = document.getElementById(`card-list-${productId}`) || document.getElementById(`card-${productId}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
                setTimeout(() => {
                    card.classList.remove('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
                }, 1500);
            }
        }, 100);
    } else {
        // Redirigir a catalogo.html
        window.location.href = 'catalogo.html';
    }
};

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', init);
