import os
from PIL import Image, ImageDraw

def asegurar_carpeta_assets():
    if not os.path.exists("assets"):
        os.makedirs("assets")
        print("📁 Carpeta 'assets' creada.")

def crear_aguacate_base(size):
    # Crear un lienzo transparente de tamaño dinámico
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Escalar proporciones de acuerdo al tamaño solicitado
    scale = size / 32.0

    # 1. Cuerpo exterior (Verde Oscuro #1b3d21)
    draw.ellipse([4*scale, 10*scale, 28*scale, 30*scale], fill=(27, 61, 33, 255)) # Base
    draw.ellipse([8*scale, 2*scale, 24*scale, 18*scale], fill=(27, 61, 33, 255))  # Tope

    # 2. Pulpa interior (Verde Claro / Lima #a4d45c)
    draw.ellipse([6*scale, 11*scale, 26*scale, 28*scale], fill=(164, 212, 92, 255))
    draw.ellipse([9*scale, 4*scale, 23*scale, 17*scale], fill=(164, 212, 92, 255))

    # 3. Semilla / hueso (Marrón #603a1a)
    draw.ellipse([11*scale, 15*scale, 21*scale, 25*scale], fill=(96, 58, 26, 255))

    # Agregar un pequeño brillo a la semilla para mayor calidad en resoluciones altas
    if size >= 180:
        draw.ellipse([13*scale, 17*scale, 15.5*scale, 19.5*scale], fill=(140, 90, 45, 255))

    return img

def generar_todos_los_assets():
    asegurar_carpeta_assets()

    # 1. Favicon clásico para pestañas de PC (ico, 32x32)
    img_32 = crear_aguacate_base(32)
    img_32.save(os.path.join("assets", "favicon.ico"), format="ICO")
    img_32.save(os.path.join("assets", "favicon-32x32.png"), format="PNG")
    print("✅ favicon.ico y favicon-32x32.png guardados en assets/")

    # 2. Icono para celulares Android / Google Chrome (192x192 PNG)
    img_192 = crear_aguacate_base(192)
    img_192.save(os.path.join("assets", "android-chrome-192x192.png"), format="PNG")
    print("✅ android-chrome-192x192.png guardado en assets/")

    # 3. Icono para iPhone / Safari (180x180 PNG con fondo opaco)
    # Apple exige que la pantalla de inicio tenga un fondo sólido (usaremos verde bosque #142a17)
    apple_img = Image.new("RGBA", (180, 180), (20, 42, 23, 255))
    aguacate_for_apple = crear_aguacate_base(140) # Dibujamos un aguacate centrado
    apple_img.paste(aguacate_for_apple, (20, 20), aguacate_for_apple)
    apple_img.save(os.path.join("assets", "apple-touch-icon.png"), format="PNG")
    print("✅ apple-touch-icon.png guardado en assets/")

if __name__ == "__main__":
    generar_todos_los_assets()
