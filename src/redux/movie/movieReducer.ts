import { Cast, Movie } from '../../types/baseTypes';
import { MovieActionTypes } from '../../types/reduxTypes';
import {
  FETCH_MOVIE_CAST_FAILURE,
  FETCH_MOVIE_CAST_REQUEST,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from './movieTypes';

export type MovieState = {
  loading: boolean;
  movie: Movie | null;
  error: string;
  cast: {
    loading: boolean;
    cast: Cast[];
    error: string;
  };
};

// State
const initialState: MovieState = {
  loading: false,
  movie: null,
  error: '',
  cast: {
    loading: false,
    cast: [],
    error: '',
  },
};

export const movieReducer = (
  state = initialState,
  action: MovieActionTypes,
): MovieState => {
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
        movie: null,
        error: action.payload,
      };
    case FETCH_MOVIE_CAST_REQUEST:
      return {
        ...state,
        cast: {
          ...state.cast,
          loading: true,
          error: '',
        },
      };
    case FETCH_MOVIE_CAST_SUCCESS:
      return {
        ...state,
        cast: {
          ...state.cast,
          loading: false,
          cast: action.payload,
          error: '',
        },
      };
    case FETCH_MOVIE_CAST_FAILURE:
      return {
        ...state,
        cast: {
          ...state.cast,
          loading: false,
          cast: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
