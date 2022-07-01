import React, { useEffect } from "react";
import { Break, Button, ErrorText, Form, Input, InvisibleButton, Span, Spanner } from "../../../styles/comon.styled";
import Extra from "../ExtraWay";
import { FormContainer } from "../styled";

interface SignupProps {
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
  error: string;
  loading: boolean;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  signupHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SignupProps> = ({ username, phone, password, confirmPassword, handleOnChange, signupHandler, loading, setLoginPage, error }) => {

  return (
    <FormContainer>
      <Form onSubmit={signupHandler}>
        <Input value={username} onChange={handleOnChange} placeholder="username" name="username" type="text" />
        <Input value={phone} onChange={handleOnChange} placeholder="phone" name="phone" type="text" />
        <Input value={password} onChange={handleOnChange} placeholder="password" name="password" type="password" />
        <Input value={confirmPassword} onChange={handleOnChange} placeholder="confirm password" name="confirmPassword" type="password" />
        <Button type="submit" disabled={loading}>
          Sign-up
        </Button>
      </Form>
      <Break />
      <Span>
        Already have account?{" "}
        <InvisibleButton onClick={() => setLoginPage(true)}>
          <Spanner>Log-in</Spanner>
        </InvisibleButton>
      </Span>
      <Extra />
      <ErrorText>{error}</ErrorText>
    </FormContainer>
  );
};
export default Signup;
