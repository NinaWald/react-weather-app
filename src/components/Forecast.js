// 5 day Forecast

import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service
import '../forecast.css'

const Forecast = ({ currentCity, country }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // Make the API call when the component mounts and whenever the city or country changes
    apiService.fetchForecastData(currentCity, country)
      .then((data) => {
        const fiveDayForecast = data.list.filter((day) => day.dt_txt.includes('12:00'));
        setForecastData(fiveDayForecast);
      })
      .catch((error) => console.error(error));
  }, [currentCity, country]);

  return (
    <div className="forecast">
      {forecastData && forecastData.map((day) => (
        <div className="day-temp" key={day.dt}>
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
  );
}

export default Forecast;