document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;


const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
  menu.style.display = menu.style.display === 'flex'? 'none': 'flex'; 
}); 
   
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggles dark mode
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

const visitCounterElement = document.getElementById('visit-counter');
let visitCount = localStorage.getItem('visitCount');
if (visitCount) {
    visitCount - parseInt(visitCount, 10) + 1;
} else {
    visitCount = 1;
}

localStorage.setItem('visitCount', visitCount);
visitCounterElement.textContent = visitCount = visitCount;


//const hamMenu = document.querySelector(".ham-menu");

//const offScreenMenu = document.querySelector(".off-screen-menu");

//hamMenu.addEventListener("click", () => {
// hamMenu.classList.toggle("active");
 // offScreenMenu.classList.toggle("active");
//});

//const hamburgerButton = document.querySelector('.hamburger');
//onst menuItems = document.querySelector('.menu-Items');

//hamburgerButton.addEventListener('click', () =>{
  //  menuItems.classList.toggle('show');
//});
