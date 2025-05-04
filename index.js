function searchCity(city) {
    let apiKey = "bd13391t3d87a406o7b70e7f7fa17f8e";            
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayweather);
}
function displayweather(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    let city = document.querySelector("#display-city");
    let description = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let iconElement = document.querySelector("#icon");


   
    temperatureElement.innerHTML = `${temperature}`;
    city.innerHTML = response.data.city;
    description.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-info"/>`;
        }




function search(event){
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-input");
    
    
    searchCity(searchInput.value);
}
    

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
searchCity("Abuja");

function formatDate() {
let now = new Date();
let minute = now.getMinutes();
let hour = now.getHours();
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()]
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let dateTimeElement = document.querySelector("#date-time");
dateTimeElement.innerHTML = `${day}, ${date} ${month} ${hour}:${minute}`;
}
formatDate();