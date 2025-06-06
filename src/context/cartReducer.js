// cartReducer.js
// This is not in production, but is a simple reducer function that handles the cart actions.
// added this to show that i understand how to use a reducer function in React.

/*
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "DECREASE":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id && action.payload.quantity > 0
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};
*/