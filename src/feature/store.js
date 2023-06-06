import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { contactsApi } from "./api/contactsApi";
import authSlice from "./services/authSlice";
import contactsSlice from "./services/contactsSlice";
import isLgSlice from "./services/isLgSlice";
import frequentsSlice from "./services/frequentsSlice";
import favoritesSlice from "./services/favoritesSlice";
import { profileApi } from "./api/profileApi";
import profileSlice from "./services/profileSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    contacts: contactsSlice,
    isLg: isLgSlice,
    authSlice: authSlice,
    frequents: frequentsSlice,
    favorites: favoritesSlice,
    profileSlice: profileSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      contactsApi.middleware,
      profileApi.middleware
    ),
});
