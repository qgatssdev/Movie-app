import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title, posterUrl, description, rate, id }) => {
  return (
    <div className="movie">
      <img src={posterUrl} alt={title} />
      <div className="movie-info">
        <h1>{title}</h1>
        <span>{rate}</span>
      </div>
      <Link to={`Trailer/${id}`}>
        <div className="movie-over">
          <h2>Description:</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
