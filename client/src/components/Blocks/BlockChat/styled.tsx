import styled from "styled-components";

export const ChatContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;

  margin: 20px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.theme : "white")};
  border: 2px solid ${({ theme }) => theme.theme};
  border-radius: 20px;
  align-items: center;
  cursor: pointer;

  > div > div:first-child, // profile pic
  > div > button { // trash button
    border: 2px solid ${({ isActive, theme }) => (!isActive ? theme.theme : "white")};
  }
  * {
    font-weight: ${({ isActive }) => isActive && "bold"};
    margin: 5px;
  }
`;
