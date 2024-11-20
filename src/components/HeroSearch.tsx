import SearchBar from './SearchBar';

import './hero-search.scss';

type PropsTypes = {
  totalResults: number;
  searchTerm: string;
};
const HeroSearch = ({ totalResults, searchTerm }: PropsTypes) => {
  return (
    <div className="hero-search">
      <div className="hero-search__container">
        <SearchBar />
        <h1 className="hero-search__heading">
          {totalResults && searchTerm
            ? `${totalResults} search results for ${searchTerm}`
            : 'Millions of movies, TV shows and people to discover. Explore now.'}
        </h1>
      </div>
    </div>
  );
};

export default HeroSearch;
