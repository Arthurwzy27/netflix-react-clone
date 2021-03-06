import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.scss';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState ([]);
  const [trailerUrl, setTrailerUrl] = useState ("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request
    }
    fetchData();
  }, [fetchUrl]); // variable fetchUrl is outside of the block so we need to pass it here!!

  // Options from react-youtube npm
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        // On Youtube => url-Link= https://www.youtube.com/watch?v=XtMThy8QKqU&t=7661s
        // Creating const to grab only the url after the "v"
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(error => console.log(error))
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title} />

        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
