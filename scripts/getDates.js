
const mobileMenu = document.getElementById("mobile-menu")
const navList = document.querySelector("nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
