import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveChatIdState {
  chatId: string ;
}

const initialState: ActiveChatIdState = {
  chatId: "",
};

const activeChatIdSlice = createSlice({
  name: " Id",
  initialState,
  reducers: {
    setActiveChatId(state, action: PayloadAction<string>) {
      state.chatId=action.payload;
      },
     removeActiveChatId(state) {
      state.chatId="";
        
     },
  
  },
});

export const { setActiveChatId,removeActiveChatId } =  activeChatIdSlice.actions;
export default  activeChatIdSlice.reducer;
