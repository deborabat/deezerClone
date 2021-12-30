import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './types';

const initialState = {
  loading: true,
  data: {},
  error: null,
};

export default function reducer(action, state = initialState) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:

      return state;
  }
}
