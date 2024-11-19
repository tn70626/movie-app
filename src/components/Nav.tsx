import { Link } from 'react-router-dom';

import useBreakpoints from '../hooks/useBreakpoints';

const Nav = () => {
  const { active } = useBreakpoints();
  return (
    <nav>
      <p>active: {active}</p>
      {active === 'sm' ? <h2>mobile nav</h2> : <p>desktop nav</p>}
      <Link to="/">Home</Link>
      <Link to="/search">Search Page</Link>
    </nav>
  );
};

export default Nav;
