import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLg: false
}

export const isLgSlice = createSlice({
  name: "isLgSlice",
  initialState,
  reducers:{
    setScreenSize:(state,{payload})=>{
        state.isLg  = payload;
    }
  }
});

export const {setScreenSize} = isLgSlice.actions;
export default isLgSlice.reducer;