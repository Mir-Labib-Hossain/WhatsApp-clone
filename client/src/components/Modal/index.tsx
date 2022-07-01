import React from "react";
import { Button, Icon } from "../../styles/comon.styled";
import ModalChat from "../ModalChat";
import ModalContact from "../ModalContact";
import { ModalBg, ModalContainer, ModalContent } from "./styled";

const Modal: React.FC<IType & IHandleModalVisibility> = ({ type, handleModalVisibility }) => {
  return (
    <>
      <ModalBg />
      <ModalContainer>
        <ModalContent>
          <Button onClick={() => handleModalVisibility(type)}>
            <Icon className="fa-solid fa-xmark"></Icon>
          </Button>
          {type === "Contact" ? <ModalContact handleModalVisibility={handleModalVisibility} type={type} /> : <ModalChat handleModalVisibility={handleModalVisibility} type={type} />}
        </ModalContent>
      </ModalContainer>
    </>
  );
};
export default Modal;
