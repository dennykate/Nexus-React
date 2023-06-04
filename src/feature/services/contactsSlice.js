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
    addTotal: (state, { payload }) => {
      state.total = payload.contacts.total;
    },
  },
});

export const { addContacts, addTotal } = contactsSlice.actions;
export default contactsSlice.reducer;
