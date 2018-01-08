import React from 'react'

const WeatherBox = ({day, weather}) => (

  <li className="weather_list">
    <div className="weather_box">
      <div className="day">{day}</div>
      <div className="weather"><span className="weather_num"> {weather}</span>  F</div>
    </div>
  <style jsx>{`

    .weather_list {
      display: inline-flex;
      margin: 17% .2%;
    }

    .weather_box {
      border: 1px solid white;
    }

    .day {
      padding: 20px;
      border-bottom: 1px solid white;
      font-family: 'Apercu Pro';
    }

    .weather {
      padding: 20px 40px;
      font-family: 'Apercu Pro';
      font-size: 20px;
    }

    .weather_num {
      font-size: 70px;
      font-family: Tiempos Headline Semibold;
    }
  `}</style>
  </li>

)

export default WeatherBox
