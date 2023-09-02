import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="d-flex">
        <h1 className="degree">{Math.round(props.celsius)}</h1>
        <p>
          ˚C |{" "}
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="d-flex">
        <h1 className="degree">{Math.round(fahrenheit())}</h1>
        <p>
          <a href="/" onClick={showCelsius}>
            ˚C{" "}
          </a>
          | ˚F
        </p>
      </div>
    );
  }
}
