
const qrForm = document.getElementById('qrForm');
const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const generateBtnText = document.getElementById('generateBtnText');
const qrcodeContainer = document.getElementById('qrcodeContainer');
const qrcodeCanvas = document.getElementById('qrcodeCanvas');

qrForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const url = urlInput.value.trim();

    if (url === '') {
        return;
    }

    generateBtnText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    qrcodeContainer.classList.add('hidden');

    // Validate URL (simple regex pattern for demonstration)
    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    if (!urlRegex.test(url)) {
        loadingSpinner.classList.add('hidden');
        generateBtnText.classList.remove('hidden');
        alert('Invalid URL');
        return;
    }

    // Generate QR code
    QRCode.toCanvas(qrcodeCanvas, url, function (error) {
        if (error) {
            loadingSpinner.classList.add('hidden');
            generateBtnText.classList.remove('hidden');
            alert('An error occurred while generating the QR code');
        } else {
            loadingSpinner.classList.add('hidden');
            generateBtnText.classList.remove('hidden');
            qrcodeContainer.classList.remove('hidden');
        }
    });
});
