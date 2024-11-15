import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../redux/search/searchActions';
import { RootState, AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Movie } from '../types/baseTypes';

const SearchPage = () => {
  const search = useSelector((state: RootState) => state.search);
  const [searchTerm, setSearchTerm] = useState<string>(search.searchTerm);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  return (
    <div className="search-page">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
      />

      {/* <button onClick={() => dispatch(fetchSearchResults(searchTerm))}>
        Search
      </button> */}
      <button onClick={() => setSearchParams({ query: searchTerm })}>
        Search
      </button>

      {search &&
        search.results.length > 0 &&
        search.results.map((movie: Movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="movie" key={movie.id}>
                <h2 key={movie.id}>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width="100"
                  height="auto"
                />
                <p>{movie.overview}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchPage;
