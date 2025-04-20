//const hamMenu = document.querySelector(".ham-menu");

//const offScreenMenu = document.querySelector(".off-screen-menu");

//hamMenu.addEventListener("click", () => {
  //hamMenu.classList.toggle("active");
  //offScreenMenu.classList.toggle("active");
//});


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

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});




function validateForm (){
    const passowrd = document.getElementById('password').value;
    const password2 =document.getElementById('password2').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !==password2){
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
};


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;

//document.getElementById('registrationForm').addEventListener('submit', function(event){
   // const password = document.getElementById('password').value;
 //   const confirmPassword = document.getElementById('confirmPassword').value;
//    const errorMessage = document.getElementById('errorMessage');

 //   if (password !== confirmPassword) {
  //      event.preventDefault();
//        errorMessage.textContent = "Passwords do not match. Please try again.";
 //   } else {
 //       errorMessage.textContent = "";
//    }
//});

