import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 30vw;
  height: 100vh;
`;

export const Tabs = styled.div`
  height: calc(100vh - 70px);
  overflow-x: scroll;
  border: 2px solid ${({ theme }) => theme.theme};
  border-bottom: 0;
`;

export const TabButton = styled.button<{ active: boolean }>`
  border: 2px solid ${({ theme }) => theme.theme};
  background-color: ${({ theme, active }) => (active ? theme.secondaryBg : "white")};
  border-bottom: 2px solid ${({ theme, active }) => (active ? theme.secondaryBg : theme.theme)};
  margin: 0 10%;
  margin-bottom: -2px;
  padding: 10px;
  min-height: 40px;
  border-radius: 35px 35px 0 0;
  cursor: pointer;
  font-weight: bold;
  min-width: 40px;
  i {
    margin: 0;
    color: ${({ theme }) => theme.theme};
  }
  :hover {
    background-color: ${({ theme }) => theme.secondaryBg};

    color: ${({ theme }) => theme.theme};
    i {
      color: ${({ theme }) => theme.theme};
    }
  }
`;
