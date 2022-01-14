import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
        Math.floor(Math.random()*request.data.results.length -1)]
      );
  }
  fetchData();
  }, [requests.fetchNetflixOriginals]);

  return (
    <header>

    </header>
  )
}

export default Banner;
