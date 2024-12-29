
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import StyledNav from "./Nav.style";
import logo from "./../images/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

 
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

 
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledNav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" style={{ width: '200px', height: '100px' }} />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : undefined)}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : undefined)}>
            Contact
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : undefined)}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/venues" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : undefined)}>
            Venues
          </NavLink>
        </div>
        <div>
          <Link to="/login" className="login-btn" onClick={closeMenu}>Log in</Link>
        </div>
      </div>
    </StyledNav>
  );
}

export default Nav;
