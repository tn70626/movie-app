import React from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/404.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './not-found.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <Header />
      <div className="not-found__container">
        <img className="not-found__image" src={heroImage} alt="404 error" />
        <h1 className="not-found__heading">Uh oh... Page Not Found</h1>
        <Link className="not-found__link" to="/">
          Return back to home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
