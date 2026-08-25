// --- Datos de Negocio ---
const catálogoProductos = [
    // === 1. PRODUCTOS ESTRELLA / DESTACADOS (Con foto) ===
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
    { id: 'aguacate-grande', name: 'Aguacate', img: 'assets/images/aguacate.jpg' },
    { id: 'limon', name: 'Limón', img: 'assets/images/limon.webp' },
    { id: 'lechoza', name: 'Lechoza', img: 'assets/images/lechoza.jpg' },
    { id: 'coco', name: 'Coco', img: 'assets/images/coco.jfif' },
    { id: 'melon', name: 'Melón', img: 'assets/images/melon.jpg' },
    { id: 'patilla', name: 'Patilla', img: 'assets/images/patilla.jpg' }
];

let cart = JSON.parse(localStorage.getItem('culebra_cart')) || [];

// --- Elementos del DOM ---
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

// --- Inicialización ---
function init() {
    renderCarousel();
    renderFeaturedProducts();
    filterProducts();
    updateCartUI();
    setupEventListeners();
}

// --- Renderizado ---
function renderCarousel() {
    if (!carouselTrack) return;
    // Duplicamos el arreglo para el efecto infinito
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

function renderFeaturedProducts() {
    if (!featuredGrid) return;
    const featured = catálogoProductos.filter(p => p.destacado);
    featuredGrid.innerHTML = featured.map(product => `
        <div id="card-${product.id}" class="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
            <div class="relative h-48 overflow-hidden">
                <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur text-fresh-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ${product.categoria}
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight">${product.nombre}</h3>
                <div class="mt-auto flex items-center justify-between gap-2 mb-4">
                    <div class="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-fresh-green transition">
                        <button type="button" onclick="decrementQty('qty-${product.id}')" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-r transition">-</button>
                        <input type="number" min="1" value="1" id="qty-${product.id}" class="w-12 px-1 py-1.5 text-center font-bold text-gray-700 focus:outline-none bg-transparent text-sm">
                        <button type="button" onclick="incrementQty('qty-${product.id}')" class="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-l transition">+</button>
                    </div>
                    <span class="text-gray-500 font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">${product.unidad}</span>
                </div>
                <button type="button" onclick="addToCart('${product.id}')" class="w-full bg-avocado-deep hover:bg-green-800 text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm">
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
            <li class="p-8 text-center text-gray-500">
                <span class="text-3xl mb-2 block">🔍</span>
                No encontramos rubros con esa búsqueda.
            </li>`;
        return;
    }

    generalList.innerHTML = items.map(product => `
        <li id="card-list-${product.id}" class="p-4 sm:px-6 hover:bg-gray-50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4 flex-1">
                <span class="text-3xl">${product.emoji || '📦'}</span>
                <div>
                    <h4 class="font-bold text-gray-800 text-lg">${product.nombre}</h4>
                    <span class="text-xs font-semibold text-fresh-green uppercase tracking-wider bg-green-50 px-2 py-1 rounded-md">${product.categoria}</span>
                </div>
            </div>
            <div class="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                <span class="text-gray-500 font-bold text-sm w-16 text-right">${product.unidad}</span>
                <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button type="button" onclick="decrementQty('qty-${product.id}')" class="px-2.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-r">-</button>
                    <input type="number" min="1" value="1" id="qty-${product.id}" class="w-12 px-1 py-1.5 text-center font-bold text-gray-700 focus:outline-none">
                    <button type="button" onclick="incrementQty('qty-${product.id}')" class="px-2.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-l">+</button>
                </div>
                <button type="button" onclick="addToCart('${product.id}')" class="bg-fresh-green hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition shadow-sm whitespace-nowrap">
                    <span id="btn-text-${product.id}">Añadir</span>
                </button>
            </div>
        </li>
    `).join('');
}

// --- Filtros y Búsqueda ---
function filterProducts() {
    const activeTab = document.querySelector('.tab-btn.active')?.dataset.category || 'all';
    const searchTerm = searchInput.value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();

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

// --- Event Listeners ---
function setupEventListeners() {
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

    searchInput.addEventListener('input', filterProducts);

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    whatsappBtn.addEventListener('click', checkoutToWhatsApp);
}

// --- Utilidades de Interfaz ---
window.irAlProducto = function(productId) {
    const product = catálogoProductos.find(p => p.id === productId);
    if (!product) return;

    const featuredCard = document.getElementById(`card-${productId}`);
    if (featuredCard) {
        featuredCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        featuredCard.classList.add('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
        setTimeout(() => {
            featuredCard.classList.remove('ring-4', 'ring-green-500', 'animate-pulse', 'scale-105', 'z-10', 'relative');
        }, 1500);
        return;
    }

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
};

window.incrementQty = function (inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

window.decrementQty = function (inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// --- Lógica del Carrito ---
window.addToCart = function (productId) {
    const product = catálogoProductos.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const qty = parseInt(qtyInput.value) || 1;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }

    saveCart();
    updateCartUI();

    // Feedback visual en el botón
    const btnText = document.getElementById(`btn-text-${productId}`);
    const btn = btnText.parentElement;

    const originalText = btnText.innerText;
    btnText.innerText = '¡Añadido! ✅';
    btn.classList.add('bg-fresh-green');
    btn.classList.remove('bg-avocado-deep');

    setTimeout(() => {
        btnText.innerText = originalText;
        btn.classList.remove('bg-fresh-green');
        btn.classList.add('bg-avocado-deep');
        qtyInput.value = 1; // Resetear input
    }, 1500);

    // Animación del contador
    cartCount.classList.add('scale-150', 'text-white', 'bg-avocado-deep');
    setTimeout(() => {
        cartCount.classList.remove('scale-150', 'text-white', 'bg-avocado-deep');
    }, 300);
}

window.removeFromCart = function (productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

window.updateCartItemQty = function (productId, newQty) {
    if (newQty < 1) return;
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
    // Actualizar cantidad total de items
    const totalItems = cart.reduce((sum, item) => sum + 1, 0); // O sum + item.qty si queremos total de unidades
    cartCount.innerText = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center">
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
                    <button onclick="updateCartItemQty('${item.id}', ${item.qty - 1})" class="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200 text-gray-600 transition">-</button>
                    <span class="w-10 text-center font-bold text-avocado-deep">${item.qty}</span>
                    <button onclick="updateCartItemQty('${item.id}', ${item.qty + 1})" class="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200 text-gray-600 transition">+</button>
                    <span class="text-gray-400 text-xs ml-2 uppercase font-bold tracking-wider">${item.unidad}</span>
                </div>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition ml-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>
    `).join('');
}

function openCart() {
    cartDrawer.classList.remove('invisible');
    setTimeout(() => {
        cartOverlay.classList.remove('opacity-0');
        cartPanel.classList.remove('translate-x-full');
    }, 10);
}

function closeCart() {
    cartOverlay.classList.add('opacity-0');
    cartPanel.classList.add('translate-x-full');
    setTimeout(() => {
        cartDrawer.classList.add('invisible');
    }, 300);
}

// --- WhatsApp API Integración ---
function checkoutToWhatsApp() {
    if (cart.length === 0) {
        alert("¡Tu lista de cotización está vacía! Añade algunos rubros primero.");
        closeCart();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const phone = "584241576083";

    const lineasProductos = cart.map(item => {
        const emoji = item.emoji || '📦';
        return `• ${emoji} *${item.qty} ${item.unidad}* x ${item.nombre}`;
    }).join('\n');

    let detalleNota = '';
    const note = specialRequest.value.trim();
    if (note) {
        detalleNota = `\n\n📝 *Mercancía Especial o No Listada:*\n_${note}_`;
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

// Arrancar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
