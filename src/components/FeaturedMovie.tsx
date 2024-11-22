import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import { fetchFeatureMovie } from '../redux/featuredMovie/featuredMovieActions';
import { AppDispatch, RootState } from '../redux/store';

import './featured-movie.scss';

const FeaturedMovie: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movieId = 698687;

  useEffect(() => {
    // Fetch featured movie data
    dispatch(fetchFeatureMovie(`${movieId}`));
  }, [dispatch]);

  const featuredMovie = useSelector<RootState, RootState['featuredMovie']>(
    (state) => state.featuredMovie,
  );

  return (
    <div className="featured-movie">
      {featuredMovie.loading ? (
        <Loading />
      ) : featuredMovie.movie ? (
        <>
          <h2 className="featured-movie__heading">Feature</h2>
          <div className="featured-movie__container">
            <div className="featured-movie__image-wrapper  ">
              <img
                className="featured-movie__image"
                src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${featuredMovie.movie.backdrop_path}`}
                alt={featuredMovie.movie.title}
              />
            </div>
            <div className="featured-movie__content">
              <h3 className="featured-movie__title">
                {featuredMovie.movie.title}
              </h3>
              <p className="featured-movie__overview">
                {featuredMovie.movie.overview}
              </p>
              <Link to={`/movie/${movieId}`} className="featured-movie__link">
                View Movie
              </Link>
            </div>{' '}
          </div>
        </>
      ) : (
        <>
          <h2 className="featured-movie__heading">
            Unable to load featured movie
          </h2>
          {featuredMovie.error && <p>{featuredMovie.error}</p>}
        </>
      )}
    </div>
  );
};

export default FeaturedMovie;
