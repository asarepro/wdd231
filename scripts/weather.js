const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let lati = 49.7596993100183;

let longi = 6.644230267851139;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=imperial&appid=780ed413c249c0742b8fac51b2bb2c7e`;

async function apifetch() {
    try {
        let waether_info = await fetch(url);
        if (waether_info.ok) {
            let weather_data = await waether_info.json();
            console.log(weather_data);
            displayResults(weather_data);
        }
        
        else {
            throw Error( await waether_info.text());
        }
    }

    catch(error) {
        console.log(error);
    }
}

apifetch()


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    console.log(data);
}