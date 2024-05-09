// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 1af6c84ac0ab48952969a1bd7062308c
const API_KEY = `1af6c84ac0ab48952969a1bd7062308c`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const city = document.querySelector("#city");
const weather_img = document.querySelector("#weatherImg"); 
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const cnt = document.querySelector("#content");
const crt = document.querySelector("#current");
cnt.style.display = "none"; 
const getWeather = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.main.temp);
    console.log(data)
    console.log(data.weather[0].main)
    // console.log(data.main.humidity)
    // console.log(data.wind.speed)
    return showWeather(data);
}

const showWeather = (data)=>{
    weather.innerHTML = `${data.main.temp} ℃`;
    city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${search.value}`;
crt.innerHTML = `${data.weather[0].main}`;
    // wind.innerHTML = `${data.wind.speed}`;
    // humidity.innerHTML = `${data.main.humidity}`;
    console.log(data.main.humidity);
    console.log(data.wind.speed)
    switch(data.weather[0].main)
    {
        case 'Clouds':
            weather_img.src = "https://img.freepik.com/premium-vector/blue-sky-sun-white-clouds_53562-1089.jpg?w=1060";
        break;

        case 'Snow':
            weather_img.src = "https://img.freepik.com/free-vector/landscape-flat-design-winter_23-2148368444.jpg?t=st=1709706818~exp=1709710418~hmac=def49baad744fb616934b3b6577c153ed72660474d30f15c2e3c2a1fb04b46b4&w=996";
        break;

        case 'Clear':
            weather_img.src = "https://img.freepik.com/free-vector/hand-drawn-beautiful-landscape_23-2149116225.jpg?t=st=1709706953~exp=1709710553~hmac=3aaf5bdfb6d23631b2665f873a737532b380a30451369370fcdf7bc18161dc8a&w=996";
        break;

        case 'Haze':
            weather_img.src = "https://img.freepik.com/free-photo/air-polluted-city-monotone-landscape-photography_53876-104831.jpg?t=st=1709707390~exp=1709710990~hmac=59d427d0d5fdea1d13337bc425179dbe97136f754e781c033176cbcb90b5fa5e&w=996"
        break;

        case 'Rain':
            weather_img.src = "https://img.freepik.com/free-vector/flat-illustration-monsoon-season_23-2150409937.jpg?w=740";
        break;

        case 'Mist':
            weather_img.src = "https://img.freepik.com/premium-vector/young-traveler-with-backpack-climbs-mountain-with-beautiful-view-hiking-mountain-concept_923732-1839.jpg?w=740";
        break;

        case 'Smoke':
            weather_img.src = "https://img.freepik.com/free-vector/pollution-concept-background-flat-style_23-2148210822.jpg?w=740&t=st=1709707928~exp=1709708528~hmac=0db4d4066a5abc3ac01d07e2fe6976bb6400b8b12af563f3e5f66ba1e996687a";
        break;
    }
    
 wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed}km/H`;
    humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity}%`;
    cnt.style.display = "block"; 
    
}

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    getWeather(search.value);
})