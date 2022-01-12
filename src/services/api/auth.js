const axios = require('axios');

// where are you running your app (local react by default is http://localhost:3000/
const clientId = '96aa74e34af84f399d9ebd04c7823845'; // clintId you can get at https://developer.spotify.com/dashboard
const redirectUrl = `${window.location.origin}/`; // Your redirect uri

// eslint-disable-next-line import/prefer-default-export
export function authUser() {
  const stateKey = 'spotify_auth_state';

  const scope = 'user-read-private user-read-email';

  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += `&client_id=${encodeURIComponent(clientId)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
  url += `&state=${encodeURIComponent(stateKey)}`;
  window.location = url;
}
