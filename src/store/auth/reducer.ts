import {
  DELETE_FROM_FAVORITES,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  SAVE_TO_FAVORITES,
} from './actionTypes';

const initialState = {
  newsList: [],
  favorites: [],
  pending: false,
  error: null,
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        newsList: action.payload.data,
        error: null,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        pending: false,
        newsList: [],
        error: action.payload.error,
      };
    case SAVE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => action.payload !== item),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
