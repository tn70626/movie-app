import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../redux/search/searchActions';
import { RootState, AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Movie } from '../types/baseTypes';
import Pagination from '../components/Pagination';
import ReactPaginate from 'react-paginate';

const SearchPage = () => {
  const search = useSelector((state: RootState) => state.search);
  const [searchTerm, setSearchTerm] = useState<string>(search.searchTerm);
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
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
      />

      <button onClick={() => setSearchParams({ query: searchTerm, page: '1' })}>
        Search
      </button>

      {search.totalResults && search.searchTerm && (
        <h2>
          {search.totalResults} search results for “{search.searchTerm}”
        </h2>
      )}
      <p>Pagination</p>

      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={(page) => handlePageClick(`${page.selected + 1}`)}
        pageRangeDisplayed={3}
        pageCount={search.totalPages}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName="pagination"
        pageLinkClassName="pagination__link"
        pageClassName="pagination__page"
        activeClassName="pagination__page--active"
        activeLinkClassName="pagination__link--active"
        disabledLinkClassName="pagination__link--disabled"
      /> */}

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
            <div className="search-page__results">
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
