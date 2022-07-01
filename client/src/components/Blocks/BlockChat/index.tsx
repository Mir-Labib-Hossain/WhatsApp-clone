import React, { useEffect } from "react";
import useRandomImage from "../../../hooks/useRandomImage";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { RootState } from "../../../redux/app/store";
import { removeActiveChatId, setActiveChatId } from "../../../redux/features/activeChatIdSlice";
import { deleteChat } from "../../../redux/features/chatSlice";
import { socket } from "../../../socket";
import { Button, Icon, Paragraph, Row } from "../../../styles/comon.styled";
import { Left, Profilepic, Right } from "../styled";
import { ChatContainer } from "./styled";

const BlockChat: React.FC<{ chatId: string; recipients: IContacts }> = ({ chatId, recipients }) => {
  const dispatch = useAppDispatch();

  const activeChatId = useAppSelector((state: RootState) => state.persistedReducer.activeChatIdSlice.chatId);
  const myInfo = useAppSelector((state: RootState) => state.persistedReducer.authSlice);

  const handleDeleteChat = () => {
    dispatch(deleteChat({ chatId }));
    activeChatId === chatId && dispatch(removeActiveChatId());
  };

  const handleActive = () => {
    dispatch(setActiveChatId(chatId));
  };

  useEffect(() => {
    socket.emit("join-chat", myInfo, chatId);
  }, []);

  // for chat header, list of receivers name with out my name
  let chatRecipients = recipients
    .map((recipient: IContact) => {
      if (recipient.phone !== myInfo.phone) return recipient.username;
    })
    .join(" ");

  return (
    <ChatContainer isActive={activeChatId === chatId}>
      <Left onClick={handleActive}>
        <Profilepic bg={useRandomImage()} />
        <Row flexDirectionColumn>
          <Paragraph>{chatRecipients}</Paragraph>
        </Row>
      </Left>
      <Right>
        <Button onClick={handleDeleteChat}>
          <Icon className="fa-regular fa-trash-can" />
        </Button>
      </Right>
    </ChatContainer>
  );
};
export default BlockChat;
