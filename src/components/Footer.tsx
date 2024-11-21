import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo-stacked.svg';

import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo">
        <img src={Logo} />
      </Link>
      <div className="footer__links">
        <a href="#" className="footer__link">
          Terms of Use
        </a>
        <a href="#" className="footer__link">
          Privacy Policy
        </a>
      </div>

      <p>©2024 Copyright legal text.</p>
    </footer>
  );
};

export default Footer;
