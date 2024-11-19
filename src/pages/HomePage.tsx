import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import axios from 'axios';

import heroMain from '../assets/hero-main.png';
import { fetchPopular } from '../redux/popular/popularActions';
import { AppDispatch, RootState } from '../redux/store';
import { Movie } from '../types/baseTypes';

import './home-page.scss';

const HomePage = () => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const popular = useSelector((state: RootState) => state.popular);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const handleSearch = () => {
    setSearchParams({ query: searchTerm });
    navigate(`/search?query=${encodeURIComponent(searchTerm)}&page=1`);
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <div className="home-page__hero-container">
          <img
            className="home-page__hero-image"
            src={heroMain}
            alt="5 movie art posters"
          />
          <h1 className="home-page__title">
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>

          <div className="home-page__search">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a movie"
            />

            <button onClick={() => handleSearch()}> Search </button>
          </div>
        </div>
      </div>

      {popular.movies &&
        popular.movies.length > 0 &&
        popular.movies.map((movie) => {
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
