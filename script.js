const APIKEY = '52e7a8ac7ea948ccae6dfce02bf5fafc';
const GPS_URL = 'https://api.opencagedata.com/geocode/v1/json?q=';
const weather_url = "https://api.open-meteo.com/v1/forecast?";
let weather_url2 = "latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT";

const search = document.getElementById('search');
const city = document.getElementById('city');

document.addEventListener('DOMContentLoaded',()=>{
    const search = document.getElementById('search');
    search.addEventListener('click', ()=>{
        getLocation();
        getData();
    });
});

async function getLocation(){
    let locate = city.value;
    city.value='';
    locate = locate.replace(' ','+');
    console.log(locate);
    //const res = await fetch(GPS_URL+locate+'key='+APIKEY);
    const data = await res.json();
}

async function getData(){
    const res = await fetch();
}