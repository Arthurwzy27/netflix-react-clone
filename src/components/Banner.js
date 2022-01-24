import React, { useState, useEffect } from 'react';
import './Banner.scss';
import axios from '../axios';
import requests from '../requests';
import Button from '@mui/material/Button';


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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>

      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <Button className="banner__button" variant="contained">Play</Button>
          <Button className="banner__button" variant="contained">My List</Button>
          <h2 className="banner__description">
            {movie?.overview}
          </h2>
        </div>
      </div>
    </header>
  )
}

export default Banner;
