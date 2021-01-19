import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">ToDo</Link>
      </li>
      <li>
        <Link to="/trivia">Nummer Trivia</Link>
      </li>
      <li>
        <Link to="/hilfe">Hilfe</Link>
      </li>
      <li>
        <Link to="/nav4">Nav 4</Link>
      </li>
    </ul>
  )
};

export default Navbar;