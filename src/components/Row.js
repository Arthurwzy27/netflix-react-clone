import React, { useState, useEffect } from 'react';
import axios from './axios';

const Row = ({ title, fetchUrl}) => {
  const [movies, setMovies] = useState ([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>{ movies.title }</h2>
    </div>
  )
}

export default Row;
