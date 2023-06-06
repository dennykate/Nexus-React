import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  users: [],
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getUsers: (state) => {
      const userStr = Cookies.get("users");
      let users = [];
      if (userStr) {
        users = JSON.parse(userStr);
      }
      state.users = users;
    },
    addUser: (state, { payload }) => {
      const userStr = Cookies.get("users");
      let users = [];
      if (userStr) {
        users = JSON.parse(userStr);
      }

      const isUser = users.find((user) => {
        return user.user.id == payload.user.id;
      });

      if (!isUser) {
        users.push(payload);
      }

      console.log(users);

      state.users = users;
      Cookies.set("users", JSON.stringify(users));
      Cookies.set("user", JSON.stringify(payload.user));
      Cookies.set("token", JSON.stringify(payload.token));
    },
    removeUser: (state) => {
      Cookies.remove("user");
      Cookies.remove("token");
    },
  },
});

export const { addUser, removeUser, getUsers } = authSlice.actions;
export default authSlice.reducer;
