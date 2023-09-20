import React from 'react';
import Weather from './components/Weather';
import Circle from './components/Circle'; // Import the Circle component

export const App = () => {
  return (
    <div className="app-container"> {/* Wrap Weather and Circle in a parent container */}
      <Weather />
      <Circle />
    </div>
  );
};
