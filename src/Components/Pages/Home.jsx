import React, { useState } from 'react';
import Movie from '../Movie';
import { moviesList } from '../mockdata';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <header>
        <input
          className="search"
          type="search"
          placeholder="search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </header>
      <div className="movie-container">
        {moviesList
          .filter((moviesList) => {
            if (searchTerm === '') {
              return moviesList;
            } else if (
              moviesList.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return moviesList;
            }
            return null;
          })
          .map((moviesList) => (
            <Movie {...moviesList} key={moviesList.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
