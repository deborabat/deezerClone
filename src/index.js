/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './services/serviceWorker';
// import { DataLayer } from './services/DataLayer';
// import reducer, { initialState } from './Redux/Counter/reducer';
// import { SoundLayer } from './services/soundLayer';
// import soundReducer, { soundInitialState } from './Redux/Counter/soundReducer';
import App from './App';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),

);
// serviceWorker.unregister();
