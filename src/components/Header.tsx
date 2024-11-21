import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo-horizontal.svg';
import Nav from './Nav';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="The Movie Database (TMDB)"
        />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
