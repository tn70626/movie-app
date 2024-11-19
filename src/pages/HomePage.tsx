import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import axios from 'axios';

import './home-page.scss';

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const fetchPopular = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
      )
      .then((response) => {
        const result: Movie[] = response.data.results;
        setMovies(result);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const handleSearch = () => {
    setSearchParams({ query: searchTerm });
    navigate(`/search?query=${encodeURIComponent(searchTerm)}&page=1`);
  };

  return (
    <div className="home-page">
      <h1>Home</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie"
      />

      <button onClick={() => handleSearch()}> Search </button>

      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="movie" key={movie.id}>
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
            </Link>
          );
        })}
    </div>
  );
};

export default HomePage;
