import movieReducer from './movie/movieReducer';
import searchReducer from './search/searchReducer';

const rootReducer = {
  movie: movieReducer,
  search: searchReducer,
};

export default rootReducer;
