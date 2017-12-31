
import axios from 'axios'
const API_KEY = '3bf455c3561826a033d58e438575c933'

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
// npm install --save redux-promiseappid=${API_KEY}&

export function fetchWeather(zip_code) {
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&zip=${zip_code},us`
  const request = axios.get(url)
  console.log('url', url)
  console.log('Request', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
