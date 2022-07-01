import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { createChat } from "../../redux/features/chatSlice";
import { addContact } from "../../redux/features/contactSlice";
import { socket } from "../../socket";
import { Icon } from "../../styles/comon.styled";
import BlockProfile from "../Blocks/BlockProfile";
import TabChats from "../TabChats";
import TabContacts from "../TabContacts";
import { SidebarContainer, TabButton, Tabs } from "./styled";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();

  const chats = useAppSelector((state: RootState) => state.persistedReducer.chatSlice.chats);
  const [chatTab, setChatTab] = useState(chats.length > 0);
  const [contactTab, setContactTab] = useState(!chatTab);

  // handle specific tab visibility
  const handleTab = () => {
    setContactTab(!contactTab);
    setChatTab(!chatTab);
  };

  useEffect(() => {
    socket.on("create-contact-response", (username, phone) => {
      dispatch(addContact({ username, phone }));
    });
    socket.on("create-chat-response", (recipients, chatId) => {
      dispatch(createChat({ chatId, recipients }));
    });
    return () => {
      socket.off("create-contact-response");
      socket.off("create-chat-response");
    };
  }, []);

  console.log("Sidebar");

  return (
    <SidebarContainer>
      <Tabs>
        <TabButton active={chatTab} onClick={handleTab}>
          <Icon className="fa-solid fa-comments" />
        </TabButton>
        <TabButton active={contactTab} onClick={handleTab}>
          <Icon className="fa-solid fa-user-group" />
        </TabButton>
        {chatTab ? <TabChats /> : <TabContacts />}
      </Tabs>
      <BlockProfile />
    </SidebarContainer>
  );
};
export default Sidebar;
