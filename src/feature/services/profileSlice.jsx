import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  
};
export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    removeToken: (state) => {
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { removeToken} = profileSlice.actions;
export default profileSlice.reducer;
