import styled from "styled-components";

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 !important;
  opacity: 0.5;
  z-index: 98;
  background-color: black;
`;

export const ModalContainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;

export const ModalContent = styled.div`
  position: relative;
  min-width: 400px;
  border-radius: 35px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.theme};
  background-color: ${({ theme }) => theme.primaryBg};

  p,
  h1 {
    padding-left: 10px;
    margin-bottom: 5px;
  }

  button {
    position: absolute;
    background-color: ${({ theme }) => theme.primaryBg};
  }

  button:nth-child(1) {
    top: -15px;
    right: -15px;
  }

  button:nth-child(2) {
    bottom: -22px;
    right: 45%;
  }
`;

export const ModalForm = styled.form``;
