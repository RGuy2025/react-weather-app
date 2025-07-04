import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span>
        <div className=" weather-app-temperature">
          {Math.round(props.celsius)}
        </div>
        <span className=" weather-app-unit">
          °C |{" "}
          <a href="#temp" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <div className=" weather-app-temperature">
          {Math.round(fahrenheit())}
        </div>
        <span className=" weather-app-unit">
          <a href="#temp" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
