import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    console.log(response.data);
    if (loaded) {
      setTemperature(response.data.temperature.current);
    }
  }

  function handleSearch(event) {
    setLoaded(true);
    event.preventDefault();
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

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
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather icon"
                className="me-2"
              />
              <h1 className="degree">{Math.round(temperature)}</h1>
              <p>˚C | ˚F</p>
            </div>
            <div className="col-md-6 weather-info">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 48%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 end-column ">
          <h2 className="m-0 city-name">{city}</h2>
          <ul className="lh-sm date">
            <li>Thursday 4:00 pm</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
