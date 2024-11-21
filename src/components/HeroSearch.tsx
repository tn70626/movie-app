import React from 'react';

import SearchBar from './SearchBar';

import './hero-search.scss';

type HeroSearchProps = {
  totalResults: number;
  searchTerm: string;
};
const HeroSearch: React.FC<HeroSearchProps> = ({
  totalResults,
  searchTerm,
}) => {
  return (
    <div className="hero-search">
      <div className="hero-search__container">
        <SearchBar />
        <h1 className="hero-search__heading">
          {searchTerm
            ? `${totalResults} search results for "${searchTerm}"`
            : 'Millions of movies, TV shows and people to discover. Explore now.'}
        </h1>
      </div>
    </div>
  );
};

export default HeroSearch;
