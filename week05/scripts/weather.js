const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Construct the API URL
const apiKey = '38eb7dc3582098eac410b844b50a0b97';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=imperial&appid=' + apiKey;

// Fetch weather data
function apiFetch() {
    console.log(url);
    fetch(url)
       .then((response) =>{
        console.log('Response status:', response.status);
          if(response.ok) {
            return response.json();
        }

        throw new Error('Failed to fetch weather data');
    })
    .then((data) =>{
        console.log('Fetch data:', data);
        displayResults(data);
    })
    .catch((error) => {
        console.error('Error', error);
    });
}
// Display the fetched data
function displayResults (data) {
    console.log('Temperature:', data.main.temp);
    console.log('Icon', data.weather[0].icon);
    console.log('Description:', data.weather[0].description);

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
} 
apiFetch();

 document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;