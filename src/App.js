import React from 'react';
import Movie from './Components/Movie';
import { moviesList } from './Components/mockdata';

function App() {
  return (
    <>
      <header>
        <input className="search" type="search" placeholder="search..." />
      </header>
      <div className="movie-container">
        {moviesList.map((moviesList) => (
          <Movie key={moviesList.id} {...moviesList} />
        ))}
      </div>
    </>
  );
}

export default App;
