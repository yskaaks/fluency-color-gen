const { generateColors, createImage } = require('../js/utils.js');

describe('Utils', function() {
    it('should generate 32768 unique colors', function() {
        const colors = generateColors();
        expect(colors.length).toBe(32768);
        expect(new Set(colors.map(color => color.join(','))).size).toBe(32768);
    });

    it('should create an image with the correct dimensions', function() {
        const colors = generateColors();
        const width = 128;
        const height = 256;
        const pixelSize = 4;

        // Create a fake DOM element to act as the canvas
        document.body.innerHTML = '<canvas id="testCanvas"></canvas>';
        const canvas = document.getElementById('testCanvas');
        
        // Mock the createElement method to return the fake canvas
        const createElement = jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
            if (tagName === 'canvas') {
                return canvas;
            }
            return document.createElement(tagName);
        });

        const imageDataURL = createImage(colors, width, height, pixelSize);
        expect(imageDataURL).toMatch(/^data:image\/png;base64,/);

        // Restore the original method
        createElement.mockRestore();
    });

    it('should generate colors with valid RGB components', function() {
        const colors = generateColors();
        colors.forEach(color => {
            expect(color[0]).toBeGreaterThanOrEqual(8);
            expect(color[0]).toBeLessThanOrEqual(256);
            expect(color[1]).toBeGreaterThanOrEqual(8);
            expect(color[1]).toBeLessThanOrEqual(256);
            expect(color[2]).toBeGreaterThanOrEqual(8);
            expect(color[2]).toBeLessThanOrEqual(256);
            expect(color[0] % 8).toBe(0);
            expect(color[1] % 8).toBe(0);
            expect(color[2] % 8).toBe(0);
        });
    });
});
