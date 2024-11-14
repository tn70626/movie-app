import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../types/baseTypes';
import axios from 'axios';

const MoviePage = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const params = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie>({});

  const fetchMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US&api_key=${apiKey}`
      )
      .then((response) => {
        const result: Movie = response.data;
        setMovie(result);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

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
