import { Movie } from '../../types/baseTypes';
import { SearchActionTypes } from '../../types/reduxTypes';
import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
} from './searchTypes';

export type SearchState = {
  loading: boolean;
  results: Movie[];
  error: string;
  totalPages: number;
  totalResults: number;
  searchTerm: string;
  page: number;
};

// State
const initialState: SearchState = {
  loading: false,
  results: [],
  error: '',
  totalPages: 1,
  totalResults: 0,
  searchTerm: '',
  page: 0,
};

export const searchReducer = (
  state: SearchState = initialState,
  action: SearchActionTypes,
): SearchState => {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        searchTerm: action.payload,
        results: [],
        error: '',
        totalPages: 1,
        totalResults: 0,
        page: 0,
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        totalPages: action.payload.total_pages,
        page: action.payload.page,
        totalResults: action.payload.total_results,
        error: '',
      };
    case FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        results: [],
        totalPages: 1,
        totalResults: 0,
        searchTerm: '',
        page: 0,
        error: action.payload,
      };
    default:
      return state;
  }
};
