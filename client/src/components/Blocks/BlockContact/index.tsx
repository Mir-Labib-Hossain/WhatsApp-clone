import React from "react";
import useRandomImage from "../../../hooks/useRandomImage";
import { useAppDispatch } from "../../../redux/app/hooks";
import { removeContact } from "../../../redux/features/contactSlice";
import { Button, Icon, Paragraph, Row, Span } from "../../../styles/comon.styled";
import { Container, Left, Profilepic, Right } from "../styled";

const BlockContact: React.FC<IContact> = ({ username, phone }) => {
  const dispatch = useAppDispatch();
  const handleDeleteContact = () => {
    dispatch(removeContact({ phone }));
  };

  return (
    <Container>
      <Left>
        <Profilepic bg={useRandomImage()} />
        <Row flexDirectionColumn>
          <Paragraph>{phone}</Paragraph>
          <Span>{username}</Span>
        </Row>
      </Left>
      <Right>
        <Button onClick={handleDeleteContact}>
          <Icon className="fa-regular fa-trash-can" />
        </Button>
      </Right>
    </Container>
  );
};
export default BlockContact;
