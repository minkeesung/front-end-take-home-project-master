import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  split_array(array) {
    var i,j,temparray,chunk = 8;
    var new_array = []
    for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      new_array.push(Math.round(this.average_of_array(temparray)))
    }
    return new_array
  }

  average_of_array(array) {
    return array.reduce((total, sum) => total + sum)/(array.length)
  }

  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <section className="display_weather">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather.bind(this))}
          </tbody>
        </table>
        <style jsx>{`
          .display_weather {
            background-color: black;
            background-size: cover;
            height: 100vh;
            background-position: center;
            width: 100%;
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
