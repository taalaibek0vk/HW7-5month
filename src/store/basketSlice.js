import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
