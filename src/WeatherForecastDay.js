import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}˚`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}˚`;
  }

  function day() {
    let date = new Date(props.data.time);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          className="forecast-icon"
        />
      </div>{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-high">{maxTemperature()}</span>
        <span className="Forecast-low">{minTemperature()}</span>{" "}
      </div>
    </div>
  );
}
