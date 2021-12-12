import React from 'react';
import Trailer from './Components/Pages/Trailer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Trailer/:id" exact element={<Trailer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
