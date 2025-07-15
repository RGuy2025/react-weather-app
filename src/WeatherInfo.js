import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-app-data">
        <div className="col-6">
          <h1 className="weather-app-city mb-3">{props.data.city}</h1>
          <p className="weather-app-details">
            <span className="date-details">
              <FormattedDate date={props.data.date} />
            </span>
            ,{" "}
            <span className="description-details">
              {props.data.description}
            </span>
            <br />
            Humidity:
            <span className="humidity-details">{props.data.humidity}</span>%,
            Feels Like:
            <span className="feels-like-details">{props.data.feels}</span>°
          </p>
        </div>

        <div className="col-6 mb-5">
          <div className="weather-app-temperature-container">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      
    </div>
  );
}
