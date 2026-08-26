# Prompt de Generación de Assets y Corrección de Rutas (v13)

**Instrucciones para el Agente (Antigravity / Cursor / Windsurf):**
Actúa como un Desarrollador Frontend y Diseñador de UI/UX Senior. Tu cliente necesita generar físicamente los archivos de imagen para el **Favicon** (`favicon.ico`) y el **Banner de Compartido en WhatsApp** (`logo-compartir.png`) directamente en la carpeta local, y luego corregir la configuración del `<head>` de `index.html` y `catalogo.html` para asegurar que las rutas relativas funcionen de manera impecable en **GitHub Pages**.

Sigue estrictamente estos dos pasos:

---

## 🐍 PASO 1: Script de Autogeneración de Imágenes (Python + Pillow)

Para evitar que el cliente tenga que buscar o descargar imágenes de internet, **escribe y ejecuta de forma automática un script de Python llamado `generar_assets.py`** en la carpeta del proyecto. 

Este script utilizará la librería estándar `Pillow` (PIL) para dibujar programáticamente un aguacate minimalista moderno y de alta calidad para el favicon, y un banner elegante con fondo verde oliva y tipografía limpia para compartir en redes.

### 📄 Código de `generar_assets.py` a ejecutar:

```python
import os
from PIL import Image, ImageDraw

def crear_favicon():
    # Crear un lienzo transparente de 32x32 píxeles
    img = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Dibujar cuerpo exterior del aguacate (Verde Oscuro #1b3d21)
    draw.ellipse([4, 10, 28, 30], fill=(27, 61, 33, 255)) # Base ancha
    draw.ellipse([8, 2, 24, 18], fill=(27, 61, 33, 255))  # Parte superior
    
    # Dibujar pulpa interior (Verde Claro / Lima #a4d45c)
    draw.ellipse([6, 11, 26, 28], fill=(164, 212, 92, 255))
    draw.ellipse([9, 4, 23, 17], fill=(164, 212, 92, 255))
    
    # Dibujar la semilla / hueso en el centro (Marrón #603a1a)
    draw.ellipse([11, 15, 21, 25], fill=(96, 58, 26, 255))
    
    # Guardar como ICO oficial
    img.save("favicon.ico", format="ICO")
    print("✅ favicon.ico generado con éxito.")

def crear_banner_compartir():
    # Crear un lienzo de 1200x630 píxeles para WhatsApp (Verde Bosque Elegante #142a17)
    img = Image.new("RGBA", (1200, 630), (20, 42, 23, 255))
    draw = ImageDraw.Draw(img)
    
    # 1. Dibujar un Aguacate gigante y estilizado en el lado izquierdo (centrado verticalmente)
    # Escala x15 respecto al favicon
    offset_x = 150
    offset_y = 115
    
    # Cuerpo exterior (Verde Oscuro)
    draw.ellipse([offset_x + 30, offset_y + 120, offset_x + 330, offset_y + 420], fill=(27, 61, 33, 255)) # Base
    draw.ellipse([offset_x + 80, offset_y + 20, offset_x + 280, offset_y + 240], fill=(27, 61, 33, 255))  # Tope
    
    # Pulpa interior (Verde Claro)
    draw.ellipse([offset_x + 50, offset_y + 130, offset_x + 310, offset_y + 400], fill=(164, 212, 92, 255))
    draw.ellipse([offset_x + 95, offset_y + 40, offset_x + 265, offset_y + 220], fill=(164, 212, 92, 255))
    
    # Semilla (Marrón con un sutil brillo)
    draw.ellipse([offset_x + 120, offset_y + 180, offset_x + 240, offset_y + 300], fill=(96, 58, 26, 255))
    draw.ellipse([offset_x + 140, offset_y + 200, offset_x + 170, offset_y + 230], fill=(140, 90, 45, 255)) # Brillo
    
    # 2. Dibujar formas orgánicas decorativas en el fondo (Hojas abstractas verdes)
    draw.chord([800, -100, 1300, 400], start=0, end=360, fill=(28, 56, 31, 100))
    draw.chord([950, 300, 1400, 750], start=0, end=360, fill=(35, 75, 40, 100))

    # Guardar imagen de compartido en WhatsApp
    img.save("logo-compartir.png", format="PNG")
    print("✅ logo-compartir.png generado con éxito.")

if __name__ == "__main__":
    crear_favicon()
    crear_banner_compartir()
```

*Nota para el agente: Ejecuta el script usando `python3 generar_assets.py` directamente en la terminal integrada para crear físicamente ambos archivos.*

---

## 🌐 PASO 2: Corrección de Rutas del `<head>` para GitHub Pages

Modifica el encabezado `<head>` de tus archivos **`index.html`** y **`catalogo.html`**. Asegúrate de **eliminar cualquier barra diagonal `/` al principio de las rutas de tus assets**. Esto garantiza que GitHub Pages busque los archivos de forma relativa a la subcarpeta del repositorio y no en el dominio raíz.

### 🔴 Cambios a aplicar en ambos archivos HTML:

```html
<!-- CORREGIDO: Sin barra inclinada al principio (Rutado Relativo) -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

<!-- Etiquetas Open Graph para la vista previa de WhatsApp corregidas -->
<meta property="og:title" content="Frutícola La Culebra 🥑 | Mayoristas de Confianza en Coche">
<meta property="og:description" content="Arma tu cotización de aguacates, frutas, hortalizas y aliños al mayor desde nuestra web. Directo del Sector Playa Tercero a tu negocio.">
<meta property="og:image" content="logo-compartir.png"> <!-- CORREGIDO: Ruta relativa directa -->
<meta property="og:type" content="website">
```

---

## 🚀 EJECUCIÓN:
1. Crea, guarda y ejecuta el archivo `generar_assets.py` en tu terminal local.
2. Una vez generados `favicon.ico` and `logo-compartir.png`, edita de forma incremental el `<head>` de `index.html` y `catalogo.html` asegurándote de usar rutas relativas.
3. Elimina el script `generar_assets.py` una vez finalizado o déjalo en el repositorio.
4. Confirma al usuario cuando esté listo para que haga el Push final a GitHub.
