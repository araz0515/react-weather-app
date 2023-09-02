import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherData from "./WeatherData";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function displayTemperature(response) {
    console.log(response.data);

    setWeatherData({
      loaded: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onClick={handleSearch}>
          <div className="row">
            <div className="col-md-10">
              <input
                type="search"
                placeholder="Search city..."
                className="form-control mb-2"
                onChange={handleUpdate}
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onClick={handleSearch}>
          <div className="row">
            <div className="col-md-10">
              <input
                type="search"
                placeholder="Search city..."
                className="form-control mb-2"
                onChange={handleUpdate}
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
