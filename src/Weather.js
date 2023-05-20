import React from "react";
import "./Weather.css";

export default function Weather() {
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