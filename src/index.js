/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './services/serviceWorker';
import { DataLayer } from './services/DataLayer';
import reducer, { initialState } from './Redux/Counter/reducer';
import { SoundLayer } from './services/soundLayer';
import soundReducer, { soundInitialState } from './Redux/Counter/soundReducer';
import App from './App';

ReactDOM.render(

  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,

  document.getElementById('root'),

);
serviceWorker.unregister();
