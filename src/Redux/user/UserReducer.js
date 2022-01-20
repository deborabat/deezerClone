import { Types } from './types';

export const initialState = {
  user: null,
  token: null,
  playlists: [],
  spotify: null,
  releases: null,
  playing: false,
  item: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case Types.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case Types.USER_ERROR:
      return {
        ...state,
        user: action.payload.error,
        loading: false,
      };
    case Types.RELEASES_LOADING:
      return {
        ...state,
        releases: action.payload.releases,
        loading: true,
      };
    case Types.RELEASES_SUCCESS:
      return {
        ...state,
        releases: action.payload.releases,
        loading: false,
      };
    case Types.RELEASES_ERROR:
      return {
        ...state,
        releases: action.payload.releases,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
