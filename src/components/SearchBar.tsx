import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import './search-bar.scss';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) setSearchTerm(query);
  }, [searchParams]);

  const handleSearch = () => {
    return location.pathname === '/search'
      ? setSearchParams({ query: searchTerm, page: '1' })
      : navigate(`/search?query=${encodeURIComponent(searchTerm)}&page=1`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
        className="search-bar__input"
        onKeyDown={handleKeyDown}
      />

      <button className="search-bar__button" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
