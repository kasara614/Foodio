import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// this createSlice() function return us in an object in cartSlice (line-3), so that cartSlice object is look something like this-

/*
{
  actions: {
    addItem
  },
  reducer 
}
*/

//that's why we export things separately, 1st one is reduce and 2nd one is actions

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;