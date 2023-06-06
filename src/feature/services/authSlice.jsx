import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  users: [],
  keep: false,
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

      console.log(payload);

      const isUser = users.find((user) => {
        return user.user.id == payload.user.id;
      });

      if (isUser) {
        users = users.map((user) => {
          if (user.user.id == payload.user.id) {
            console.log("update", payload.token);
            user.keepme = payload.keepme;
            user.user.password = payload.user.password;
            user.token = payload.token;
          }
          return user;
        });
      }

      if (!isUser) {
        users.push(payload);
      }

      // state.users = users;
      // state.keep = false;

      state.users = users;
      state.keep = true;
      Cookies.set("users", JSON.stringify(users));
      Cookies.set("user", JSON.stringify(payload.user));
      Cookies.set("token", JSON.stringify(payload.token));
      Cookies.set("keepme", payload.keepme);
    },
    removeUser: (state) => {
      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("keepme");
    },
  },
});

export const { addUser, removeUser, getUsers } = authSlice.actions;
export default authSlice.reducer;
