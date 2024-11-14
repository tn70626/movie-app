import Nav from './Nav';
import logo from '../assets/logo-horizontal.svg';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="The Movie Database (TMDB)" width="154" height="20" />
      <Nav />
    </div>
  );
};

export default Header;
