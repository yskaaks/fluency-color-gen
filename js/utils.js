function generateColors() {
    const colors = [];
    for (let r = 8; r < 257; r += 8) {
        for (let g = 8; g < 257; g += 8) {
            for (let b = 8; b < 257; b += 8) {
                colors.push([r, g, b]);
            }
        }
    }
    shuffle(colors);
    return colors;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createImage(colors, width, height, pixelSize) {
    const canvas = document.createElement('canvas');
    canvas.width = width * pixelSize;
    canvas.height = height * pixelSize;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const x = (i % width) * pixelSize;
        const y = Math.floor(i / width) * pixelSize;
        ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }

    return canvas.toDataURL();
}

// Export the functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateColors, createImage };
}