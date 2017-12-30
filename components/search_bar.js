import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
import Ionicon from 'react-ionicons'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }
  render() {
    return (
      <div>
        <section className="search_bar">
          <h1>Weather app</h1>
          <h2>Type in your zip code to see how awful the weather is<br />in your area this week.</h2>
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="000000"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <div>
                <button type="submit" className="btn brn-secondary">Submit</button>
              </div>
            </span>
          </form>
        </section>
        <style jsx>{`
          h1 {
            color: white;
          }

          h2 {
            color: white;
          }

          .search_bar {
            background-color: #ff2700;
            background-size: cover;
            height: 100vh;
            width: 100%;
            padding: 0;
            box-sizing: border-box;
          }

          .form-control {
            background-color: #ff2700;
            border: 2px solid white;
            width: 50%;
            height: 50px;
            font-size: 24px;
            color: white;
            padding: 0px 0px 0px 20px;
          }

          ::placeholder {
              color: white;
              opacity: 1; /* Firefox */
          }

          :-ms-input-placeholder { /* Internet Explorer 10-11 */
             color: white;
          }

          ::-ms-input-placeholder { /* Microsoft Edge */
             color: white;
          }

        `}</style>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
