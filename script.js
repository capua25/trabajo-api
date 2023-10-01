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

const screen = document.getElementById('screen');

document.addEventListener('DOMContentLoaded', () => {
//    screen.innerHTML = `
//    <div id="location">
//        <div class="container">
//            <label for="locate">Please enter your location</label>
//            <input type="search" name="locate" id="city" placeholder="City, State, Country">
//            <button id="search">I got it</button>
//        </div>
//    </div>`;
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
    let coordinates = [location.results[0].geometry.lat,location.results[0].geometry.lng];
    let weather_url2 = `latitude=${coordinates[0]}&longitude=${coordinates[1]}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT`;//${coordinates[2]}`;
    const res = await fetch(weather_url+weather_url2);
    const data = await res.json();
    console.log(data);
    showWeather(data);
}

function showWeather(data){
    screen.innerHTML = `
    <div id="weather">
        <div class="container">
            <div class="week">
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="card">
                    <img>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>`;
}