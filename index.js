function displayweather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = `${temperature}°C`;
}



function search(event){
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-input");
    let city = document.querySelector("#display-city");
    city.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",search);
