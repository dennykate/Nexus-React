import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./api/contactsApi";
import contactsSlice from "./service/contactsSlice";
import isLgSlice from "./service/isLgSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    isLg: isLgSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
