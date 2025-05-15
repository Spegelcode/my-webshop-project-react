import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";
import { ServerRouter } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart, handleQuantityChange, removeFromCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to your cart before checking out.");
      return;
    }

    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    clearCart();
    setOrderPlaced(true);
  };
   // Jobba på denna 
  if (orderPlaced) {
    return <h2>✅ Thank you for your order, {formData.name}!</h2>;
  }

  const handleStripeCheckout = async () => {
    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems }),
    });
  
    const data = await response.json();
    window.location.href = data.url;
  };


  


  return (
    <div className="checkout-container">


      {cartItems.length === 0 && (
        <div className="empty-cart">Your cart is empty. Please add items to your cart before checking out.</div>
      )}

      <div className="cart-summary">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, "increase")}>+</button>

              </div>
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <form className="checkout-form" onSubmit={handleOrder}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
        />
        <div className="checkout-buttons">
          <button type="submit" disabled={cartItems.length === 0}>
            Place Order
          </button>
        </div>
      </form>




<button
  type="button"
  className="stripe-checkout-btn"
  onClick={handleStripeCheckout}
>
  💳 Pay with Stripe
</button>
    </div>
  );
};

export default Checkout;
