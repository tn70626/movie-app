import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import './search-bar.scss';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const defaultTerm = searchParams.get('query')
    ? searchParams.get('query')
    : '';

  const [searchTerm, setSearchTerm] = useState<string>(`${defaultTerm}`);

  const handleSearch = () => {
    return location.pathname === '/search'
      ? setSearchParams({ query: searchTerm, page: '1' })
      : navigate(`/search?query=${encodeURIComponent(searchTerm)}&page=1`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
        className="search-bar__input"
      />

      <button className="search-bar__button" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
