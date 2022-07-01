import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { updateChat } from "../../redux/features/chatSlice";
import { socket } from "../../socket";
import View from "./view";

export interface ChatProps {
  activeChatId: string;
  activeChat: IChat;
  myInfo: IAuth;
  submitHandler: (e: any) => void;
  messageRef: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Chat: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeChatId = useAppSelector((state: RootState) => state.persistedReducer.activeChatIdSlice.chatId);
  const myInfo = useAppSelector((state: RootState) => state.persistedReducer.authSlice);
  const chats = useAppSelector((state: RootState) => state.persistedReducer.chatSlice.chats);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  let activeChat: IChat = chats[0]; // lets set actve chat by default 1st one, for TS type error we cant set chat as null
  for (let chat of chats) {
    if (chat.chatId === activeChatId) {
      activeChat = chat;
      break;
    }
  }

  const addMessageToChats = (senderProps: any, messageProps: string, activeChatId: string) => {
    const today = new Date();
    const ampm = today.getHours() >= 12 ? "pm" : "am";
    const time = today.getHours() + ":" + today.getMinutes() + "" + ampm + " - " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

    const updatedChat = chats.map((chat) => {
      if (activeChatId === chat.chatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              sender: { username: senderProps.username, image: senderProps.image, phone: senderProps.phone },
              message: messageProps,
              time: time,
            },
          ],
        };
      } else return chat;
    });
    dispatch(updateChat(updatedChat));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (myInfo && messageRef.current && messageRef.current.value) {
      let message = messageRef.current.value;
      addMessageToChats(myInfo, message, activeChatId);
      socket.emit("send-message", myInfo, message, activeChatId);
      messageRef.current.value = "";
    }
  };

  useEffect(() => {
    socket.on("receive-message", (sender, message, chatId) => {
       addMessageToChats(sender, message, chatId);
    });
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      socket.off("receive-message");
    };
  });
  return <View activeChatId={activeChatId} activeChat={activeChat} myInfo={myInfo} submitHandler={submitHandler} messageRef={messageRef} lastMessageRef={lastMessageRef} />;
};
export default Chat;
