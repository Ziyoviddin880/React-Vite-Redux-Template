import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    addCount: (state, action) => {
      state.value += 1;
    },
    removeCount: (state, action) => {
      state.value -= 1;
    },
    resetCount: (state, action) => {
      state.value = 0;
    },
  },
});

export const { addCount, removeCount, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
