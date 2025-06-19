import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Style/Nav.css'; // Make sure to import this in your component

const Nav = () => {
  const cat = ['mens', 'womens', 'kids'];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>GFG</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        <li className="dropdown">
          <span>Category</span>
          <ul className="dropdown-menu">
            {cat.map((val, ind) => (
              <li key={ind}>
                <Link to={`/categoryproducts/${val}`}>{val}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
