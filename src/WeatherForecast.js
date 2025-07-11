import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5912o91beb33d634bfd91ta0a18fa0bd";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <div className="WeatherForecast-icon">☀️</div>
          <div>
            <span className="WeatherForecast-high">40°C</span> |{" "}
            <span className="WeatherForecast-low">20°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
