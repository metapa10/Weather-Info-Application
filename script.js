const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

const API_KEY = '=WEATHER_API_KEY';

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
  const location = locationInput.value.trim();
  if (location !== '') {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.log('Error:', error));
  }
}

function displayWeather(data) {
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}

// Initial weather display
fetchWeather();
