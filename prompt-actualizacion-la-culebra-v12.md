# Prompt de Actualización de Confianza y Compartido: Favicon y Metadatos Open Graph (v12)

**Instrucciones para el Agente (Antigravity / Cursor / Windsurf):**
Actúa como un Desarrollador Frontend Senior. Tu tarea es realizar una **actualización incremental** en `index.html` y `catalogo.html` para incorporar elementos de confianza visual indispensables antes del lanzamiento: el **Favicon** (icono para Google y pestañas del navegador) y los **Metadatos Open Graph (OG)** para que cuando se comparta el enlace por WhatsApp u otras redes, aparezca una tarjeta interactiva con el logo de la empresa, título personalizado y descripción.

**⚠️ REGLAS DE REFACTORIZACIÓN:**
1. **NO alteres la base de datos de productos**, la lógica del carrito, los filtros, ni el diseño Tailwind CSS que ya están funcionando.
2. Esta es una edición exclusiva dentro de la sección `<head>` de ambos archivos (`index.html` y `catalogo.html`).

---

## 🛠️ PASO 1: Agregar el Favicon (Confianza en Google y Navegadores)

Inserta las siguientes líneas dentro del `<head>` de **ambos archivos** (`index.html` y `catalogo.html`), justo debajo de `<meta charset="UTF-8">`:

```html
<!-- Favicon Oficial (Aparece en las pestañas del navegador y en los resultados de Google Search) -->
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="shortcut icon" href="favicon.ico">
```

*Nota para el desarrollador: Indica al usuario que coloque estos archivos de imagen de su logotipo en la raíz del proyecto.*

---

## 📱 PASO 2: Metadatos Open Graph y SEO para Compartir por WhatsApp

Agrega las etiquetas meta optimizadas dentro de la cabecera `<head>` de **ambos archivos**. Configúralas de la siguiente manera para que al pegar el enlace en WhatsApp se previsualice una hermosa imagen del negocio:

### En `index.html`:
```html
<!-- SEO Principal -->
<title>Frutícola La Culebra | Mayorista del Mercado de Coche, Caracas</title>
<meta name="description" content="Distribución mayorista de aguacates, frutas, verduras y aliños en Caracas directo desde el Mercado de Coche. Cestas, sacos y kilos al mejor precio del día.">

<!-- Metadatos de Redes Sociales (Open Graph - WhatsApp, Facebook, etc.) -->
<meta property="og:type" content="website">
<meta property="og:title" content="Frutícola La Culebra 🥑 | Mayoristas de Confianza en Coche">
<meta property="og:description" content="Arma tu cotización de frutas, hortalizas y aliños al mayor desde nuestra web y recíbela en tu negocio en Caracas.">
<meta property="og:image" content="https://tu-usuario.github.io/fruticola-la-culebra/logo-compartir.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">
<meta property="og:url" content="https://tu-usuario.github.io/fruticola-la-culebra/">
<meta property="og:site_name" content="Frutícola La Culebra">
```

### En `catalogo.html`:
```html
<!-- SEO Principal -->
<title>Catálogo Mayorista | Frutícola La Culebra</title>
<meta name="description" content="Explora nuestro catálogo extenso de frutas, hortalizas, verduras y aliños frescos al mayor. Selecciona tus cestas o kilos y cotiza directo por WhatsApp.">

<!-- Metadatos de Redes Sociales (Open Graph - WhatsApp, Facebook, etc.) -->
<meta property="og:type" content="website">
<meta property="og:title" content="Catálogo Mayorista 📦 | Frutícola La Culebra">
<meta property="og:description" content="Selecciona tus aguacates, limones, papas y aliños. Genera tu pedido mayorista rápido con nuestro cotizador digital.">
<meta property="og:image" content="https://tu-usuario.github.io/fruticola-la-culebra/logo-compartir.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">
<meta property="og:url" content="https://tu-usuario.github.io/fruticola-la-culebra/catalogo.html">
<meta property="og:site_name" content="Frutícola La Culebra">
```

---

## 🚀 EJECUCIÓN:
Aplica estas etiquetas meta en la cabecera `<head>` de `index.html` y `catalogo.html`. Asegúrate de que el enlace de `og:image` coincida exactamente con la URL que el usuario tendrá en GitHub Pages una vez configurada, garantizando que WhatsApp jale el archivo `logo-compartir.png` correctamente.
