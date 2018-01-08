import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import WeatherBox from './weather_box'


class WeatherList extends Component {


  render() {


    let weather_forecast = []
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let { weather } = this.props
    if (weather && weather != "error" && weather != "requesting") {
      weather_forecast = this.props.weather.list.splice(0,6).map((day_of_week, index) => <WeatherBox weather={Math.round(day_of_week.temp.day)} day={days[index]} key={index}/>)
    }

    if (this.props.weather === "requesting") {
      weather_forecast = <div className="loading">Loading...<style jsx>{`
      .loading {
        margin-top: 10%;
        color: white;
        font-family: 'Apercu Pro';
        font-size: 200px;
        font-weight: 100;
        margin-bottom: 2%;
      }`}</style></div>
    }

    return (
      <section className="display_weather">
        <ul className="weather_list">
          {weather_forecast}
        </ul>
        <style jsx>{`

          .display_weather {
            background-color: #303030;
            background-size: cover;
            height: 100vh;
            background-position: center;
            width: 100%;
            position: absolute;
          }


          .weather_list {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: center;
            color: white;
          }

        `}</style>
      </section>
    )
  }
}

function mapStateToProps({weather}){
  return {weather}
}


export default connect(mapStateToProps)(WeatherList)
