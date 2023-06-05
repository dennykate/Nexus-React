import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    getFavorites: (state) => {
      const favoriteStr = Cookies.get("favorites");
      let favorites = [];
      if (favoriteStr) {
        favorites = JSON.parse(favoriteStr);
      }

      state.favorites = favorites.reverse();
    },
    storeForFavorites: (state, { payload }) => {
      const favoriteStr = Cookies.get("favorites");
      let favorites = [];
      if (favoriteStr) {
        favorites = JSON.parse(favoriteStr);
      }

      const isExistInFavorites = favorites.find((favorite) => {
        return favorite.name == payload.name && favorite.email == payload.email;
      });

      if (isExistInFavorites) {
        state.favorites = favorites.reverse();
      } else {
        favorites = [...favorites, payload];
        state.favorites = favorites.reverse();
        Cookies.set("favorites", JSON.stringify(favorites));
      }
    },
  },
});

export const { getFavorites, storeForFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
