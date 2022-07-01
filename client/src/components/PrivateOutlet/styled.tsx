import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: calc(100% - 300px);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryBg};
  padding: 50px;

  > div {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: calc(100% - 70px);
  }
`;
