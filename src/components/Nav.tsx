import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useBreakpoints from '../hooks/useBreakpoints';
import MenuIcon from './MenuIcon';

import './nav.scss';

const Nav: React.FC = () => {
  const { active } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="nav">
      {
        // mobile navigation
        active === 'sm' && (
          <MenuIcon
            active={isMenuOpen}
            toggleActive={() => setIsMenuOpen(!isMenuOpen)}
          />
        )
      }
      <ul className={isMenuOpen ? 'nav__ul active' : 'nav__ul'}>
        <li className="nav__li">
          <NavLink
            className="nav__button"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__li">
          <button
            className="nav__button nav__button--coming-soon"
            onClick={() => setIsMenuOpen(false)}
          >
            Movies
          </button>
        </li>
        <li className="nav__li">
          <button
            className="nav__button nav__button--coming-soon"
            onClick={() => setIsMenuOpen(false)}
          >
            TV Shows
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
