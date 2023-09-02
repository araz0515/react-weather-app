import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="row pt-4">
      <div className="col-md-8 ">
        <div className="row">
          <div className="col-md-5 d-flex pe-0">
            <img src={props.data.icon} alt="weather icon" className="me-2" />
            <h1 className="degree">{Math.round(props.data.temperature)}</h1>
            <p>˚C | ˚F</p>
          </div>
          <div className="col-md-6 weather-info">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 end-column ">
        <h2 className="m-0 city-name">{props.data.city}</h2>
        <ul className="lh-sm date">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
