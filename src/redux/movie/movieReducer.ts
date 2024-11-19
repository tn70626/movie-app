import { UnknownAction } from 'redux';

import { Movie } from '../../types/baseTypes';
import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from './movieTypes';

type InitialState = {
  loading: boolean;
  movie: Movie;
  error: string;
};

// State
const initialState: InitialState = {
  loading: false,
  movie: null,
  error: '',
};

const movieReducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        error: '',
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        movie: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
