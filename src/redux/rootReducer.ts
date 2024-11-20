import featuredMovieReducer from './featuredMovie/featuredMovieReducer';
import movieReducer from './movie/movieReducer';
import popularReducer from './popular/popularReducer';
import searchReducer from './search/searchReducer';

const rootReducer = {
  movie: movieReducer,
  search: searchReducer,
  popular: popularReducer,
  featuredMovie: featuredMovieReducer,
};

export default rootReducer;
