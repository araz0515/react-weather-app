import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setReady(true);
    console.log(response.data.daily);
    setForecastData(response.data.daily);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (forecastDaily, index) {
            if (index < 6) {
              return (
                <div className="col forecast-column" key={index}>
                  <WeatherForecastDay data={forecastDaily} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
