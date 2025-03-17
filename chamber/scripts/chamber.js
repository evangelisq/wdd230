document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttrbute('heref')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
