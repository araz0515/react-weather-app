import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function displayTemperature(response) {
    console.log(response.data);

    setWeatherData({
      loaded: true,
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

        <div className="row pt-4">
          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-5 d-flex pe-0">
                <img
                  src={weatherData.icon}
                  alt="weather icon"
                  className="me-2"
                />
                <h1 className="degree">
                  {Math.round(weatherData.temperature)}
                </h1>
                <p>˚C | ˚F</p>
              </div>
              <div className="col-md-6 weather-info">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 end-column ">
            <h2 className="m-0 city-name">{weatherData.city}</h2>
            <ul className="lh-sm date">
              <li>Thursday 4:00 pm</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
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
