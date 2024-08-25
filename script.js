// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const ethicalHackingButton = document.querySelector('#ethicalHackingBtn');
    
    if (ethicalHackingButton) {
        ethicalHackingButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = 'academy.html'; // Redirect to academy.html
        });
    }
});
