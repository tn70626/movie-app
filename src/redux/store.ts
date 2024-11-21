import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { featuredMovieReducer } from './featuredMovie/featuredMovieReducer';
import { movieReducer } from './movie/movieReducer';
import { popularReducer } from './popular/popularReducer';
import { searchReducer } from './search/searchReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  popular: popularReducer,
  featuredMovie: featuredMovieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
