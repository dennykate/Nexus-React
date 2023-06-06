import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  favorites: [],
  addToFavorite: true,
};

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    getFavorites: (state) => {
      const favoriteStr = Cookies.get("favorites");
      let favorites = [];
      if (favoriteStr && favoriteStr != "[null]") {
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
        return favorite != null && favorite.id == payload.id;
      });

      if (isExistInFavorites) {
        state.favorites = favorites.reverse();
      } else {
        favorites = [...favorites, payload];
        state.favorites = favorites.reverse();
        Cookies.set("favorites", JSON.stringify(favorites));
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const favorites = JSON.parse(Cookies.get("favorites"));
      const newFavorites = favorites.filter(
        (favorite) => favorite.id != payload
      );

      state.favorites = newFavorites.reverse();
      Cookies.set("favorites", JSON.stringify(newFavorites));
    },
    closeAddToFavorite: (state) => {
      state.addToFavorite = false;
    },
  },
});

export const {
  getFavorites,
  storeForFavorites,
  removeFromFavorites,
  closeAddToFavorite,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
