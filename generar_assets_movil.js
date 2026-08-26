const fs = require('fs');
const path = require('path');
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

    // CRC Table
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[n] = c;
    }

    function crc32(buf) {
        let c = 0xffffffff;
        for (let i = 0; i < buf.length; i++) {
            c = (c >>> 8) ^ table[(c ^ buf[i]) & 0xff];
        }
        return (c ^ 0xffffffff) >>> 0;
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

    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(width, 0);
    ihdrData.writeUInt32BE(height, 4);
    ihdrData[8] = 8;
    ihdrData[9] = 6;
    ihdrData[10] = 0;
    ihdrData[11] = 0;
    ihdrData[12] = 0;
    const ihdrChunk = createChunk('IHDR', ihdrData);
    const idatChunk = createChunk('IDAT', compressed);
    const iendChunk = createChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function inEllipse(x, y, x1, y1, x2, y2) {
    const rx = (x2 - x1) / 2;
    const ry = (y2 - y1) / 2;
    const cx = x1 + rx;
    const cy = y1 + ry;
    const dx = (x - cx) / rx;
    const dy = (y - cy) / ry;
    return (dx * dx + dy * dy) <= 1;
}

function getAguacatePixel(x, y, size) {
    const scale = size / 32.0;

    // 4. Brillo semilla en resoluciones altas
    if (size >= 180 && inEllipse(x, y, 13 * scale, 17 * scale, 15.5 * scale, 19.5 * scale)) {
        return [140, 90, 45, 255];
    }
    // 3. Semilla
    if (inEllipse(x, y, 11 * scale, 15 * scale, 21 * scale, 25 * scale)) {
        return [96, 58, 26, 255];
    }
    // 2. Pulpa interior
    if (inEllipse(x, y, 6 * scale, 11 * scale, 26 * scale, 28 * scale) ||
        inEllipse(x, y, 9 * scale, 4 * scale, 23 * scale, 17 * scale)) {
        return [164, 212, 92, 255];
    }
    // 1. Corteza exterior
    if (inEllipse(x, y, 4 * scale, 10 * scale, 28 * scale, 30 * scale) ||
        inEllipse(x, y, 8 * scale, 2 * scale, 24 * scale, 18 * scale)) {
        return [27, 61, 33, 255];
    }

    return [0, 0, 0, 0];
}

function generarTodosLosAssets() {
    const assetsDir = path.join(__dirname, 'assets');
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
    }

    // 1. Favicon clásico para PC (32x32)
    const png32 = createPNG(32, 32, (x, y) => getAguacatePixel(x, y, 32));
    fs.writeFileSync(path.join(assetsDir, 'favicon-32x32.png'), png32);

    const icoHeader = Buffer.alloc(6);
    icoHeader.writeUInt16LE(0, 0);
    icoHeader.writeUInt16LE(1, 2);
    icoHeader.writeUInt16LE(1, 4);

    const icoDir = Buffer.alloc(16);
    icoDir.writeUInt8(32, 0);
    icoDir.writeUInt8(32, 1);
    icoDir.writeUInt8(0, 2);
    icoDir.writeUInt8(0, 3);
    icoDir.writeUInt16LE(1, 4);
    icoDir.writeUInt16LE(32, 6);
    icoDir.writeUInt32LE(png32.length, 8);
    icoDir.writeUInt32LE(22, 12);

    const icoFile = Buffer.concat([icoHeader, icoDir, png32]);
    fs.writeFileSync(path.join(assetsDir, 'favicon.ico'), icoFile);
    console.log('✅ favicon.ico y favicon-32x32.png guardados en assets/');

    // 2. Icono para Android / Google Chrome (192x192 PNG)
    const png192 = createPNG(192, 192, (x, y) => getAguacatePixel(x, y, 192));
    fs.writeFileSync(path.join(assetsDir, 'android-chrome-192x192.png'), png192);
    console.log('✅ android-chrome-192x192.png guardado en assets/');

    // 3. Icono para iPhone / Safari (180x180 PNG con fondo verde bosque #142a17)
    const apple180 = createPNG(180, 180, (x, y) => {
        // Offset de 20px para centrar el aguacate de tamaño 140x140
        const ax = x - 20;
        const ay = y - 20;
        if (ax >= 0 && ax < 140 && ay >= 0 && ay < 140) {
            const pixel = getAguacatePixel(ax, ay, 140);
            if (pixel[3] > 0) {
                return pixel;
            }
        }
        return [20, 42, 23, 255]; // Fondo sólido verde bosque
    });
    fs.writeFileSync(path.join(assetsDir, 'apple-touch-icon.png'), apple180);
    console.log('✅ apple-touch-icon.png guardado en assets/');
}

generarTodosLosAssets();
