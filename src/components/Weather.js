// todays weather
import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service
import CityButton from './CityButton';
import Forecast from './Forecast';
import dayImage from '../images/day.png'
import nightImage from '../images/moon.png'
import '../weather.css';

const cities = ['Stockholm', 'London', 'New York', 'Tokyo', 'Helsinki']; // Add your list of cities

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0); // Initial city

  useEffect(() => {
    // Make the API call when the component mounts
    const currentCity = cities[currentCityIndex];
    apiService.fetchWeatherData(currentCity, 'Sweden') // Use currentCity in the API call
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, [currentCityIndex]); // Trigger API call when currentCityIndex changes

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

  const toggleCity = () => {
    // Toggle to the next city in the list
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  return (
    <div className={`today-container ${weatherData && isDaytime(weatherData.dt) ? 'daytime' : 'nighttime'}`}>
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
      <CityButton toggleCity={toggleCity} />
      <Forecast
        currentCity={cities[currentCityIndex]}
        country="Sweden" />
    </div>
  );
}

export default Weather;