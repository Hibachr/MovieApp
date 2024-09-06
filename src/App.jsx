// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from "./pages/Home"
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import {BrowserRouter, Route, Routes } from "react-router-dom";


function App () {

  return (
    <div>
      <BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />

</Routes>
</BrowserRouter>
      </div>
  )
}

export default App
