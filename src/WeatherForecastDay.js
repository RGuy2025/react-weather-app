
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.temperature.maximum);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.temperature.minimum);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherForecastIcon />
      </div>
      <div>
        <span className="WeatherForecast-high">{maxTemperature ()}°C</span> |{" "}
        <span className="WeatherForecast-low">{minTemperature ()}°C</span>
      </div>
    </div>
  );
}
