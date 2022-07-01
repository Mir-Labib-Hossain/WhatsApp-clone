import React, { useState } from "react";
import { AuthProps } from ".";
import Login from "../../components/AuthForms/Login";
import Signup from "../../components/AuthForms/Signup";
import { Bg, Col2, Row } from "../../styles/comon.styled";
const View: React.FC<AuthProps> = ({ formValue, handleOnChange, loginHandler, signupHandler, loading, error }) => {
  const {  username, phone, password, confirmPassword } = formValue;
  const [loginPage, setLoginPage] = useState(true);

  return (
    <Row>
      <Col2>{loginPage ? 
        <Login username={username} phone={phone} password={password} handleOnChange={handleOnChange} loginHandler={loginHandler} loading={loading} setLoginPage={setLoginPage} error={error} /> :
        <Signup  username={username} phone={phone} password={password} confirmPassword={confirmPassword} handleOnChange={handleOnChange} signupHandler={signupHandler} loading={loading} setLoginPage={setLoginPage} error={error} />}</Col2>
      <Col2>
        <Bg height="100vh" bg="https://i.pinimg.com/564x/4d/65/39/4d6539820c0af7b01b643f37238c0b33.jpg" />
      </Col2>
    </Row>
  );
};
export default View;
