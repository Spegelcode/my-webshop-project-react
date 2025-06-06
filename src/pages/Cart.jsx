import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css"; 

// This component is not in production, but is a simple cart component that displays the items in the cart, their prices, and a button to clear the cart.


const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="cart-image" />
          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
            <div className="cart-buttons">

            </div>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
