import axios from 'axios';
import { AppDispatch } from '../store';
import { Movie } from '../../types/baseTypes';

import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from './movieTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};

export const fetchMovieSuccess = (movie: Movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieFailure = (error: string) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (movieId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchMovieRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`
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
