import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>

      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <button className="nav-btn" onClick={handleNavClick}>Home</button>
        <button className="nav-btn" onClick={handleNavClick}>Products</button>
        <button className="nav-btn" onClick={handleNavClick}>Contact</button>
        <div className="cart-wrapper">
          <button className="nav-btn" onClick={handleNavClick}>Cart</button>
          {/* Optional dropdown here */}
        </div>
      </div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'rotate-top' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'fade-out' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate-bottom' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
