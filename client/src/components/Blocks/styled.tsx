import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.theme};
  border-radius: 20px;

  * {
    margin: 3px 5px;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    span {
      display: none;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Profilepic = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  min-width: 50px;
  border-radius: 15px 50% 50% 15px;
  border: 2px solid ${({ theme }) => theme.theme};
  margin: 5px;
`;
