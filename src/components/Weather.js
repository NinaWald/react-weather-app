// todays weather
import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Make the API call when the component mounts
    apiService.fetchWeatherData('Stockholm', 'Sweden')
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  function formatTime(unixTimestamp) {
    const time = new Date(unixTimestamp * 1000);
    return time.toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather</h2>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {Math.round(weatherData.main.temp * 10) / 10}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
          <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
          <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;