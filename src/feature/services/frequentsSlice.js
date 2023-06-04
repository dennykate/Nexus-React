import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { sortFrequent } from "../../helper/functions";

const initialState = {
  frequents: [],
};

export const frequentsSlice = createSlice({
  name: "frequentsSlice",
  initialState,
  reducers: {
    getFrequents: (state) => {
      const frequentStr = Cookies.get("frequents");
      let frequents = [];
      if (frequentStr) {
        frequents = JSON.parse(frequentStr);
      }

      state.frequents = sortFrequent(frequents);
    },
    storeForFrequents: (state, { payload }) => {
      const frequentStr = Cookies.get("frequents");
      let frequents = [];
      if (frequentStr) {
        frequents = JSON.parse(frequentStr);
      }

      let newFrequents;
      const isExistInCookie = frequents.find(
        (frequent) => frequent.id === payload.id
      );

      if (isExistInCookie) {
        newFrequents = frequents.map((frequent) => {
          if (
            frequent.name == payload.name &&
            frequent.email == payload.email
          ) {
            frequent.searchCount += 1;
          }
          return frequent;
        });
      } else {
        newFrequents = [...frequents, { ...payload, searchCount: 1 }];
      }

      Cookies.set("frequents", JSON.stringify(newFrequents));

      state.frequents = newFrequents;
    },
    removeFromFrequents: (state, { payload }) => {
      const frequentStr = Cookies.get("frequents");
      let frequents = [];
      if (frequentStr) {
        frequents = JSON.parse(frequentStr);
      }

      let newFrequents = frequents.filter((frequent) => {
        return frequent.name != payload.name && frequent.email != payload.name;
      });

      Cookies.set("frequents", JSON.stringify(newFrequents));

      state.frequents = newFrequents;
    },
  },
});

export const { getFrequents, storeForFrequents, removeFromFrequents } =
  frequentsSlice.actions;
export default frequentsSlice.reducer;
