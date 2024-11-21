import axios from 'axios';

import { Movie } from '../../types/baseTypes';
import { AppActions } from '../../types/reduxTypes';
import { AppDispatch } from '../store';
import {
  FETCH_FEATURED_MOVIE_FAILURE,
  FETCH_FEATURED_MOVIE_REQUEST,
  FETCH_FEATURED_MOVIE_SUCCESS,
} from './featuredMovieTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieRequest = (): AppActions => {
  return {
    type: FETCH_FEATURED_MOVIE_REQUEST,
  };
};

export const fetchMovieSuccess = (movie: Movie): AppActions => {
  return {
    type: FETCH_FEATURED_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieFailure = (error: string): AppActions => {
  return {
    type: FETCH_FEATURED_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchFeatureMovie = (movieId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchMovieRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`,
      )
      .then((response) => {
        const movie = response.data;

        dispatch(fetchMovieSuccess(movie));
      })
      .catch((error) => {
        dispatch(fetchMovieFailure(error.message));
      });
  };
};
