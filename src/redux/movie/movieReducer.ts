import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from './movieTypes';

// State
const initialState = {
  loading: false,
  movie: {},
  error: '',
};

const movieReducer = (state = initialState, action) => {
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
