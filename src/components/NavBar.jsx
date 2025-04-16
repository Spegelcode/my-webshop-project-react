import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Adjust path if needed
import './NavBar.css';
import './buttons.css';

const NavBar = () => {
  const navigate = useNavigate();
  const { getTotalQuantity } = useCart();
  const cartCount = getTotalQuantity();

  return (
    <nav className="navbar">
      <h1 className="logo">My Webshop</h1>
      <div className="nav-buttons">
        <button onClick={() => navigate('/')} className="nav-btn">Home</button>
        <button onClick={() => navigate('/shop')} className="nav-btn">Shop</button>
        <button onClick={() => navigate('/about')} className="nav-btn">About</button>
        <div className="cart-wrapper">
          <button onClick={() => navigate('/cart')} className="nav-btn cart-btn">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
        <button onClick={() => navigate('/checkout')} className="nav-btn">Checkout</button>
      </div>
    </nav>
  );
};

export default NavBar;
