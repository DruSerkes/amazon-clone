import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product - no item found in cart with id: `,
          action.payload.id
        );
      }
      return {
        ...state,
        items: newCart,
      };
    },

    clearCart: (state) => {
      return {
        ...state,
        items: [],
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
