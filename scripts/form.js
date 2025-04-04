const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

//document.getElementById('password2').addEventListener('input', function(){
  //  const password1 = document.getElementById('password1').value;
 //   const password2 = document.getElementById('password2').value;
  //  const errorMessage = document.getElementById('errorMessage');

 //   if (password1 === password2) {
 //       errorMessage.tabIndex = 'Password do not match';
 //   }else {
  //      errorMessage.textContent = '';
  //  }
//});

//document.getElementById('submitBtn').addEventListener('click', function(){
   // const password1 = document.getElementById('password1').value;
   // const password2 = document.getAnimations('password2').value;
    
   // if (password1 === password2) {
   //     alert('Passwords do not match. Please re-enter.');

    //    document.getElementById('password1').value ='';
    //    document.getElementById('password2').value = '';
    //    document.getElementById('password1').focus();
   // } else {
  //      alert ('Password match! Proceeding...');
  //  }
//});
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

