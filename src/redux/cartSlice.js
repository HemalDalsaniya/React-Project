import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items
    quantities: {}, // Object to track quantities by item ID
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
       state.quantities[item.id] += 1;
        // existingItem.quanitities++;
      } else {
        // If the item is new, add it to the cart with a default quantity of 1
        state.items.push(item);
        state.quantities[item.id] = 1;
       // state.items.push({ ...item, quantities: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.quantities[id]) {
        state.quantities[id] += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.quantities[id] && state.quantities[id] > 1) {
        state.quantities[id] -= 1;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      delete state.quantities[id];
    },

    setCartItems: (state, action) => {
      const { items, quantities } = action.payload;
      state.items = items;
      state.quantities = quantities;
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;