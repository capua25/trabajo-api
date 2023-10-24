const APIKEY = '52e7a8ac7ea948ccae6dfce02bf5fafc';
const GPS_URL = 'https://api.opencagedata.com/geocode/v1/json?q=';
const weather_url = "https://api.open-meteo.com/v1/forecast?";

const WMO = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Heavy drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
}
const IMG = {
    0: 'img/sun.png',
    1: 'img/sun.png',
    2: 'img/cloudy.png',
    3: 'img/cloud.png',
    45: 'img/haze.png',
    48: 'img/haze.png',
    51: 'img/drizzle.png',
    53: 'img/drizzle.png',
    55: 'img/drizzle.png',
    56: 'img/drizzle.png',
    57: 'img/drizzle.png',
    61: 'img/rain.png',
    63: 'img/rain.png',
    65: 'img/rain.png',
    66: 'img/rain.png',
    67: 'img/rain.png',
    71: 'img/snow.png',
    73: 'img/snow.png',
    75: 'img/snow.png',
    77: 'img/snow.png',
    80: 'img/rain.png',
    81: 'img/rain.png',
    82: 'img/rain.png',
    85: 'img/snow.png',
    86: 'img/snow.png',
    95: 'img/thunderstorm.png',
    96: 'img/thunderstorm.png',
    99: 'img/thunderstorm.png'
}

const screen = document.getElementById('screen');

document.addEventListener('DOMContentLoaded', () => {
   screen.innerHTML = `
   <div id="location">
       <div class="container">
           <label for="locate">Please enter your location</label>
           <input type="search" name="locate" id="city" placeholder="City, State, Country">
           <button id="search">I got it</button>
       </div>
   </div>`;
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        getLocation();
    });
});

async function getLocation() {
    const city = document.getElementById('city');
    let locate = city.value.trim();
    city.value = '';
    if (locate != '') {
        locate = locate.replace(' ', '+');
        const res = await fetch(GPS_URL + locate + '&key=' + APIKEY);
        const data = await res.json();
        getData(data);
    } else {
        alert("Invalid location");
    }
}

async function getData(location) {
    let coordinates
    try{
        coordinates = [location.results[0].geometry.lat,location.results[0].geometry.lng];
    }catch{
        alert("Couldn't find the location");
        return;
    }
    let weather_url2 = `latitude=${coordinates[0]}&longitude=${coordinates[1]}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT`;//${coordinates[2]}`;
    const res = await fetch(weather_url+weather_url2);
    const data = await res.json();
    console.log(data);
    showWeather(data);
}

function showWeather(data){
    const forecast = data.daily

    screen.innerHTML = `
    <div id="weather">
        <div class="container">
            <div class="week">
                <div class="card">
                    <p>${forecast.time[0]}</p>
                    <img src=${IMG[forecast.weathercode[0]]}>
                    <h3>${WMO[forecast.weathercode[0]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[0]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[0]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[0]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[1]}</p>
                    <img src=${IMG[forecast.weathercode[1]]}>
                    <h3>${WMO[forecast.weathercode[1]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[1]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[1]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[1]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[2]}</p>
                    <img src=${IMG[forecast.weathercode[2]]}>
                    <h3>${WMO[forecast.weathercode[2]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[2]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[2]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[2]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[3]}</p>
                    <img src=${IMG[forecast.weathercode[3]]}>
                    <h3>${WMO[forecast.weathercode[3]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[3]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[3]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[3]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[4]}</p>
                    <img src=${IMG[forecast.weathercode[4]]}>
                    <h3>${WMO[forecast.weathercode[4]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[4]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[4]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[4]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[5]}</p>
                    <img src=${IMG[forecast.weathercode[5]]}>
                    <h3>${WMO[forecast.weathercode[5]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[5]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[5]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[5]}%</p>
                </div>
                <div class="card">
                    <p>${forecast.time[6]}</p>
                    <img src=${IMG[forecast.weathercode[6]]}>
                    <h3>${WMO[forecast.weathercode[6]]}</h3>
                    <p>Max temp. ${forecast.temperature_2m_max[6]}°C</p>
                    <p>Min temp. ${forecast.temperature_2m_min[6]}°C</p>
                    <p>Max precipitation probability: ${forecast.precipitation_probability_max[6]}%</p>
                </div>
            </div>
        </div>
    </div>`;
}