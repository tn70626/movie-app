import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

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

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
      )
      .then((response) => {
        const result: Movie[] = response.data.results;
        setMovies(result);
      })

      .catch((err) => console.error(err));
  };

  const fetchResults = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchString}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      )
      .then((response) => {
        const result: Movie[] = response.data.results;
        setMovies(result);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <main>
      <h1>Home</h1>
      <Link key={id} to={`/movie/${id}`}>
        Movie 123
      </Link>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search for a movie"
      />

      <button onClick={() => fetchResults()}> Search </button>

      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div className="movie">
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
          );
        })}
    </main>
  );
}

export default App;
