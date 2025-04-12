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
        cmenu.style.display = 'none';
    }
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀ Light Mode' : '🌙 Dark Mode';
});

const apiKey = '8973244265f4627b35b9d0608c7e6f57';

// Function to track and display page visits
function trackPageVisits() {
    let visitCount = localStorage.getItem('pageVisits'); // Retrieve visit from local storage
    if (!visitCount) {
        visitCount = 0; // Initialize visits if not stored
    }
    visitCount = parseInt(visitCount) + 1; // Increment visit count
    localStorage.setItem('pageVisits', visitCount);  // Save updated count

    // Update the page visit section in the html
    const pageVisitElement =document.getElementById('page-visits');
    pageVisitElement.textContent = `${visitCount} times`; 
}

// Fetch and display weather data
navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //console.log(`Latitude: ${latitude}, longitude: ${longitude}`);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    // Fecth current weather data
    fetch(weatherUrl)
       .then(response => response.json())
       .then(data => {
            const city = data.name;
            const temperature = Math.round(data.main.temp);
            const condition = data.weather [0].description;
          
           let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Update current weather detail in the html
        document.getElementById('location').textContent = city;
        document.getElementById('weather').textContent = `${temperature}°C, ${condition}`;  
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('description').textContent = condition;
        document.getElementById('weather-icon').src = iconUrl; // Set the icon URL
        document.getElementById('weather-icon').alt = condition; // Set the icon description
    })
    .catch(error => {
         console.error('Error fetching  current weather:', error);
         document.getElementById('weather').textContent = 'Unable to fectch weather data.';
    });

    // Fetch 3-day weather forecast data 
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecast = data.list.filter((_, index) => index % 8 == 0).slice(0, 3); // Get 3 days 0f data
        
         forecast.forEach((day, index) => {
            const date = new Date(day.dt * 1000); //Convert UNIX timestamp tp date
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long'}); // Get Day Name
            const temp = Math.round(day.main.temp);
            const description = day.weather[0].description;

            // Update forecast details in the html
            document.getElementById(`day${index + 1}`).textContent = `${dayName}: ${temp}°C, ${description}`;
         });
      
    })
    .catch(error => {
        console.error('Error getting forecast:', error);
        document.getElementById('forecast').innerHTML = '<li>Unable to fetch forecast data.</li>';
    });
    // Tracl page visits
  trackPageVisits();
}, error => {
    console.error('Error getting location:', error);
    document.getElementById('weather').textContent = 'Location access denied. Unable to fetch weather data.';
    document.querySelector('forecast').innerHTML = '<li>Location access denied. Unable to fetch weather data.</li>';
});



