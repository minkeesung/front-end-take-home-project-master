import React, { Component } from 'react'
import SearchBar from './search_bar'
import WeatherList from './weather_list'
import { connect } from 'react-redux'

class App extends Component {
  render() {

    return (
      <div>
        <SearchBar />
        <WeatherList />

      <style jsx global>{`
        body {
          margin: 0px;
        }


        @font-face {
          font-family: 'Tiempos Headline Semibold';
          src:  url('../fonts/TiemposHeadline-Semibold.otf') format('otf');
        }

        @font-face {
          font-family: 'Apercu Pro';
          src:  url('../fonts/apercu_regular_pro.otf') format('otf');
        }

      `}</style>
      </div>
    );
  }
}

function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(App)
