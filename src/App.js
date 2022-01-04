import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Pages/Login';
import { getTokenFromUrl } from './services/api/auth';
import Home from './Pages/HomeScreen';
import { useDataLayerValue } from './services/DataLayer';

const spotify = new SpotifyWebApi();

const App = function () {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const tokenn = hash.access_token;
    console.log('hash', hash);
    if (tokenn) {
      dispatch({
        type: 'SET_TOKEN',
        token: tokenn,
      });

      spotify.setAccessToken(tokenn);

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
    }
  }, [token, dispatch]);

  return (
    <div>
      <Home spotify={spotify} />
    </div>
  );
};

export default App;
