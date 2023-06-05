import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import contactsSlice from "./services/contactsSlice";
import { contactsApi } from "./api/contactsApi";
import { profileApi } from "./api/profileApi";
import profileSlice from "./services/profileSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    authSlice: authSlice,
    contacts: contactsSlice,
    profileSlice: profileSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactsApi.middleware,profileApi.middleware),
});
