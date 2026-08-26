const fs = require('fs');
const zlib = require('zlib');

// Helper function to create a PNG buffer
function createPNG(width, height, getPixel) {
    const rawData = Buffer.alloc((width * 4 + 1) * height);
    let offset = 0;

    for (let y = 0; y < height; y++) {
        rawData[offset++] = 0; // Filter type 0 (None)
        for (let x = 0; x < width; x++) {
            const [r, g, b, a] = getPixel(x, y);
            rawData[offset++] = r;
            rawData[offset++] = g;
            rawData[offset++] = b;
            rawData[offset++] = a;
        }
    }

    const compressed = zlib.deflateSync(rawData);

    // PNG Signature
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    // Helper for CRC32
    function crc32(buf) {
        let c = 0xffffffff;
        for (let i = 0; i < buf.length; i++) {
            c = (c >>> 8) ^ table[(c ^ buf[i]) & 0xff];
        }
        return (c ^ 0xffffffff) >>> 0;
    }

    // CRC Table
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[n] = c;
    }

    function createChunk(type, data) {
        const len = Buffer.alloc(4);
        len.writeUInt32BE(data.length, 0);
        const typeBuf = Buffer.from(type, 'ascii');
        const toCrc = Buffer.concat([typeBuf, data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32BE(crc32(toCrc), 0);
        return Buffer.concat([len, typeBuf, data, crc]);
    }

    // IHDR Chunk
    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(width, 0);
    ihdrData.writeUInt32BE(height, 4);
    ihdrData[8] = 8; // Bit depth
    ihdrData[9] = 6; // Color type (RGBA)
    ihdrData[10] = 0; // Compression
    ihdrData[11] = 0; // Filter
    ihdrData[12] = 0; // Interlace
    const ihdrChunk = createChunk('IHDR', ihdrData);

    // IDAT Chunk
    const idatChunk = createChunk('IDAT', compressed);

    // IEND Chunk
    const iendChunk = createChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Ellipse test helper
function inEllipse(x, y, x1, y1, x2, y2) {
    const rx = (x2 - x1) / 2;
    const ry = (y2 - y1) / 2;
    const cx = x1 + rx;
    const cy = y1 + ry;
    const dx = (x - cx) / rx;
    const dy = (y - cy) / ry;
    return (dx * dx + dy * dy) <= 1;
}

// Blend alpha over background
function blend(bg, fg) {
    const a = fg[3] / 255;
    const r = Math.round(fg[0] * a + bg[0] * (1 - a));
    const g = Math.round(fg[1] * a + bg[1] * (1 - a));
    const b = Math.round(fg[2] * a + bg[2] * (1 - a));
    return [r, g, b, 255];
}

// 1. Generar Favicon
function generarFavicon() {
    const pngBuf = createPNG(32, 32, (x, y) => {
        // Seed
        if (inEllipse(x, y, 11, 15, 21, 25)) {
            return [96, 58, 26, 255];
        }
        // Pulp
        if (inEllipse(x, y, 6, 11, 26, 28) || inEllipse(x, y, 9, 4, 23, 17)) {
            return [164, 212, 92, 255];
        }
        // Skin
        if (inEllipse(x, y, 4, 10, 28, 30) || inEllipse(x, y, 8, 2, 24, 18)) {
            return [27, 61, 33, 255];
        }
        // Transparent
        return [0, 0, 0, 0];
    });

    // Create a standard .ICO wrapping the 32x32 PNG
    const icoHeader = Buffer.alloc(6);
    icoHeader.writeUInt16LE(0, 0); // Reserved
    icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
    icoHeader.writeUInt16LE(1, 4); // 1 Image

    const icoDir = Buffer.alloc(16);
    icoDir.writeUInt8(32, 0); // Width
    icoDir.writeUInt8(32, 1); // Height
    icoDir.writeUInt8(0, 2);  // Colors
    icoDir.writeUInt8(0, 3);  // Reserved
    icoDir.writeUInt16LE(1, 4); // Color planes
    icoDir.writeUInt16LE(32, 6); // Bits per pixel
    icoDir.writeUInt32LE(pngBuf.length, 8); // Image size
    icoDir.writeUInt32LE(22, 12); // Offset to image data (6 + 16 = 22)

    if (!fs.existsSync('assets')) {
        fs.mkdirSync('assets', { recursive: true });
    }

    const icoFile = Buffer.concat([icoHeader, icoDir, pngBuf]);
    fs.writeFileSync('assets/favicon.ico', icoFile);
    fs.writeFileSync('assets/favicon-32x32.png', pngBuf);
    
    // Also save 16x16 and 180x180 pngs for apple touch / google search
    const png16 = createPNG(16, 16, (x, y) => {
        return (x >= 2 && x <= 13 && y >= 2 && y <= 13) ? [27, 61, 33, 255] : [0, 0, 0, 0];
    });
    fs.writeFileSync('assets/favicon-16x16.png', png16);
    fs.writeFileSync('assets/apple-touch-icon.png', pngBuf);

    console.log('✅ assets/favicon.ico generado con éxito.');
}

// 2. Generar Banner de Compartido en WhatsApp (1200x630)
function generarBannerCompartir() {
    const width = 1200;
    const height = 630;
    const ox = 150;
    const oy = 115;

    const pngBuf = createPNG(width, height, (x, y) => {
        let color = [20, 42, 23, 255]; // Fondo verde bosque

        // Formas orgánicas decorativas de fondo
        if (inEllipse(x, y, 800, -100, 1300, 400)) {
            color = blend(color, [28, 56, 31, 100]);
        }
        if (inEllipse(x, y, 950, 300, 1400, 750)) {
            color = blend(color, [35, 75, 40, 100]);
        }

        // Aguacate
        // Brillo semilla
        if (inEllipse(x, y, ox + 140, oy + 200, ox + 170, oy + 230)) {
            return [140, 90, 45, 255];
        }
        // Semilla
        if (inEllipse(x, y, ox + 120, oy + 180, ox + 240, oy + 300)) {
            return [96, 58, 26, 255];
        }
        // Pulpa
        if (inEllipse(x, y, ox + 50, oy + 130, ox + 310, oy + 400) ||
            inEllipse(x, y, ox + 95, oy + 40, ox + 265, oy + 220)) {
            return [164, 212, 92, 255];
        }
        // Corteza
        if (inEllipse(x, y, ox + 30, oy + 120, ox + 330, oy + 420) ||
            inEllipse(x, y, ox + 80, oy + 20, ox + 280, oy + 240)) {
            return [27, 61, 33, 255];
        }

        return color;
    });

    if (!fs.existsSync('assets')) {
        fs.mkdirSync('assets', { recursive: true });
    }
    fs.writeFileSync('assets/logo-compartir.png', pngBuf);
    console.log('✅ assets/logo-compartir.png generado con éxito.');
}

generarFavicon();
generarBannerCompartir();
