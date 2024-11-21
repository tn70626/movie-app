import axios from 'axios';

import { Movie } from '../../types/baseTypes';
import { Cast } from '../../types/baseTypes';
import { AppActions } from '../../types/reduxTypes';
import { AppDispatch } from '../store';
import {
  FETCH_MOVIE_CAST_FAILURE,
  FETCH_MOVIE_CAST_REQUEST,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from './movieTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieRequest = (): AppActions => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};

export const fetchMovieSuccess = (movie: Movie): AppActions => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieFailure = (error: string): AppActions => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovieCastRequest = (): AppActions => {
  return {
    type: FETCH_MOVIE_CAST_REQUEST,
  };
};

export const fetchMovieCastSuccess = (cast: Cast[]): AppActions => {
  return {
    type: FETCH_MOVIE_CAST_SUCCESS,
    payload: cast,
  };
};

export const fetchMovieCastFailure = (error: string): AppActions => {
  return {
    type: FETCH_MOVIE_CAST_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (movieId: string) => {
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

export const fetchMovieCast = (movieId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchMovieRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${apiKey}`,
      )
      .then((response) => {
        const cast = response.data.cast.slice(0, 10);

        dispatch(fetchMovieCastSuccess(cast));
      })
      .catch((error) => {
        dispatch(fetchMovieCastFailure(error.message));
      });
  };
};
