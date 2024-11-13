import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Return back to home</Link>
    </div>
  );
};

export default NotFound;
