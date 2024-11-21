import {
  FETCH_FEATURED_MOVIE_FAILURE,
  FETCH_FEATURED_MOVIE_REQUEST,
  FETCH_FEATURED_MOVIE_SUCCESS,
} from '../redux/featuredMovie/featuredMovieTypes';
import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from '../redux/movie/movieTypes';
import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_REQUEST,
  FETCH_POPULAR_SUCCESS,
} from '../redux/popular/popularTypes';
import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from '../redux/search/searchTypes';
import { Movie, SearchResult } from './baseTypes';

// Popular Actions
export type fetchPopularFailureAction = {
  type: typeof FETCH_POPULAR_FAILURE;
  payload: string;
};

export type fetchPopularRequestAction = {
  type: typeof FETCH_POPULAR_REQUEST;
};

export type fetchPopularSuccessAction = {
  type: typeof FETCH_POPULAR_SUCCESS;
  payload: Movie[];
};

export type PopularActionTypes =
  | fetchPopularFailureAction
  | fetchPopularRequestAction
  | fetchPopularSuccessAction;

// Search Actions
export type fetchSearchFailureAction = {
  type: typeof FETCH_SEARCH_FAILURE;
  payload: string;
};

export type fetchSearchRequestAction = {
  type: typeof FETCH_SEARCH_REQUEST;
  payload: string;
};

export type fetchSearchSuccessAction = {
  type: typeof FETCH_SEARCH_SUCCESS;
  payload: SearchResult;
};

export type SearchActionTypes =
  | fetchSearchFailureAction
  | fetchSearchSuccessAction
  | fetchSearchRequestAction;

// Featured Movie Actions
export type fetchFeaturedMovieFailureAction = {
  type: typeof FETCH_FEATURED_MOVIE_FAILURE;
  payload: string;
};

export type fetchFeaturedMovieRequestAction = {
  type: typeof FETCH_FEATURED_MOVIE_REQUEST;
};

export type fetchFeaturedMovieSuccessAction = {
  type: typeof FETCH_FEATURED_MOVIE_SUCCESS;
  payload: Movie;
};

export type FeaturedMovieActionTypes =
  | fetchFeaturedMovieFailureAction
  | fetchFeaturedMovieRequestAction
  | fetchFeaturedMovieSuccessAction;

// Movie Actions
export type fetchMovieFailureAction = {
  type: typeof FETCH_MOVIE_FAILURE;
  payload: string;
};

export type fetchMovieRequestAction = {
  type: typeof FETCH_MOVIE_REQUEST;
  payload: string;
};

export type fetchMovieSuccessAction = {
  type: typeof FETCH_MOVIE_SUCCESS;
  payload: Movie;
};

export type MovieActionTypes =
  | fetchMovieFailureAction
  | fetchMovieRequestAction
  | fetchMovieSuccessAction;

export type AppActions =
  | PopularActionTypes
  | SearchActionTypes
  | FeaturedMovieActionTypes
  | MovieActionTypes;
