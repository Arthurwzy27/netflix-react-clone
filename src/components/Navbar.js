import { Link } from '@mui/material';
import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
// import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './homePage';
// import Series from './series';
// import Movies from './movies';
// import Trending from './trending';
// import List from './list';




const Navbar = () => {
  return (
    // <BrowserRouter>
      <div className="navbar__header">
          <img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix-logo" href="#"/>
        <div className="navbar__primary">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/series">Series</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/trending">Trending Now</Link>
            <Link to="/list">My List</Link>
          </ul>
          {/* <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/list" element={<List/>} />
          </Routes> */}
        </div>
        <div className="navbar__secondary">
          <div className="navbar__secondary__group">
            <SearchIcon />
            <Avatar sx={{ bgcolor: deepOrange[800] }} variant="square">N</Avatar>
          </div>
        </div>
      </div>
    // </BrowserRouter>
  )
}

export default Navbar;
