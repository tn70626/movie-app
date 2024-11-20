import { UnknownAction } from 'redux';

import { Movie } from '../../types/baseTypes';
import {
  FETCH_FEATURED_MOVIE_FAILURE,
  FETCH_FEATURED_MOVIE_REQUEST,
  FETCH_FEATURED_MOVIE_SUCCESS,
} from './featuredMovieTypes';

type FeaturedMovieType = {
  loading: boolean;
  movie: Movie;
  error: string;
};

// State
const initialState: FeaturedMovieType = {
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
