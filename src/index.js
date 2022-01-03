/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import useDataLayerValue from './services/DataLayer';

import App from './App';

// REDUX
import store from './Redux/store';
import reducer, { initialState } from './Redux/Counter/reducer';

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <useDataLayerValue initialState={initialState} reducer={reducer}>
        <App />
      </useDataLayerValue>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),

);
