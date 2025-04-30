function searchCity(city) {
    let apiKey = "bd13391t3d87a406o7b70e7f7fa17f8e";            
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayweather);
}
function displayweather(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    let city = document.querySelector("#display-city");
    city.innerHTML = response.data.city;
    temperatureElement.innerHTML = `${temperature}`;
}



function search(event){
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-input");
    
    
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
searchCity("Abuja");