document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const colorImage = document.getElementById('colorImage');

    function generateNewImage() {
        const width = 256;
        const height = 128;
        const pixelSize = 4;
        const colors = generateColors();
        const imageDataURL = createImage(colors, width, height, pixelSize);
        colorImage.src = imageDataURL;
    }

    generateButton.addEventListener('click', generateNewImage);
    generateNewImage(); // Generate initial image on page load
});