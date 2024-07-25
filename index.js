const apiKey="235cc15672c644b7947105224242507";

const apiUrl="http://api.weatherapi.com/v1/current.json?key=235cc15672c644b7947105224242507&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    // if(data.current.cloud == "Clouds"){
    //     weatherIcon.src = "Photos/cloudy.png";
    // }
    // else if(data.current.cloud == "Clear"){
    //     weatherIcon.src = "Photos/sun.png";
    // }
    // else if(data.current.cloud == "Rain"){
    //     weatherIcon.src = "Photos/rain.png";
    // }
    // else if(data.current.cloud == "Hot"){
    //     weatherIcon.src = "Photos/hot.png";
    // }
    // else if(data.current.cloud == "Strom"){
    //     weatherIcon.src = "Photos/strom.png";
    // }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})