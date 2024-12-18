import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import HeroSearch from '../components/HeroSearch';
import Pagination from '../components/Pagination';
import SearchResults from '../components/SearchResults';
import { fetchSearchResults } from '../redux/search/searchActions';
import { AppDispatch, RootState } from '../redux/store';

const SearchPage: React.FC = () => {
  const search = useSelector<RootState, RootState['search']>(
    (state) => state.search,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieve query and page parameters
  const query = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    // Fetch search results when query or page changes
    if (query !== null) {
      dispatch(fetchSearchResults(query, page));
    }
  }, [query, page, dispatch]);

  // SetSearch Params for page updates
  const handlePageClick = (pageNumber: string) => {
    if (query !== null) setSearchParams({ query: query, page: pageNumber });
  };

  return (
    <div className="search-page">
      <HeroSearch
        totalResults={search.totalResults}
        searchTerm={search.searchTerm}
      />

      <div className="search-page__results">
        {search.loading ? (
          <p>is loading</p>
        ) : (
          <SearchResults movies={search.results} />
        )}
      </div>

      {search.totalPages > 1 && (
        <Pagination
          onPageChange={handlePageClick}
          pageCount={search.totalPages}
          currentPage={page}
        />
      )}
    </div>
  );
};

export default SearchPage;
