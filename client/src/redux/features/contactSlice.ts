import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
 contacts:IContacts
}

const initialState: ContactState = {
  contacts:[]
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<{username:string,phone:string}>) {
      const found = state.contacts.some((contact:IContact) => contact.phone === action.payload.phone);
      if (!found) state.contacts=[...state.contacts,{username:action.payload.username,phone:action.payload.phone}]
    },

    removeContact(state,action: PayloadAction<{phone:string}>) {
      state.contacts = state.contacts.filter((contact) => contact.phone !== action.payload.phone);
    },
  },
});

export const { addContact,removeContact } = contactSlice.actions;
export default contactSlice.reducer;
