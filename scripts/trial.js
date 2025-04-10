document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;



// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '8973244265f4627b35b9d0608c7e6f57';
const location = 'Langley, Canada'; // Replace with the relevant city name
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

// Function to fetch and display current weather
function fetchCurrentWeather() {
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      
      // Update HTML elements
      document.getElementById('current-temp').textContent = `${temp}°C`;
      document.getElementById('current-desc').textContent = description;
      const weatherIcon = document.createElement('img');
      weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherIcon.alt = description;
      weatherIcon.style.width = '50px';
      document.getElementById('current-desc').appendChild(weatherIcon);
    })
    .catch(error => {
      console.error('Error fetching current weather:', error);
      document.getElementById('current-temp').textContent = 'Unable to fetch weather data.';
    });
}

// Function to fetch and display 3-day weather forecast
function fetchWeatherForecast() {
  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const dailyTemps = {};
      
      // Group data by date
      data.list.forEach(entry => {
        const date = entry.dt_txt.split(' ')[0];
        if (!dailyTemps[date]) {
          dailyTemps[date] = [];
        }
        dailyTemps[date].push(entry.main.temp);
      });

      // Limit to 3 days and calculate averages
      const forecastContainer = document.getElementById('forecast');
      let count = 0;

      for (let date in dailyTemps) {
        if (count >= 3) break; // Limit to 3 days
        const dailyAverageTemp = (
          dailyTemps[date].reduce((a, b) => a + b, 0) / dailyTemps[date].length
        ).toFixed(1);

        // Create and append forecast item
        const forecastItem = document.createElement('div');
        forecastItem.textContent = `Date: ${date}, Avg Temp: ${dailyAverageTemp}°C`;
        forecastContainer.appendChild(forecastItem);
        count++;
      }
    })
    .catch(error => {
      console.error('Error fetching weather forecast:', error);
      const errorItem = document.createElement('div');
      errorItem.textContent = 'Unable to fetch forecast data.';
      document.getElementById('forecast').appendChild(errorItem);
    });
}

// Call the functions
fetchCurrentWeather();
fetchWeatherForecast();

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;
