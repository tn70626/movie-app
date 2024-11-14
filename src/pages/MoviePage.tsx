import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchMovie } from '../redux/movie/movieActions';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

const MoviePage = () => {
  const params = useParams<{ movieId: string | undefined }>();
  const movie = useSelector((state: RootState) => state.movie.movie);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params.movieId) dispatch(fetchMovie(params.movieId));
  }, [params.movieId, dispatch]);

  return (
    <div>
      MoviePage {params.movieId}
      {movie && (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2 key={movie.id}>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="100"
            height="auto"
          />
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
