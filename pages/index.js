import { Component } from 'react';
import Head from 'next/head';
import App from '../components/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Take-home Project</title>
        </Head>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <App />
        </Provider>
      </div>
    )
  }
}
