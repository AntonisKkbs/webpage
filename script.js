// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const ethicalHackingButton = document.querySelector('#ethicalHackingBtn');
    const resumeButton = document.querySelector('#resumeBtn');

    if (ethicalHackingButton) {
        ethicalHackingButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = 'academy.html'; // Redirect to academy.html
        });
    }

    }

    // Hide the PDF viewer when the "Escape" key is pressed (if needed elsewhere)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            // Optional: Hide PDF viewer if it's implemented in other scenarios
        }
    });
});
