import { NavLink } from 'react-router-dom';

import useBreakpoints from '../hooks/useBreakpoints';

import './nav.scss';

const Nav = () => {
  const { active } = useBreakpoints();
  return (
    <nav className="nav">
      {active === 'sm' ? (
        <h2>mobile nav</h2>
      ) : (
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__li">
            <NavLink to="/search">Search Page</NavLink>
          </li>
          <li className="nav__li">
            <a href="#">TV Shows</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
