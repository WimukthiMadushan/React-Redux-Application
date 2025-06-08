const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    const item = action.payload;
    const existing = state.cart.find((i) => i.id === item.id);
  
    switch (action.type) {
      case "ADD_TO_CART":
        if (existing) {
          return {
            ...state,
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((i) => i.id !== item.id),
        };
  
      case "DECREMENT_ITEM":
        if (existing.quantity === 1) {
          return {
            ...state,
            cart: state.cart.filter((i) => i.id !== item.id),
          };
        }
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  