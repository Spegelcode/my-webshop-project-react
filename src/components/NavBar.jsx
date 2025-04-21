import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import './NavBar.css';
import './buttons.css';

const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

const images = Object.keys(imageModules).map((key) => ({
  name: key.split('/').pop(),
  src: imageModules[key].default,
}));

const NavBar = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, getTotalQuantity, handleQuantityChange } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const updateItemQuantity = (id, quantity) => {
    if (quantity <= 0) return; // Prevent negative quantities
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }


  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => { navigate('/'); setMenuOpen(false); }}>
        Luxury Collections
      </h1>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'rotate-top' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'fade-out' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate-bottom' : ''}`}></div>
      </div>

      {/* Nav Buttons */}
      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => { navigate('/'); setMenuOpen(false); }} className="nav-btn">Home</button>
        <button onClick={() => { navigate('/shop'); setMenuOpen(false); }} className="nav-btn">Shop</button>
        <button onClick={() => { navigate('/about'); setMenuOpen(false); }} className="nav-btn">About</button>

        {/* Cart Button */}
        <div className="cart-wrapper">
          <button className="nav-btn" onClick={toggleCart}>
            🛒 ({getTotalQuantity()})
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div className="cart-dropdown">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
                <ul className="cart-items">
                  {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                      <img src={item.thumbnail} alt={item.title} className="cart-img" />
                      <div>
                        <p>{item.title}</p>
                        <p>Qty: {item.quantity}</p>
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={() => handleQuantityChange(item, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, "increase")}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <button className="nav-btn checkout-btn" onClick={() => { navigate('/checkout'); setMenuOpen(false); }}>
                Go to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
