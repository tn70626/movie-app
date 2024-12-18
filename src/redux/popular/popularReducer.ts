import { Movie } from '../../types/baseTypes';
import { PopularActionTypes } from '../../types/reduxTypes';
import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_REQUEST,
  FETCH_POPULAR_SUCCESS,
} from './popularTypes';

export type PopularState = {
  loading: boolean;
  movies: Movie[];
  error: string;
};

// State
const initialState: PopularState = {
  loading: false,
  movies: [],
  error: '',
};

export const popularReducer = (
  state: PopularState = initialState,
  action: PopularActionTypes,
): PopularState => {
  switch (action.type) {
    case FETCH_POPULAR_REQUEST:
      return {
        ...state,
        loading: true,
        movies: [],
        error: '',
      };
    case FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: '',
      };
    case FETCH_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
