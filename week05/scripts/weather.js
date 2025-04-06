const currentTemp = document.querySelector('#current-tempt');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Construct the API URL
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=imperial&appid=8973244265f4627b35b9d0608c7e6f57";

// Fetch weather data
async function apiFetch() {
    fetch(url)
    .then((response) =>{
        if(response.ok) {
            return response.json();
        }
        throw new Error('Error fetching data');
    })
    .then((data) =>{
        console.log(data);
        displayResults(data);
    })
    .catch(error => {
        console.srroe('Error', error);
    });
}
// Display the fetched data
function displayResults (data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weather.setAttribute('alt', desc);

    captionDesc.textContent = desc;
}
   
 apiFetch();
