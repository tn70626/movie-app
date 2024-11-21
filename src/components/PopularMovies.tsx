import React from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../types/baseTypes';
import Loading from './Loading';

import './popular-movies.scss';

type PopularMoviesProps = {
  movies: Movie[];
  loading: boolean;
  error: string;
};

const PopularMovies: React.FC<PopularMoviesProps> = ({
  movies,
  loading,
  error,
}) => {
  const renderMovies = (movies: Movie[]) => {
    if (movies.length > 0) {
      return (
        <div className="movie-tiles">
          {movies.map((movie, index) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="movie-tiles__tile"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-tiles__poster"
                />
                <span className="movie-tiles__rank">{index + 1}</span>
              </Link>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="popular-movies__error">
          <h2>Unable to load popular movies</h2>
          {error && <p>{error}</p>}
        </div>
      );
    }
  };

  return (
    <div className="popular-movies">
      <h2 className="popular-movies__title">Popular</h2>
      {loading ? <Loading /> : renderMovies(movies)}
    </div>
  );
};

export default PopularMovies;
