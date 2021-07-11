const initialState = {
  cart: [], // {name, size, color, image, price, qty, total}
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const inCart = state.cart.some(
        (item) => item.name === action.payload.name
      );
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.name === action.payload.name
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    // return {
    //   ...state,
    //   cart: [...state.cart, { ...action.payload }],
    // };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default cartReducers;
