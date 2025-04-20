
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
  menu.style.display = menu.style.display === 'flex'? 'none': 'flex'; 
}); 
   
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
    } else {
        cmenu.style.display = 'none';
    }
});
//const hamMenu = document.querySelector(".ham-menu");

//const offScreenMenu = document.querySelector(".off-screen-menu");

//hamMenu.addEventListener("click", () => {
 // hamMenu.classList.toggle("active");
 // offScreenMenu.classList.toggle("active");
//});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggles dark mode
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});



const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const visitMessage = document.getElementById('visit-message');

if (!lastVisit) {
    //First time visitor
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = now - lastVisit; // Calcu;ate time differences in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //Convert to days

    if (timeDifference < 24 * 60 * 60 * 1000) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitMessage.textContent = `You last visited ${daysDifference} day ago.`;
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago`;
    }
}

// Store the current visit time
localStorage.setItem('lastVisit', now);


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;