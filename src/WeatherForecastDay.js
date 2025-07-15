export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  let forecastIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;

  return (
    <span>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={forecastIconUrl} alt={props.data.condition.description} />
      </div>
      <div className="WeatherForecast-high-low">
        <span className="WeatherForecast-high">{maxTemperature()}°C</span> |{" "}
        <span className="WeatherForecast-low">{minTemperature()}°C</span>
      </div>
    </span>
  );
}
