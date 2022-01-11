const axios = require('axios');

// where are you running your app (local react by default is http://localhost:3000/
const clientId = '96aa74e34af84f399d9ebd04c7823845'; // clintId you can get at https://developer.spotify.com/dashboard
const redirectUrl = `${window.location.origin}/`; // Your redirect uri

// eslint-disable-next-line import/prefer-default-export
export function authUser() {
  const stateKey = 'spotify_auth_state';

  function getHashParams() {
    const hashParams = {};
    let e; const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  const params = getHashParams();

  const { access_token } = params;
  const { state } = params;
  const storedState = localStorage.getItem(stateKey);

  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    localStorage.removeItem(stateKey);
    console.log(state);
    if (access_token) {
      console.log(access_token);
      axios({
        url: 'https://api.spotify.com/v1/me',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        success(response) {
          const user = response;
        },
      });
    }

    localStorage.setItem(stateKey, state);
    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += `&client_id=${encodeURIComponent(clientId)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    url += `&state=${encodeURIComponent(state)}`;
    window.location = url;
  }
}
