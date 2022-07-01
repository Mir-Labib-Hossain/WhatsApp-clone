import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { addContact } from "../../redux/features/contactSlice";
import { socket } from "../../socket";
import { Button, Header2, Icon, Input, Paragraph, Row } from "../../styles/comon.styled";
import { ModalForm } from "../Modal/styled";

const ModalContact: React.FC<IType & IHandleModalVisibility> = ({ type, handleModalVisibility }) => {
  const dispatch = useAppDispatch();
  const myInfo = useAppSelector((state: RootState) => state.persistedReducer.authSlice);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleModalVisibility(type);

    if (usernameRef.current && phoneRef.current) {
      console.log("inside");
      dispatch(addContact({ username: usernameRef.current.value, phone: phoneRef.current.value }));
      socket.emit("create-contact", phoneRef.current.value, myInfo.username, myInfo.phone); // create new contact on : phone, new contact name, new contact phone
    }
  };

  return (
    <ModalForm onSubmit={handleSubmit}>
      <Row flexDirectionColumn>
        <Header2>New Contact</Header2>
        <Paragraph>Phone No.</Paragraph>
        <Input placeholder="+8801XXXXXXXXX" ref={phoneRef} required />
        <Paragraph>Username</Paragraph>
        <Input placeholder="@username" ref={usernameRef} required />
      </Row>
      <Button type="submit">
        <Icon className="fa-solid fa-plus"></Icon>
      </Button>
    </ModalForm>
  );
};
export default ModalContact;
