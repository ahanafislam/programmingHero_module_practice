// Set api key
const api_key = "here will be your api key";

// Fetch temperature report from API
const showTemperature = () => {
    const locationInput = document.getElementById('location-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${api_key}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch(error => console.log(error));
}

// Set text content
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// For Show the temperature in ui
const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('status', temperature.weather[0].main);
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('icon').setAttribute('src', iconUrl);
}
