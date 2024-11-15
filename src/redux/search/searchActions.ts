import axios from 'axios';
import { AppDispatch } from '../store';
import { Movie } from '../../types/baseTypes';

import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  UPDATE_SEARCH_TERM,
} from './searchTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchSearchRequest = (searchTerm: string) => {
  return {
    type: FETCH_SEARCH_REQUEST,
    payload: searchTerm,
  };
};

export const fetchSearchSuccess = (results: Movie[]) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: results,
  };
};

export const fetchSearchFailure = (error: string) => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const updateSearchTerm = (searchTerm: string) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: searchTerm,
  };
};

export const fetchSearchResults = (searchTerm: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchSearchRequest(searchTerm));
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      )
      .then((response) => {
        const results: Movie[] = response.data;

        dispatch(fetchSearchSuccess(results));
      })
      .catch((error) => {
        dispatch(fetchSearchFailure(error.message));
      });
  };
};
