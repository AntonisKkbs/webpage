// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const ethicalHackingButton = document.querySelector('#ethicalHackingBtn');
    const pdfViewer = document.querySelector('#pdfViewer');
    
    // Function to toggle the PDF viewer
    function togglePdfViewer() {
        if (pdfViewer.style.display === 'block') {
            pdfViewer.style.display = 'none'; // Hide the PDF viewer
        } else {
            pdfViewer.style.display = 'block'; // Show the PDF viewer
        }
    }

    if (ethicalHackingButton) {
        ethicalHackingButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            togglePdfViewer(); // Toggle the PDF viewer
        });
    }

    // Hide the PDF viewer when the "Escape" key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            pdfViewer.style.display = 'none'; // Hide the PDF viewer
        }
    });
});
