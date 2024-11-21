import { Movie } from '../../types/baseTypes';
import { FeaturedMovieActionTypes } from '../../types/reduxTypes';
import {
  FETCH_FEATURED_MOVIE_FAILURE,
  FETCH_FEATURED_MOVIE_REQUEST,
  FETCH_FEATURED_MOVIE_SUCCESS,
} from './featuredMovieTypes';

export type FeaturedMovieState = {
  loading: boolean;
  movie: Movie | null;
  error: string;
};

// State
const initialState: FeaturedMovieState = {
  loading: false,
  movie: null,
  error: '',
};

export const featuredMovieReducer = (
  state = initialState,
  action: FeaturedMovieActionTypes,
): FeaturedMovieState => {
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
        movie: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
