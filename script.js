// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const ethicalHackingButton = document.querySelector('#ethicalHackingBtn');
    const pdfViewer = document.querySelector('#pdfViewer');
    
    if (ethicalHackingButton) {
        ethicalHackingButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            pdfViewer.style.display = 'block'; // Show the PDF viewer
        });
    }
});
