import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feels: Math.round(response.data.temperature.feels_like),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="main-body">
        <header>
          <div className="row">
            <form className="search-form">
              <input
                type="search"
                placeholder="Enter a city"
                required
                className="search-form-input"
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
          </div>
        </header>

        <div className="row weather-app-data">
          <div className="col-6">
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span className="date-details"><FormattedDate date={weatherData.date}/></span>,{" "}
              <span className="description-details">{weatherData.description}</span>
              <br />
              Humidity:
              <span className="humidity-details">{weatherData.humidity}</span>%,
              Feels Like:
              <span className="feels-like-details">{weatherData.feels}</span>°
            </p>
          </div>

          <div className="col-6">
            <div className="weather-app-temperature-container">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <div className=" weather-app-temperature">
                {weatherData.temperature}
              </div>
              <span className=" weather-app-unit">
                <a href="#temp">°C </a> | <a href="#temp">°F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="row weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "5912o91beb33d634bfd91ta0a18fa0bd";
    let city = "Brantford";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
