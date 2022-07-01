import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondaryBg};
  border: 2px solid ${({ theme }) => theme.theme};
  height: 70px;

  * {
    margin: 5px;
  }
`;
