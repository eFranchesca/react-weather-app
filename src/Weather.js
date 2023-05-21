import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let city = "Miami";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
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
      <h1>Miami</h1>
      <ul>
        <li>Saturday 4:20</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
        <li className="icon_temp">☁️ 87°F</li>
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
}