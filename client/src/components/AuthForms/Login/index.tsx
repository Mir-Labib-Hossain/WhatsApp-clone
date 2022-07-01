import React, { useEffect } from "react";
import { Break, Button, ErrorText, Form, Input, InvisibleButton, Span, Spanner } from "../../../styles/comon.styled";
import Extra from "../ExtraWay";
import { FormContainer } from "../styled";

interface LoginProps {
  username: string;
  phone: string;
  password: string;
  error: string;
  loading: boolean;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  loginHandler: () => void;
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({username, phone, password, handleOnChange, loginHandler, loading, setLoginPage, error }) => {

  return (
    <FormContainer>
      <Form>
        <Input value={username} onChange={handleOnChange} placeholder="@username" name="username" />
        <Input value={phone} onChange={handleOnChange} placeholder="+8801XXXXXXXXX" name="phone" />
        <Input value={password} onChange={handleOnChange} placeholder="password" name="password" type="password" />
        <Button onClick={loginHandler} disabled={loading}>
          Log-in
        </Button>
      </Form>
      <Break />
      <Span>
        Dont have account?{" "}
        <InvisibleButton onClick={() => setLoginPage(false)}>
          <Spanner>Sign-up</Spanner>
        </InvisibleButton>
      </Span>
      <Extra />
      <ErrorText>{error}</ErrorText>
    </FormContainer>
  );
};
export default Login;
