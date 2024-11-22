import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import heroBottomFade from '../assets/hero-bottom-fade.png';
import Loading from '../components/Loading';
import MovieCast from '../components/MovieCast';
import SearchBar from '../components/SearchBar';
import UseFormatDate from '../hooks/useFormatDate';
import { fetchMovie, fetchMovieCast } from '../redux/movie/movieActions';
import { AppDispatch, RootState } from '../redux/store';

import './movie-page.scss';

const MoviePage: React.FC = () => {
  // Retrieve movieId from params
  const params = useParams<{ movieId: string | undefined }>();
  const movie = useSelector(
    (state: RootState): RootState['movie'] => state.movie,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params.movieId) {
      // Fetch movie and cast data
      dispatch(fetchMovie(params.movieId));
      dispatch(fetchMovieCast(params.movieId));
    }
  }, [params.movieId, dispatch]);

  // Calculate users score % out of 100
  const calcUserScore = (score: number): number => {
    return Math.floor(score * 10);
  };

  // Calculate runtime to h and m
  const calcRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="movie-page">
      {movie.loading ? (
        <Loading />
      ) : movie.movie ? (
        <div className="movie-page__movie">
          <div
            className="movie-page__backdrop"
            style={{
              backgroundImage: `url(${heroBottomFade}), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.movie.backdrop_path})`,
            }}
            key={movie.movie.id}
          />
          <div className="movie-page__content">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
              alt={movie.movie.title}
              className="movie-page__poster"
            />
            <div className="movie-page__info">
              <h1 className="movie-page__title">{movie.movie.title}</h1>
              <p className="movie-page__date">
                {UseFormatDate(movie.movie.release_date)}
              </p>

              <p className="movie-page__details">
                {
                  // Genres
                  movie.movie.genres.length > 0 &&
                    movie.movie.genres.reduce((genresString, genre, index) => {
                      if (index === 0) return genresString + genre.name;
                      return genresString + ', ' + genre.name;
                    }, '')
                }

                {
                  // Runtime
                  movie.movie.runtime &&
                    ` | ${calcRuntime(movie.movie.runtime)}`
                }
              </p>

              <p className="movie-page__overview">{movie.movie.overview}</p>
            </div>
            <div className="movie-page__user-score user-score">
              <h2 className="user-score__title">User Score</h2>
              <p className="user-score__score">
                {calcUserScore(movie.movie.vote_average)}
                <span className="user-score__percent">%</span>
              </p>
              <p className="user-score__votes">
                {movie.movie.vote_count} votes
              </p>
            </div>
          </div>
          {movie.cast.loading ? (
            <Loading />
          ) : (
            movie.cast.cast.length > 0 && (
              <div className="movie-page__cast">
                <h2 className="movie-page__cast-title">Top Billed Cast</h2>
                <MovieCast cast={movie.cast.cast} />
              </div>
            )
          )}
        </div>
      ) : (
        <div className="movie-page__error">
          <h2>Uh oh... No movie found.</h2>
          <p>{movie.error}</p>
          <h3>Please try a new search:</h3>
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default MoviePage;
