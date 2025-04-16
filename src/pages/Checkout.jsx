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
        <button type="submit">Place Order</button>
      </form>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.title} × {item.quantity} — ${item.price * item.quantity}
          </div>
        ))}
        <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default Checkout;
