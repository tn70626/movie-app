import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { fetchSearchResults } from '../redux/search/searchActions';
import { AppDispatch, RootState } from '../redux/store';
import { Movie } from '../types/baseTypes';

const SearchPage = () => {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    if (query !== null) {
      dispatch(fetchSearchResults(query, page));
    }
  }, [query, page, dispatch]);

  const handlePageClick = (pageNumber: string) => {
    if (query !== null) setSearchParams({ query: query, page: pageNumber });
  };

  return (
    <div className="search-page">
      <SearchBar />

      {search.totalResults && search.searchTerm && (
        <h2>
          {search.totalResults} search results for “{search.searchTerm}”
        </h2>
      )}
      <p>Pagination</p>

      <Pagination
        onPageChange={handlePageClick}
        pageCount={search.totalPages}
      />

      {search.loading ? (
        <p>is loading</p>
      ) : (
        search.results.length > 0 &&
        search.results.map((movie: Movie) => {
          return (
            <div key={movie.id} className="search-page__results">
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <div className="movie" key={movie.id}>
                  <h2 key={movie.id}>{movie.title}</h2>
                  <p>{movie.release_date}</p>
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      width="100"
                      height="auto"
                    />
                  ) : (
                    '[no image available]'
                  )}
                  <p>{movie.overview}</p>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchPage;
