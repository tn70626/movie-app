import React from 'react';

import heroMain from '../assets/hero-main.png';
import SearchBar from './SearchBar';

import './hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img className="hero__image" src={heroMain} alt="5 movie art posters" />
        <h1 className="hero__title">
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>

        <SearchBar />
        <div className="hero__gradient-bar" />
      </div>
    </div>
  );
};

export default Hero;
