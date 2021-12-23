import {
  actionSearch,
  actionSearchSuccess,
  actionSearchError,
} from "../state/search/searchAction";

export default function fetchSearch(query) {

  return (dispatch) => {
    dispatch(actionSearch());
    const BASE_URL = 'https://api.deezer.com/search/';
    const PROXY = 'https://cors-anywhere.herokuapp.com';
    const band = this.state.userInput.replace(/ /g,"-");
    const fetch_url = `${PROXY}/${BASE_URL}/artist/?q= ` + band + '&index=0&limit=1&output=json';
    fetch(fetch_url, {method: 'GET', mode: 'cors'})
    // fetch(`/search/album?q=${query}&limit=3`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
          throw res.error;
      }

      dispatch(actionSearchSuccess(res));

      return res;
    })
    .catch((error) => {
      dispatch(actionSearchError(error));
    });
};
}