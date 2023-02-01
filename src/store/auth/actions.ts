import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  DELETE_FROM_FAVORITES,
  SAVE_TO_FAVORITES,
} from './actionTypes';
import {
  FetchNewsRequest,
  NewsSuccess,
  NewsFailure,
  NewsFailurePayload,
  NewsSuccessPayload,
  SaveToFavoritesPayload,
  SaveToFavorites,
  DeleteFromFavorites,
} from './types';

export const fetchNews = (): FetchNewsRequest => ({
  type: FETCH_NEWS_REQUEST,
});

export const newsFetchedSuccess = (
  payload: NewsSuccessPayload,
): NewsSuccess => ({
  type: FETCH_NEWS_SUCCESS,
  payload,
});

export const newsFetchedFailed = (
  payload: NewsFailurePayload,
): NewsFailure => ({
  type: FETCH_NEWS_FAILURE,
  payload,
});

export const saveToFavorites = (
  payload: SaveToFavoritesPayload,
): SaveToFavorites => ({
  type: SAVE_TO_FAVORITES,
  payload,
});

export const deleteFromFavorites = (
  payload: SaveToFavoritesPayload,
): DeleteFromFavorites => ({
  type: DELETE_FROM_FAVORITES,
  payload,
});
