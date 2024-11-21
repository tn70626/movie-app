import { configureStore } from '@reduxjs/toolkit';

import { featuredMovieReducer } from './featuredMovie/featuredMovieReducer';
import { movieReducer } from './movie/movieReducer';
import { popularReducer } from './popular/popularReducer';
import { searchReducer } from './search/searchReducer';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    search: searchReducer,
    popular: popularReducer,
    featuredMovie: featuredMovieReducer,
  },
  devTools: true,
});

// Get the type of our store variable
// export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>;

// export type AppDispatch = AppStore['dispatch'];

// export type AppState = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
