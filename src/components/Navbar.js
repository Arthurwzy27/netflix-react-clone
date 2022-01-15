import { Link } from '@mui/material';
import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div className="navbar__header">
        <img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix-logo" href="#"/>
      <div className="navbar__primary">
        <li>
          <Link to="/">Home</Link>
          <Link to="/">Series</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Trending Now</Link>
          <Link to="/">My List</Link>
        </li>
      </div>
      <div className="navbar__secondary">
        <SearchIcon />

      </div>
    </div>
  )
}

export default Navbar;
