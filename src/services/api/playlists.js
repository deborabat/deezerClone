const axios = require('axios');

// eslint-disable-next-line import/prefer-default-export
export async function getfeaturedPlaylists() {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/featured-playlists?country=br&locale=sp_br&limit=5&offset=5',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}
