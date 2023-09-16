// todays weather
import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service
import dayImage from '../images/day.png'
import nightImage from '../images/moon.png'
import '../weather.css';

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

  // Function to determine if it's daytime or nighttime
  const isDaytime = (unixTimestamp) => {
    const time = new Date(unixTimestamp * 1000);
    const hours = time.getHours();
    return hours >= 6 && hours < 18; // Assuming daytime is between 6:00 AM and 6:00 PM
  };

  return (
    <div className={`today-container ${isDaytime(weatherData.dt) ? 'daytime' : 'nighttime'}`}>
      {weatherData && (
        <>
          <div className="today-weather">
            <div className="temp-city">
              <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
              <p className="location">{weatherData.name}</p>
              <p className="condition">{weatherData.weather[0].description}</p>
            </div>
            <div className="day-icon">
              {isDaytime(weatherData.dt) ? (
                <img
                  src={dayImage}
                  alt="Day" />
              ) : (
                <img
                  src={nightImage}
                  alt="Night" />
              )}
            </div>
          </div>
          <div className="rise">
            <div className="sunrise-set">
              <p>sunrise {formatTime(weatherData.sys.sunrise)}</p>
              <p>sunset {formatTime(weatherData.sys.sunset)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;