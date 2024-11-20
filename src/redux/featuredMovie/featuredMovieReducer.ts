import { UnknownAction } from 'redux';

import { FeaturedMovie } from '../../types/baseTypes';
import {
  FETCH_FEATURED_MOVIE_FAILURE,
  FETCH_FEATURED_MOVIE_REQUEST,
  FETCH_FEATURED_MOVIE_SUCCESS,
} from './featuredMovieTypes';

// State
const initialState: FeaturedMovie = {
  loading: false,
  movie: null,
  error: '',
};

const featuredMovieReducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case FETCH_FEATURED_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_FEATURED_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        error: '',
      };
    case FETCH_FEATURED_MOVIE_FAILURE:
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

export default featuredMovieReducer;
