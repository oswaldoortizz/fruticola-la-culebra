# Prompt de Corrección de Usabilidad y Textos (v10) - Frutícola La Culebra

**Instrucciones para el Agente (Antigravity):**
Por favor, realiza una **actualización incremental ultra-precisa** en nuestros archivos `index.html`, `catalogo.html` y `app.js` para corregir dos detalles importantes de diseño y texto que el usuario ha reportado. No rehagas la estructura completa ni alteres el diseño responsivo de las secciones que ya funcionan bien.

---

### 🛠️ 1. Ajuste del Botón "Inicio" en `catalogo.html`
*   **Problema:** El botón de volver al inicio se colocó dentro del Header (cabecera), lo que daña la estética de la navegación y se ve desordenado. Además, tiene un icono de casa que no se ve limpio.
*   **Solución:**
    *   **Remueve por completo** el enlace/botón de "Inicio" del Header de `catalogo.html`.
    *   **Colócalo justo debajo del Header**, al comienzo del contenido principal (`<main>`), como una barra de navegación secundaria o "breadcrumb" (miga de pan) limpia y sutil.
    *   **Formato visual:** Debe ser un enlace de texto discreto, sin emojis ni iconos de casa. Debe decir simplemente: **"Inicio"** o **"Volver al Inicio"** (por ejemplo, con clases de Tailwind como: `text-sm text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center mb-4 transition-colors`).

---

### 🏷️ 2. Corrección ortográfica de la categoría "Aliños"
*   **Problema:** En el listado de productos de la hoja de pedido, al lado de productos como el ají (u otros de esa categoría), la etiqueta de la categoría se muestra como "alinos" (en minúscula y sin la letra eñe), lo cual se ve poco profesional.
*   **Solución:**
    *   En la función de renderizado de tu `app.js` (donde se dibuja cada fila de producto en la tabla/lista), asegúrate de mapear o traducir los nombres internos de las categorías a sus nombres estéticos antes de mostrarlos en pantalla.
    *   Si la categoría del producto es `'alinos'` o `'aliños'`, el texto visual de la etiqueta/badge debe decir estrictamente: **"Aliños"** (con "A" mayúscula y con la letra "ñ").
    *   Asegúrate de que este mapeo visual se aplique a todos los productos de esta categoría (ají, cebollín, cilantro, perejil, ajo porro, ajo criollo, pimentón).

---

### 🚀 EJECUCIÓN:
Aplica estos cambios directamente sobre tus archivos locales. Asegúrate de guardar los archivos en codificación UTF-8 para que la eñe ("ñ") y los acentos se rendericen de forma impecable en todos los navegadores y teléfonos. ¡No toques el resto del diseño del carrito ni el carrusel!
