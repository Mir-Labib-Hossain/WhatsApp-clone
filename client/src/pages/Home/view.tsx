import React from "react";
import Chat from "../../components/Chat";
import Sidebar from "../../components/Sidebar";
import { Row } from "../../styles/comon.styled";
const View: React.FC = () => {
  
  return (
    <Row>
      <Sidebar />
      <Chat />
    </Row>
  );
};
export default View;
