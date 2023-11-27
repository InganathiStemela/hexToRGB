function convertHexToRGB(){
    const hexInput = document.getElementById('hexInput').value.trim();

    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const isValidHex = hexRegex.test(hexInput);

    if (isValidHex){
        console.log('Invalid hex color code');
        return;
    }
    const sanitizedhex = hexInput.replace(/^#/, '');

    //conversion
    const R = parseInt(sanitizedhex.substring(0, 2),16);
    const G = parseInt(sanitizedhex.substring(2, 4),16);
    const B = parseInt(sanitizedhex.substring(4, 6),16);

    document.getElementById('rgbValue').textContent = `(${R}, ${G}, ${B})`;
}