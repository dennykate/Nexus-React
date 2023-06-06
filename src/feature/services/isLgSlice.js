import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLg: false,
  bgColor: "",
};

export const isLgSlice = createSlice({
  name: "isLgSlice",
  initialState,
  reducers: {
    setScreenSize: (state, { payload }) => {
      state.isLg = payload;
    },
    setBgColor: (state, { payload }) => {
      state.bgColor = payload;
    },
  },
});

export const { setScreenSize, setBgColor } = isLgSlice.actions;
export default isLgSlice.reducer;
