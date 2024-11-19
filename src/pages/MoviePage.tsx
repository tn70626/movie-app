import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchMovie } from '../redux/movie/movieActions';
import { AppDispatch, RootState } from '../redux/store';
import { Movie } from '../types/baseTypes';

const MoviePage = () => {
  const params = useParams<{ movieId: string | undefined }>();
  const movie: Movie = useSelector((state: RootState) => state.movie.movie);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params.movieId) {
      dispatch(fetchMovie(params.movieId));
    }
  }, [params.movieId, dispatch]);

  return (
    <div>
      MoviePage {params.movieId}
      {movie && (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2 key={movie.id}>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
