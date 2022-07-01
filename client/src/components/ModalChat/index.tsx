import React, { useState } from "react";
import useGenerateChatId from "../../hooks/useGenerateChatId";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { setActiveChatId } from "../../redux/features/activeChatIdSlice";
import { createChat } from "../../redux/features/chatSlice";
import { socket } from "../../socket";
import { Button, Header2, Icon, Input, Paragraph, Row, Span } from "../../styles/comon.styled";
import { ModalForm } from "../Modal/styled";

const ModalChat: React.FC<IType & IHandleModalVisibility> = ({ type, handleModalVisibility }) => {
  const dispatch = useAppDispatch();
  const contactList = useAppSelector((state: RootState) => state.persistedReducer.contactSlice.contacts);
  const myInfo = useAppSelector((state: RootState) => state.persistedReducer.authSlice);
  const [selectedRecipients, setSelectedRecipients] = useState([{ username: myInfo.username, phone: myInfo.phone }]); // defaultly i will be added, as other user receiver

  const createChatFunc = ({ recipients }: any) => {
    const chatId = useGenerateChatId();
    dispatch(createChat({ chatId, recipients }));
    dispatch(setActiveChatId(chatId));
    socket.emit("create-chat", recipients, chatId);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleModalVisibility(type);
    createChatFunc({ recipients: selectedRecipients });
  };

  const handleOnChange = ({ username, phone }: IContact) => {
    setSelectedRecipients((prevSelectedRecipients: any) => {
      if (prevSelectedRecipients.filter((e: IContact) => e.phone === phone).length > 0) {
        return prevSelectedRecipients.filter((prevSelectedContact: IContact) => {
          return prevSelectedContact.phone !== phone;
        });
      } else {
        return [...prevSelectedRecipients, { username: username, phone: phone }];
      }
    });
  };

  return (
    <ModalForm onSubmit={handleSubmit}>
      <Row flexDirectionColumn>
        <Header2>New Chat</Header2>
        {contactList.map(({ username, phone }, index) => {
          return (
            <Row alignItems="center" key={index}>
              <Input type="checkbox" value={username} onChange={() => handleOnChange({ username, phone })} />
              <Paragraph>
                {username} -<Span>{phone}</Span>
              </Paragraph>
            </Row>
          );
        })}
      </Row>
      <Button type="submit">
        <Icon className="fa-solid fa-plus"></Icon>
      </Button>
    </ModalForm>
  );
};
export default ModalChat;
