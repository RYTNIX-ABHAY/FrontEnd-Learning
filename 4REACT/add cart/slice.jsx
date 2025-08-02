import { createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "first",
  initialState: { count: 0 },
  reducers: {
    AddItem: (state) => {
      state.count++;
    },
    DelItem: (state) => {
      state.count--;
    },
  },
});

export const { AddItem, DelItem } = firstSlice.actions;
export default firstSlice.reducer;
