# Prompt de Optimización y Lanzamiento: Frutícola La Culebra (v11)

**Instrucciones para el Agente (Antigravity / Cursor / Windsurf):**
Actúa como un Desarrollador Frontend Senior experto en optimización de rendimiento, experiencia de usuario (UX) y SEO local. Tu tarea es realizar la **fase de pulido final** de la web antes de lanzarla en GitHub Pages, basándote en las mejores prácticas de optimización, microcopy y control de errores.

**⚠️ REGLAS DE ORO:**
1. Realiza una **actualización incremental** directamente sobre los archivos existentes (`index.html`, `catalogo.html`, `app.js`).
2. **NO modifiques el diseño estético de Tailwind**, los textos de historia ni el funcionamiento de la base de datos de productos que ya acordamos.
3. El código debe quedar **completamente funcional** y libre de errores en consola.

---

## 🛠️ PASO 1: Optimización de Rendimiento y Carga Móvil (Inspirado en TikTok #4 y #12)
Para garantizar que la web cargue instantáneamente en el Mercado de Coche incluso con mala señal (3G/4G):
1.  **Lazy Loading**: En `index.html`, añade la propiedad `loading="lazy"` a las etiquetas `<img>` de los 5 productos estrella (Aguacates, Limón, Lechoza, Coco, Melón).
2.  **Optimización de Unsplash**: Asegúrate de que las URLs de Unsplash en la base de datos tengan los parámetros de compresión óptimos para celulares: `?auto=format&fit=crop&w=400&q=75` (esto reduce el tamaño de las imágenes de 2MB a menos de 50KB sin perder calidad visible).

---

## ✍️ PASO 2: Microcopy y Experiencia del Cliente en Caracas (Inspirado en TikTok #14)
Mejora los mensajes de interacción del buscador con un tono cercano y criollo:
1.  **Sin Resultados en el Buscador**: En `app.js`, modifica la función de filtrado del buscador. Si el cliente escribe un rubro que no está en la base de datos (por ejemplo, "manzana" o "brócoli"), en lugar de dejar la pantalla vacía o rota, muestra un recuadro limpio con este mensaje:
    > *"¡Epa! No encontramos ese producto en la lista... 😮 Pero no te preocupes, escríbelo en la caja de **'Pedido Especial'** de abajo y nosotros te lo resolvemos directo en el Mercado de Coche. 🐍"*

---

## 🛡️ PASO 3: Limpieza y Control de Errores en Consola (Inspirado en TikTok #9)
Elimina por completo las advertencias rojas y amarillas de la consola cuando se inspecciona la página:
1.  **Evitar Errores de Referencia Nula (Null)**: Ambas páginas (`index.html` y `catalogo.html`) leen el mismo archivo `app.js`. Asegúrate de que **CADA** selector o evento en JavaScript esté envuelto en una comprobación de existencia. 
    *   *Ejemplo:* No ejecutes `buscador.addEventListener(...)` de forma directa. Hazlo así:
        ```javascript
        const buscador = document.getElementById('buscador');
        if (buscador) {
            buscador.addEventListener('input', (e) => { ... });
        }
        ```
    *   Aplica esto para el carrusel, el buscador, el botón de WhatsApp, las pestañas de categorías y el botón de vaciar carrito.

---

## 🧭 PASO 4: Corrección de Categoría "Aliños" (v10 hotfix)
*   Asegúrate de que en la pantalla de la web aparezca la palabra **"Aliños"** de forma impecable (con mayúscula inicial y letra "ñ") en lugar de `"alinos"`. La base de datos puede mantener la clave interna `"alinos"` por razones técnicas de JavaScript, pero la vista al público siempre debe renderizar `"Aliños"`.

---

## 🚀 EJECUCIÓN:
Aplica estas mejoras una a una en los archivos del espacio de trabajo. Hazlo de forma limpia, preservando la lógica de carrito, fletes y persistencia a través de `localStorage` que ya está implementada y funcionando.
