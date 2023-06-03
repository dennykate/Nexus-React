import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      if (payload) {
        state.contacts = [...state.contacts, ...payload];
      }
    },
  },
});

export const { addContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
