import React from 'react'

const WeatherBox = (props) => (
  <li className="weather">
    <div className="weather_box">
      <div>herrooo</div>
      <div>{props.weather}</div>
    </div>
  <style jsx>{`
    .weather {
      position: relative;
      z-index: 20000;
      display: inline-flex;
      overflow: hidden;
      margin: 50px;
      cursor: pointer;
    }

    .weather_box {
      background-color: blue;
    }
  `}</style>
  </li>
)

export default WeatherBox
