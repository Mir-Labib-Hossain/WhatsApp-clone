import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
 chats:IChats
 
}
const initialState: ChatState = {
  chats:[]
};
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createChat(state, action: PayloadAction<{chatId:string;recipients:{username:string,phone:string}[]}>) {
      state.chats=[...state.chats,{
        chatId:action.payload.chatId,
        recipients:action.payload.recipients,
        messages:[],
       }]
    },

    updateChat(state, action: PayloadAction<IChats>) {
      state.chats=action.payload
    },

    deleteChat(state,action: PayloadAction<{chatId:string}>) {     
      state.chats = state.chats.filter((chat) => chat.chatId !== action.payload.chatId);
    },
  },
});

export const { createChat,updateChat ,deleteChat} = chatSlice.actions;
export default chatSlice.reducer;
