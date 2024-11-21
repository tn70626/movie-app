import axios from 'axios';
import { Dispatch } from 'redux';

import { Movie } from '../../types/baseTypes';
import { AppActions } from '../../types/reduxTypes';
import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_REQUEST,
  FETCH_POPULAR_SUCCESS,
} from './popularTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularRequest = (): AppActions => {
  return {
    type: FETCH_POPULAR_REQUEST,
  };
};

export const fetchPopularSuccess = (movies: Movie[]): AppActions => {
  return {
    type: FETCH_POPULAR_SUCCESS,
    payload: movies,
  };
};

export const fetchPopularFailure = (error: string): AppActions => {
  return {
    type: FETCH_POPULAR_FAILURE,
    payload: error,
  };
};

export const fetchPopular = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchPopularRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      )
      .then((response) => {
        const movies = response.data.results;

        dispatch(fetchPopularSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchPopularFailure(error.message));
      });
  };
};
