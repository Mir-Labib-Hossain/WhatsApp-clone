import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useRandomImage from "../../hooks/useRandomImage";

 

const initialState: IAuth = {
  session: null,
  phone: null,
  username:null,
 };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{session:string,phone:string,username:string}>) {
      state.session=action.payload.session;
      state.phone=action.payload.phone;
      state.username=action.payload.username
     },

    removeUser(state) {      
      state.session = null;
      state.phone=null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
