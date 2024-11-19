import { UnknownAction } from 'redux';

import { Movie } from '../../types/baseTypes';
import {
  FETCH_POPULAR_FAILURE,
  FETCH_POPULAR_REQUEST,
  FETCH_POPULAR_SUCCESS,
} from './popularTypes';

type InitialState = {
  loading: boolean;
  movies: Movie[];
  error: string;
};

// State
const initialState: InitialState = {
  loading: false,
  movies: [],
  error: '',
};

const popularReducer = (state = initialState, action: UnknownAction) => {
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

export default popularReducer;
