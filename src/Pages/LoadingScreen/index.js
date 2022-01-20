import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import { Container } from './styles';

const axios = require('axios');

// eslint-disable-next-line react/function-component-definition
export default function LoadingScreen() {
  const [loadinng, setLoading] = useState(true);

  const navigate = useNavigate();
  function getHashParams() {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    const params = getHashParams();
    console.log(params, 'get');
    const accessToken = params.access_token;
    const { state } = params;

    localStorage.setItem('accessToken', accessToken);

    if (accessToken) {
      console.log(accessToken, 'function');

      navigate('/Home');
    }
  }, []);

  return (
    <Container>
      {loadinng && (
        <Spinner size={120} spinnerColor="#333" spinnerWidth={2} visible />
      )}
    </Container>
  );
}
