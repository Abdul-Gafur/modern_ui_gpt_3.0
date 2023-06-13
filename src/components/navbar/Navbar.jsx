import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="ogo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar