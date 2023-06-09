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
      if (payload) {
        state.contacts = [...state.contacts, ...payload];
      }
    },
    addSingleContact: (state, { payload }) => {
      const newContacts = [...state.contacts, payload];
      console.log(newContacts);
      state.contacts = newContacts;
      state.total = newContacts.length;
    },
    addTotal: (state, { payload }) => {
      state.total = payload.contacts.total;
    },
    removeContact: (state, { payload }) => {
      console.log(payload);
      const newContacts = state.contacts.filter((contact) => {
        return contact.id != payload.id;
      });
      console.log(newContacts);

      state.contacts = newContacts;
      state.total = newContacts.length;
    },
    increaseTotal: (state) => {
      state.total += 1;
    },
    updateContacts: (state, { payload }) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id == payload.id) {
          return payload;
        }
        return contact;
      });
    },
  },
});

export const {
  addContacts,
  addTotal,
  removeContact,
  addSingleContact,
  increaseTotal,
  updateContacts
} = contactsSlice.actions;
export default contactsSlice.reducer;
