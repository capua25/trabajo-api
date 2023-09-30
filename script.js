const url = "https://api.open-meteo.com/v1/forecast?"
const url2 = "latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT"

document.addEventListener('DOMContentLoaded',()=>{
    const search = document.getElementById('search');
    search.addEventListener('click', ()=>{
        getData();
    });
});

async function getData(){

}