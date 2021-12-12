import React from 'react';
import { moviesList } from '../mockdata';
import { useParams } from 'react-router';
import './trailer.css';

const Trailer = () => {
  const { id } = useParams();
  const datum = moviesList.filter((movie) => {
    return movie.id === Number(id);
  });

  return (
    <div>
      <div>
        <h1 className="heading">{datum[0].title}</h1>
        <iframe
          width="560"
          height="315"
          src={datum[0].trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="Title">{datum[0].description}</p>
      </div>
    </div>
  );
};

export default Trailer;
