import React from 'react';
import { Link } from 'react-router-dom';

import noImage from '../assets/no-image.svg';
import useBreakpoints from '../hooks/useBreakpoints';
import UseFormatDate from '../hooks/useFormatDate';
import { Movie } from '../types/baseTypes';

import './search-results.scss';

type SearchResultsProps = {
  movies: Movie[];
};
const SearchResults: React.FC<SearchResultsProps> = ({ movies }) => {
  const formatDate = (date: string) => UseFormatDate(date);
  const { active } = useBreakpoints();

  // Truncate overview text for device width
  const formatOverview = (overview: string) => {
    const amount = active === 'sm' ? 150 : 300;
    return overview.length > amount
      ? `${overview.substring(0, amount)}...`
      : overview;
  };

  return (
    <div className="search-results">
      {movies.map((movie: Movie, index) => {
        return (
          <Link
            className="search-results__movie"
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              className="search-results__movie-poster"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noImage
              }
              alt={movie.title}
              width="100"
              height="auto"
            />
            <div className="search-results__movie-content">
              <h2 className="search-results__movie-title" key={movie.id}>
                {movie.title}
              </h2>

              <p>{formatDate(movie.release_date)}</p>

              <p className="search-results__movie-overview">
                {formatOverview(movie.overview)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
