// 5 day Forecast

import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    // Make the API call when the component mounts
    apiService.fetchForecastData('Stockholm', 'Sweden')
      .then((data) => {
        const fiveDayForecast = data.list.filter((day) => day.dt_txt.includes('12:00'));
        console.log('Filtered Forecast Data:', fiveDayForecast); // Debug output
        setForecastData(fiveDayForecast);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast">
        {forecastData && forecastData.map((day) => (
          <div key={day.dt}>
            <p className="forecast-day">
              {new Date(day.dt * 1000).toLocaleDateString('en-EN', {
                weekday: 'long'
              })}
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description} />
            </p>
            <p className="forecast-temp">
              {Math.round(day.main.temp_max)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;