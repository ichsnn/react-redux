import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmout: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increament, decreament, increamentByAmout } =
  counterSlice.actions;

export default counterSlice.reducer;
