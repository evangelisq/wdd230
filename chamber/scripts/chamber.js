const hamburger = document.querySelector('hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
    menu.computedStyleMap.display = menu.style.display === 'flex'? 'none': 'flex'; 
})

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
