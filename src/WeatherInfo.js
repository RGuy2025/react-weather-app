import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-app-data">
        <div className="col-6">
          <h1 className="weather-app-city">{props.data.city}</h1>
          <p className="weather-app-details">
            <span className="date-details">
              <FormattedDate date={props.data.date} />
            </span>
            , <span className="description-details">{props.data.description}</span>
            <br />
            Humidity:
            <span className="humidity-details">{props.data.humidity}</span>%, Feels
            Like:
            <span className="feels-like-details">{props.data.feels}</span>°
          </p>
        </div>

        <div className="col-6">
          <div className="weather-app-temperature-container">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <div className=" weather-app-temperature">{props.data.temperature}</div>
            <span className=" weather-app-unit">
              <a href="#temp">°C </a> | <a href="#temp">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="row weather-forecast"></div>
    </div>
  );
}
