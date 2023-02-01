import {NewsItem} from '../../model/news';
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  SAVE_TO_FAVORITES,
  FETCH_NEWS_SUCCESS,
  DELETE_FROM_FAVORITES,
} from './actionTypes';

export interface NewsSuccessPayload {
  data: string[];
}

export interface NewsFailurePayload {
  error: string;
}

export interface SaveToFavoritesPayload {
  item: NewsItem;
}

export interface FetchNewsRequest {
  type: typeof FETCH_NEWS_REQUEST;
}

export type NewsSuccess = {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: NewsSuccessPayload;
};

export type NewsFailure = {
  type: typeof FETCH_NEWS_FAILURE;
  payload: NewsFailurePayload;
};

export type SaveToFavorites = {
  type: typeof SAVE_TO_FAVORITES;
  payload: SaveToFavoritesPayload;
};

export type DeleteFromFavorites = {
  type: typeof DELETE_FROM_FAVORITES;
  payload: SaveToFavoritesPayload;
};
