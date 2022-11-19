import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
  { name: "Projects", path: "/projects" },
];

const Header = () => {
  return (
    <nav className="nav">
      {navLinks.map(({ name, path }, idx) => (
        <Link to={path} className="nav__link" key={idx}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
