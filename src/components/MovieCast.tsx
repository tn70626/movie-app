import React from 'react';

import { Cast } from '../types/baseTypes';

import './movie-cast.scss';

type MovieCastProps = {
  cast: Cast[];
};

const MovieCast: React.FC<MovieCastProps> = ({ cast }) => {
  return (
    <div className="movie-cast">
      {cast.map((actor) => {
        return (
          <div key={actor.id} className="movie-cast__container">
            <div className="movie-cast__image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="movie-cast__image"
              />
            </div>
            <p className="movie-cast__name">{actor.name}</p>
            <p className="movie-cast__character">{actor.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCast;
