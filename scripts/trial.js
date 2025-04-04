async function getWeather(){
    const location = document.getElementById('locationInput').Value;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temperature = Math.round(data.main.temp - 273.15);

        const condition = data.weather[0].description;

        const weatherMeassage = `Today's weather in ${location}: ${condition}. zthe temperature is ${temperature}°C`;

        console.log(weatherMessage);

    } catch (error) {
        console.error ('Error fetching data:', error);
    }

}