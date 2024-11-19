import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import axios from 'axios';

import heroMain from '../assets/hero-main.png';
import PopularMovies from '../components/PopularMovies';
import { fetchPopular } from '../redux/popular/popularActions';
import { AppDispatch, AppStore, RootState } from '../redux/store';
import { Movie } from '../types/baseTypes';

import './home-page.scss';

const HomePage = () => {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const popular = useSelector((state?: RootState) => state.popular);

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

      <PopularMovies movies={popular.movies} loading={popular.loading} />
    </div>
  );
};

export default HomePage;
