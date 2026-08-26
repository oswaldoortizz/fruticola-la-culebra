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
    os.makedirs("assets", exist_ok=True)
    img.save("assets/favicon.ico", format="ICO")
    print("✅ assets/favicon.ico generado con éxito.")

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
    os.makedirs("assets", exist_ok=True)
    img.save("assets/logo-compartir.png", format="PNG")
    print("✅ assets/logo-compartir.png generado con éxito.")

if __name__ == "__main__":
    crear_favicon()
    crear_banner_compartir()
