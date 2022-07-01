import React, { useState } from "react";
import { Button, Icon, Paragraph, Row } from "../../../styles/comon.styled";
import Modal from "../../Modal";
import { Container } from "../styled";

const BlockAdd: React.FC<IType> = ({ type }) => {
  // by default both modal will be hidden / false
  const [addContactBlockClicked, setAddContactBlockClicked] = useState(false);
  const [createChatBlockClicked, setAddChatBlockClicked] = useState(false);

  const handleModalVisibility = (type: EType) => {
    if (type === "Chat") setAddChatBlockClicked(!createChatBlockClicked);
    else setAddContactBlockClicked(!addContactBlockClicked);
  };

  return (
    <Container>
      <Row alignItems="center">
        <Button onClick={() => handleModalVisibility(type)}>
          <Icon className="fa-solid fa-plus" />
        </Button>
        <Paragraph>New {type}</Paragraph>
      </Row>
      {/* below Modal will be poped up based on the button clicked */}
      {createChatBlockClicked && <Modal type={type} handleModalVisibility={handleModalVisibility} />}
      {addContactBlockClicked && <Modal type={type} handleModalVisibility={handleModalVisibility} />}
    </Container>
  );
};
export default BlockAdd;
