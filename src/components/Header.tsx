import { Link } from 'react-router-dom';

import logo from '../assets/logo-horizontal.svg';
import Nav from './Nav';

import './header.scss';

const Header = () => {
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
