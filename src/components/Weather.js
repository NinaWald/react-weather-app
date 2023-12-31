// todays weather
import React, { useState, useEffect } from 'react';
import apiService from '../apiService'; // Import your API service
import CityButton from './CityButton';
import Forecast from './Forecast';
import sunSet from '../images/sunset.png'
import sunRise from '../images/sunrise.png'
import '../weather.css';

const cities = ['Stockholm', 'London', 'New York', 'Tokyo', 'Helsinki', 'Rome', 'Rhodes']; // Add your list of cities

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
              <p className="temperature">{Math.round(weatherData.main.temp)}°</p>
              <p className="location">{weatherData.name}</p>
              {/* <div className="day-icon">
                {isDaytime(weatherData.dt) ? (
                  <h2>day</h2>
                ) : (
                  <h2>night</h2>
                )}
              </div> */}
            </div>
            <div className="day-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description} />
            </div>
          </div>
          <div className="rise">
            <div className="sunrise-set">
              <p><img src={sunRise} alt="Sunrise icon" /> {formatTime(weatherData.sys.sunrise)}</p>
              <p><img src={sunSet} alt="Sunset icon" /> {formatTime(weatherData.sys.sunset)}</p>
            </div>
          </div>
        </>
      )}
      <CityButton toggleCity={toggleCity} />
      <div className="forecast-container">
        <Forecast currentCity={cities[currentCityIndex]} country="Sweden" />
      </div>
    </div>
  );
}

export default Weather;