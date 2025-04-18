import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";


const Checkout = () => {
  const { cartItems, clearCart } = useCart();
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
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <h2>✅ Thank you for your order, {formData.name}!</h2>;
  }

  const handleStripeCheckout = async () => {
    try {
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
  
      const data = await response.json();
  
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Could not redirect to Stripe.");
      }
    } catch (error) {
      console.error("Stripe checkout error:", error);
      alert("Stripe checkout failed.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

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
                  <button type="submit">Place Order</button>

        <button
  type="button"
  className="stripe-checkout-btn"
  onClick={handleStripeCheckout}
>
  💳 Pay with Stripe
</button>
        </div>

      </form>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="cart-img" />
            {item.title} × {item.quantity} — ${item.price * item.quantity}
          </div>
        ))}
        <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default Checkout;
