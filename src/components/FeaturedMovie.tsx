import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchFeatureMovie } from '../redux/featuredMovie/featuredMovieActions';
import { AppDispatch, AppStore, RootState } from '../redux/store';

import './featured-movie.scss';

const FeaturedMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movieId = 698687;

  useEffect(() => {
    dispatch(fetchFeatureMovie(`${movieId}`));
  }, [dispatch]);

  const featuredMovie = useSelector<AppStore>((state) => state.featuredMovie);

  return (
    <div className="featured-movie">
      {featuredMovie.loading ? (
        <div>Loading...</div>
      ) : (
        featuredMovie.movie && (
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
        )
      )}
    </div>
  );
};

export default FeaturedMovie;