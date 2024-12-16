import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Sathish Kumar Gatamani Sekar</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#check">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
