import React from 'react';
import '../citybutton.css';

const CityButton = ({ toggleCity }) => {
  return (
    <div className="button-container">
      <button type="button" className="round-button" onClick={toggleCity}>
        <span>&#10095;</span> {/* Arrow character */}
      </button>
    </div>
  );
}

export default CityButton;

