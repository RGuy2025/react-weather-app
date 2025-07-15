

export default function WeatherForecastIcon(props) {
  let forecastIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.condition.icon}.png`;
  return <img src={forecastIconUrl} alt={props.condition.description} />;
}
