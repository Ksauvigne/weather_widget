const apiKey = '9a2eb385615a34b7f2e7a7ee3eebdd80'; // Replace with your actual Weatherstack API key
const city = 'Miami';

async function getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
    const data = await response.json();

    if (data.error) {
        console.error('Error fetching weather data:', data.error.info);
        return;
    }

    document.getElementById('description').innerText = data.current.weather_descriptions[0];
    document.getElementById('temperature').innerText = data.current.temperature;
    document.getElementById('humidity').innerText = data.current.humidity;
    document.getElementById('wind_speed').innerText = data.current.wind_speed;
}

getWeather();
