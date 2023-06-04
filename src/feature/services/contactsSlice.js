import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      if (payload?.contacts?.data) {
        state.contacts = [...state.contacts, ...payload?.contacts?.data];
      }
    },
  },
});

export const { addContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
