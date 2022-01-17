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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Series</Link></li>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/">Trending Now</Link></li>
          <li><Link to="/">My List</Link></li>
        </ul>

      </div>
      <div className="navbar__secondary">
        <SearchIcon />
        <Avatar sx={{ bgcolor: deepOrange[800] }} variant="square">N</Avatar>

      </div>
    </div>
  )
}

export default Navbar;
