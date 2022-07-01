import styled from "styled-components";


export const SelectChatImg = styled.div`
  height: 100vh;
  background-image: url("../../images/select-chat.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70vw;
 `;


export const Container = styled.div`
   width: 70vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChatContainer = styled.div`
  max-height: calc(100vh - 70px);
  position: absolute;
  bottom: 70px;
  overflow: scroll !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  > div {
    margin: 10px 0;
    p {
      max-width: 80%;
      width: fit-content;
      padding: 10px;
    }
  }
`;

export const MessageBlock = styled.div<{ isItYou: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isItYou }) => isItYou && "align-items: flex-end;"}

  p {
    background-color: ${({ theme, isItYou }) => (isItYou ? theme.theme : theme.secondaryBg)};
    border-radius: ${({ isItYou }) => (isItYou ? "20px 20px 0 20px" : "20px 20px 20px 0")};
    ${({ isItYou }) => isItYou && "text-align: right;margin-right: 0;"}
  }
`;

export const ChatFooter = styled.form`
  background-color: ${({ theme }) => theme.secondaryBg};
  border: 2px solid ${({ theme }) => theme.theme};
  border-right: 0;
  border-left: 0;
  height: 70px;
  padding: 0 10px;
  position: absolute;
  bottom: 0;
  width: 100%;

  input {
    width: calc(100% - 40px);
    border-radius: 35px 0 0 35px;
    height: 40px;
  }

  button {
    border-radius: 0 50% 50% 0;

    i {
      margin-left: -8px;
    }
  }
`;
