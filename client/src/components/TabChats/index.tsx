import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import BlockAdd from "../Blocks/BlockAdd";
import BlockChat from "../Blocks/BlockChat";
import { TabContainer } from "./styled";

const TabChats: React.FC = () => {
  const chats = useAppSelector((state: RootState) => state.persistedReducer.chatSlice.chats);
  return (
    <TabContainer>
      <BlockAdd type="Chat" />
      {chats.map((data: any, index: number) => {
        return <BlockChat key={index} chatId={data.chatId} recipients={data.recipients} />;
      })}
    </TabContainer>
  );
};
export default TabChats;
