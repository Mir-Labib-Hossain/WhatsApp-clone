import styled from "styled-components";

export const TabContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.theme};
  border-radius: 35px;
  background-color: ${({ theme }) => theme.secondaryBg};
`;
