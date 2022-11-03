import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/about" className="nav__link">
        About
      </Link>
      <Link to="/contacts" className="nav__link">
        Contacts
      </Link>
      <Link to="/projects" className="nav__link">
        Projects
      </Link>
    </nav>
  );
};

export default Header;
