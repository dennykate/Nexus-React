import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { contactsApi } from "./api/contactsApi";
import authSlice from "./services/authSlice";
import contactsSlice from "./services/contactsSlice";
import frequentsSlice from "./services/frequentsSlice";
import favoritesSlice from "./services/favoritesSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    authSlice: authSlice,
    contacts: contactsSlice,
    frequents: frequentsSlice,
    favorites: favoritesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactsApi.middleware),
});
