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
            </p>
            <p className="forecast-temp">
              {Math.round(day.main.temp * 10) / 10} °C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;