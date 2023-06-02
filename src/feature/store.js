import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./api/contactsApi";
import contactsSlice from "./service/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
