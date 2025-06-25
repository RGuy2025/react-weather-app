

import "./Weather.css";


export default function Weather() {
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
          <h1 className="weather-app-city">Brantford</h1>
          <p className="weather-app-details">
            <span>10:10</span>, <span>sunny</span>
            <br />
            Humidity:
            <span className="humidity-details">5</span>, Wind:{" "}
            <span className="wind-details">10 </span>
          </p>
        </div>

        <div className="col-6">
          <div className="weather-app-temperature-container">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="#"
            />

            <div className=" weather-app-temperature">18</div>
            <span className=" weather-app-unit">
              <a href="#">°C </a> | <a href="#">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="row weather-forecast"></div>
    </div>
  );
}
