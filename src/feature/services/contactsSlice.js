import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  total: null,
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts = payload;
    },
    addSingleContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
      state.total += 1;
    },
    addTotal: (state, { payload }) => {
      state.total = payload.contacts.total;
    },
    increaseTotal: (state) => {
      state.total += 1;
    },
  },
});

export const { addContacts, addTotal, increaseTotal, addSingleContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
