import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import contactsSlice from "./services/contactsSlice";
import isLgSlice from "./services/isLgSlice";
import { contactsApi } from "./api/contactsApi";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    isLg: isLgSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
    authSlice: authSlice,
    contacts: contactsSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactsApi.middleware),
});
