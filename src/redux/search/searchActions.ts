import axios from 'axios';

import { SearchResult } from '../../types/baseTypes';
import { AppActions } from '../../types/reduxTypes';
import { AppDispatch } from '../store';
import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from './searchTypes';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchSearchRequest = (searchTerm: string): AppActions => {
  return {
    type: FETCH_SEARCH_REQUEST,
    payload: searchTerm,
  };
};

export const fetchSearchSuccess = (payload: SearchResult): AppActions => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: payload,
  };
};

export const fetchSearchFailure = (error: string): AppActions => {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error,
  };
};

export const fetchSearchResults = (
  searchTerm: string,
  page: string | null = '1',
) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchSearchRequest(searchTerm));
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`,
      )
      .then((response) => {
        const { data } = response;

        dispatch(fetchSearchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchSearchFailure(error.message));
      });
  };
};
