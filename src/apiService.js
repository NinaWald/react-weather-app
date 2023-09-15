// apiService.js

const API_KEY = '657719ffb9094260c77c12077e523aa2';

async function fetchWeatherData(city, country) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
}
async function fetchForecastData(city, country) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching forecast data: ${error.message}`);
  }
}
export default {
  fetchWeatherData,
  fetchForecastData
};
