import React, { useState } from 'react';
import Movie from './Components/Movie';
import { moviesList } from './Components/mockdata';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
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
          })
          .map((moviesList, key) => (
            <Movie {...moviesList} key={key} />
          ))}
      </div>
    </>
  );
}

export default App;
