import { ChatProps } from ".";
import { Button, Icon, Input, Paragraph, Row, Span } from "../../styles/comon.styled";
import { ChatContainer, ChatFooter, Container, MessageBlock, SelectChatImg } from "./styled";

const View: React.FC<ChatProps> = ({ activeChat, activeChatId, myInfo, submitHandler, messageRef, lastMessageRef }) => {
  return activeChatId ? (
    <Container>
      <ChatContainer>
        {activeChat.messages.map(({ sender, message, time }, index) => {
          const lastMessage = activeChat.messages.length - 1 === index;
          return (
            <MessageBlock isItYou={sender.username === myInfo.username} key={index} ref={lastMessage ? lastMessageRef : null}>
              <Paragraph>{message}</Paragraph>
              <Span>
                {sender.username === myInfo.username ? "You" : sender.username} - {time}
              </Span>
            </MessageBlock>
          );
        })}
      </ChatContainer>
      <ChatFooter onSubmit={submitHandler}>
        <Row alignItems="center">
          <Input placeholder="type here . . ." ref={messageRef} />
          <Button>
            <Icon className="fa-solid fa-paper-plane" />
          </Button>
        </Row>
      </ChatFooter>
    </Container>
  ) : (
    <SelectChatImg />
  );
};
export default View;
