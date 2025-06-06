import { createContext, useContext, useEffect, useState } from "react";
// This context provides a way to manage the shopping cart state across the application.
// It allows adding, removing, and updating items in the cart, as well as persisting the cart state in localStorage.
const CartContext = createContext();
// This provider component wraps the application and provides the cart context to its children.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");// Retrieve the cart from localStorage
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart or increase quantity if item already exists
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  // Decrease the quantity of an item, remove if quantity reaches 0
  const decreaseFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Update the quantity of an item
  const updateItemQuantity = (id, quantity) => {
    if (quantity <= 0) return; // Prevent negative quantities
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item // Update the quantity of the item
      )
    );
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items in the cart
  const clearCart = () => setCartItems([]);

  // Get the total quantity of all items in the cart
  const getTotalQuantity = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };
  // Handle quantity changes for + and - buttons
  // We use updateItemQuantity to change the quantity of an item
  const handleQuantityChange = (item, action) => {
    if (action === "increase") {
      updateItemQuantity(item.id, item.quantity + 1);
    } else if (action === "decrease" && item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    // Provide the cart context to children components
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        clearCart,
        updateItemQuantity, 
        getTotalQuantity,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
