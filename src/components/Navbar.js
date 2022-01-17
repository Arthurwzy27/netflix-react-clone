import { Link } from '@mui/material';
import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';



const Navbar = () => {
  return (
    <div className="navbar__header">
        <img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix-logo" href="#"/>
      <div className="navbar__primary">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/">Series</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Trending Now</Link>
          <Link to="/">My List</Link>
        </ul>

      </div>
      <div className="navbar__secondary">
        <div className="navbar__secondary__group">
          <SearchIcon />
          <Avatar sx={{ bgcolor: deepOrange[800] }} variant="square">N</Avatar>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
