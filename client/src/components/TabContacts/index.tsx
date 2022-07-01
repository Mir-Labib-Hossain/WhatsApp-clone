import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import BlockAdd from "../Blocks/BlockAdd";
import BlockContact from "../Blocks/BlockContact";
import { TabContainer } from "./styled";

const TabContacts: React.FC = () => {
  const contacts = useAppSelector((state: RootState) => state.persistedReducer.contactSlice.contacts);

  return (
    <TabContainer>
      <BlockAdd type="Contact" />
      {contacts.map((contact: IContact, index: number) => {
        return <BlockContact key={index} username={contact.username} phone={contact.phone} />;
      })}
    </TabContainer>
  );
};
export default TabContacts;
