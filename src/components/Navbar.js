import React, { useState, useEffect } from 'react';
import './Nav.scss';
// import './Navbar.scss';

const Navbar = () => {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix-logo"
        href="#"
      />

      {/* <ul>
        <Link to="/">Home</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/trending">Trending Now</Link>
        <Link to="/list">My List</Link>
      </ul> */}

      {/* <SearchIcon /> */}

      <img
        className="navbar__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix-avatar"
      />
    </div>
  )
}

export default Navbar;
