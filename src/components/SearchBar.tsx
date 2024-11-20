import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    setSearchParams({ query: searchTerm });
    navigate(`/search?query=${encodeURIComponent(searchTerm)}&page=1`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
      />

      <button onClick={() => handleSearch()}> Search </button>
    </div>
  );
};

export default SearchBar;
