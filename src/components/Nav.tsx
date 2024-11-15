import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to={{ pathname: '/search', query: { the: 'query' } }}>
        Search Page
      </Link>
    </nav>
  );
};

export default Nav;
