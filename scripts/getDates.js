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
navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, longitude: ${longitude}`);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
        let temperature = Math.round(data.main.temp);
        let condition = data.weather [0].description;
        let city = data.name;
        let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.querySelector('.info').innerHTML = `
        <h2>Information</h2>
        <p><strong>Location: </strong> ${city} </p>
        <p><strong>Weather:</strong> ${temperature}°C, ${condition}</p>
        <img src="${icon}" alt="${condition}" width="100" height="100">`;
    })
    .catch((error) => {
         console.error('Error fetching weather data:', error);
         document.querySelector('.info').innerHTML = '<p>Unable to fectch weather data. </p>';
    });
},(error) => {
        console.error('Error getting location:', error);
        document.querySelector('.info').innerHTML = '<p>Location access denied. Unable to fetch weather data.</p>';
   });

   let pageVisits = localStorage.getItem('pageViists') || 0;
   pageVisits++;
   localStorage.setItem('pageVisites', pageVisits);
   document.getElementById('page-visits').textContent = `Page Visits: ${pageVisits}`;

   function updatePageVisits(){
    let pageVisits = localStorage.getItem('pageVisits') || 0;
    pageVisits++;
    localStorage.setItem('pageVisits', pageVisits);

    document.getElementById('page-visits').textContent = `Page Visits: ${pageVisits}`;
   }


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
