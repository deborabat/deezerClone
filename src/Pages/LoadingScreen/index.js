import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import SpotifyWebApi from 'spotify-web-api-js';
import { Container } from './styles';

const axios = require('axios');

// eslint-disable-next-line react/function-component-definition
export default function LoadingScreen() {
  const [loadinng, setLoading] = useState('true');

  const navigate = useNavigate();
  const spotify = new SpotifyWebApi();
  function getHashParams() {
    const hashParams = {};
    let e; const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    const params = getHashParams();
    console.log(params, 'get');
    const accessToken = params.access_token;
    const { state } = params;

    console.log(accessToken, 'token');

    localStorage.setItem(accessToken, accessToken);

    if (accessToken) {
      console.log(accessToken, 'function');
      // setLoading = ('false');

      axios({
        url: 'https://api.spotify.com/v1/me',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        success(response) {
          const user = response;
          console.log(user, 'user');
          navigate('/Home');
        },
      });
    }
  }, []);

  return (
    <Container>
      {loadinng
        && <Spinner size={120} spinnerColor="#333" spinnerWidth={2} visible />}
    </Container>
  );
}
