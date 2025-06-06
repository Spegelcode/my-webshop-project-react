//import { createContext, useContext, useEffect, useReducer } from "react";
//import { cartReducer } from "./cartReducer";

// // This is not in production, but is a simple reducer function that handles the cart actions.
// added this to show that i understand how to use a reducer function in React.
// Did not use this in the project, but it is a good example of how to use a reducer function in React.
/*

const CartContext = createContext();

//export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Action creators
  const addToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const decreaseFromCart = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleQuantityChange = (item, action) => {
    if (action === "increase") {
      updateItemQuantity(item.id, item.quantity + 1);
    } else if (action === "decrease" && item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
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
};*/
