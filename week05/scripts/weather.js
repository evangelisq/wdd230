const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature =document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "8973244265f4627b35b9d0608c7e6f57"
const myLat = "49.1042° N"
const myLong =  "122.6604° W"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

apiFetch();
