import React from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../types/baseTypes';

import './popular-movies.scss';

type PopularMoviesProps = {
  movies: Movie[];
  loading: boolean;
};

const PopularMovies: React.FC<PopularMoviesProps> = ({ movies, loading }) => {
  const renderMovies = (movies: Movie[]) => {
    if (movies.length) {
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
      return <h2>No movies found.</h2>;
    }
  };

  return (
    <div className="popular-movies">
      <h2 className="popular-movies__title">Popular</h2>
      {loading ? <div>Loading...</div> : renderMovies(movies)}
    </div>
  );
};

export default PopularMovies;
