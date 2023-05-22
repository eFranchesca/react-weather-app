import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success"/>
            </div>
        </div>
      </form>
      <h1>{city}</h1>
      <ul>
        <li>Saturday 4:20</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
        <img 
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Mostly Cloudy"
          className="float-left"/>
        <div className="float-left">
          <span className="temperature">{Math.round(temperature)}</span>
          <span className="unit">°c</span>
        </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 8%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 14 mph</li>
          </ul>
        </div>
      </div>
    </div>
  )
  } else {
    const apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let city = "London";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric";
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}