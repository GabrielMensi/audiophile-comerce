import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      if(state.items.length === 0) state.items.push(item); // If the cart is empty, add the item
      else {
        const index = state.items.findIndex((i) => i.productData.id === item.productData.id); // Find the index of the item in the cart
        if(index === -1) state.items.push(item); // If the item is not in the cart, add it
        else state.items[index].quantity += item.quantity;  // If the item is in the cart, update the quantity
      }

      state.totalQuantity = state.totalQuantity + action.payload.quantity; // Update the total quantity
      state.totalPrice = state.totalPrice + action.payload.quantity * action.payload.productData.price; // Update the total price
    },
    incrementProduct: ( state, action) => {
      const index = state.items.findIndex(e => e.productData.id === action.payload.productData.id); // Find the index of the item in the cart
      state.items[index].quantity++; // Increment the quantity of the item
      state.totalQuantity++; // Increment the total quantity
      state.totalPrice = state.totalPrice + action.payload.productData.price; // Increment the total price
    },
    decrementProduct: (state, action) => {
      const index = state.items.findIndex(e => e.productData.id === action.payload.productData.id); // Find the index of the item in the cart
      if(state.items[index].quantity === 1) { // If the quantity of the item is 1
        state.items.splice(index, 1); // Remove the item from the cart
        state.totalPrice = state.totalPrice - action.payload.productData.price; // Decrement the total price
        state.totalQuantity = state.totalQuantity - 1; // Decrement the total quantity
      }
      else {
        state.items[index].quantity--; // Decrement the quantity of the item
        state.totalQuantity--; // Decrement the total quantity
        state.totalPrice = state.totalPrice - action.payload.productData.price; // Decrement the total price
      }

    },
    removeAll: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    setCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  }
});

export const { addProduct, incrementProduct, decrementProduct, removeAll, setCart } = cartSlice.actions;

export default cartSlice.reducer;

