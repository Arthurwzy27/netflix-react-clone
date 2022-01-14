import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random()*request.data.results.length -1)
        ]
      );
    return request;
  }
  fetchData();
  }, []);

  return (
    <header className="banner">
      <div className="banner__contents">
        <h1>
          {movie?.name || movie?.original_name}
        </h1>
      </div>
    </header>
  )
}

export default Banner;
