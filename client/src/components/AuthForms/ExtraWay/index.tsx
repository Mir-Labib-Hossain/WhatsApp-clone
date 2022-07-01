import React from "react";
import { Button, Icon, Paragraph } from "../../../styles/comon.styled";
import { ExtraContainer } from "./styled";

const Extra: React.FC = () => {
  return (
    <ExtraContainer>
      <Paragraph>or</Paragraph>
      <Button>
        <Icon className="fa-brands fa-facebook-f"></Icon>
      </Button>
      <Button>
        <Icon className="fa-brands fa-google"></Icon>
      </Button>
    </ExtraContainer>
  );
};
export default Extra;
