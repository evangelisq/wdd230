const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggles dark mode
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

// Wait until the DOM until fully loaded
//document.addEventListener('DOMContentLoaded',()=>{
   // const form = document.getElementById('signingupForm');

    //Add event listening for form submission
//form.addEventListener('submit', (event)=>{
//event.preventDefault(); // Prevent the form from refreshing the page

    //capture form data
 //   const username = document.getElementById('username').value;
 //   const email = document.getElementById('email').value;

    // Display a confirmation message in the console
 //   console.log(`Form submitted successfully!`);
 //   console.log(`Username: ${username}`);
 //   console.log(`Email:${email}`);

    //Provide dynamic feedback
 //   alert('Thank you for signing up!');
//});
// Example of dynamic styling using JS
//document.documentElement.style.setProperty('--primary-color', #28a745)
//});
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.getElementById('registrationForm').addEventListener('submit', function(event){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.textContent = "Passwords do not match. Please try again.";
    } else {
        errorMessage.textContent = "";
    }
});

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;