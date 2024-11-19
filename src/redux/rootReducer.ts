import movieReducer from './movie/movieReducer';
import popularReducer from './popular/popularReducer';
import searchReducer from './search/searchReducer';

const rootReducer = {
  movie: movieReducer,
  search: searchReducer,
  popular: popularReducer,
};

export default rootReducer;
