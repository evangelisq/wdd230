
const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggles the visibility of the menu
    menuButton.textContent = menu.classList.contains('open') ? 'X' : '☰'; // Updates button icon
});



const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggles dark mode
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

