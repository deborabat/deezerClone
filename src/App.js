import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Routes';

import { getTokenFromUrl } from './services/api/auth';
import Home from './Pages/HomeScreen';
import useDataLayerValue from './services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      console.log('[token]', token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1E34Ucml4HHx1w').then((playlist) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div>{token ? <Home spotify={spotify} /> : <Login />}</div>
  );
}
