import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FeaturedMovie from '../components/FeaturedMovie';
import Hero from '../components/Hero';
import PopularMovies from '../components/PopularMovies';
import { fetchPopular } from '../redux/popular/popularActions';
import { AppDispatch, RootState } from '../redux/store';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const popular = useSelector<RootState, RootState['popular']>(
    (state) => state.popular,
  );

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  return (
    <div className="home-page">
      <Hero />

      <PopularMovies movies={popular.movies} loading={popular.loading} />

      <FeaturedMovie />
    </div>
  );
};

export default HomePage;
