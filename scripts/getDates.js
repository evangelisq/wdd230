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
const apiKey = '8973244265f4627b35b9d0608c7e6f57';
const city = 'Langley, CA';
const apiUrl = `https://home.openweathermap.org/api_keys`;

async function fetchWeather() {
    try {
        const response = await fetch (apiUrl);
        const data = await response.json();

        document.getElementById('weather-description').textContent = data.weather[0].description;

        let visits = localStorage.getItem('visits') || 0;
            visits++;
            document.getElementById('visit-counter').textContent = visits;
            localStorage.setItem('visits', visits);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


const visitCounterElement = document.getElementById('visit-counter');
let visitCount = localStorage.getItem('visitCount');
if (visitCount) {
    visitCount - parseInt(visitCount, 10) + 1;
} else {
    visitCount = 1;
}

localStorage.setItem('visitCount', visitCount);
visitCounterElement.textContent = visitCount = visitCount;

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;