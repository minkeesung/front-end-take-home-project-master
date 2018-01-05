import React from 'react'

const WeatherBox = ({day, weather}) => (

  <li className="weather_list">
    <div className="weather_box">
      <div className="day">{day}</div>
      <div className="weather"><span className="weather_num"> {weather}</span> F</div>
    </div>
  <style jsx>{`


    .weather_list {
      display: inline-flex;
      margin: 20% .2%;
    }

    .weather_box {
      border: 1px solid white;
    }

    .day {
      padding: 10px;
      border-bottom: 1px solid white;
    }

    .weather {
      padding: 10px 20px;
    }

    .weather_num {
      font-size: 40px;
    }
  `}</style>
  </li>

)

export default WeatherBox
