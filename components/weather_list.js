import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import WeatherBox from './weather_box'


class WeatherList extends Component {


  render() {

    let a = []
    if (this.props.weather) {
      a = this.props.weather.list.splice(0,6).map((day_of_week) => <WeatherBox weather={day_of_week.temp.day} />)
    }
    console.log("ssodifjsdofisjaasdvnos", a)
    // let pokemons = displayedPokemons.map((pokemon, index) => {
    //   return <Pokemon pokemon={pokemon} key={index} />
    // })


    return (
      <section className="display_weather">
        <ul className="weather_list">
          {a}
        </ul>
        <style jsx>{`
          .display_weather {

            background-size: cover;
            height: 100vh;
            background-position: center;
            width: 100%;
            position: absolute;
          }

          p {
            color: green;
          }

          .weather_list {
            list-style: none;
            margin: 0;
            padding: 0;
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
