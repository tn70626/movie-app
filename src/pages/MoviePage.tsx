import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const params = useParams<{ movieId: string }>();

  return <div>MoviePage {params.movieId}</div>;
};

export default MoviePage;
