import { Types } from './types';

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case Types.TESTE:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default reducer;
