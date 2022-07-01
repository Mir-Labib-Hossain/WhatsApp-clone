import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLoginUserMutation, useSignupUserMutation } from "../../redux/apis/authApi";
import { useAppDispatch } from "../../redux/app/hooks";
import { setUser } from "../../redux/features/authSlice";
// import { socket } from "../../socket";
import View from "./view";

export interface AuthProps {
  formValue: {
    phone: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  loading: boolean;
  error: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  loginHandler: () => void;
  signupHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formValue, setFormValue] = useState({
    username: "user",
    phone: "01",
    password: "12345",
    confirmPassword: "12345",
  });
  const { username, phone, password, confirmPassword } = formValue;

  const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError }] = useLoginUserMutation();
  const [signupUser, { data: signupData, isSuccess: isSignupSuccess, isError: isSignupError, error: signupError }] = useSignupUserMutation();

  const handleOnChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    setLoading(true);
    if (phone && password) await loginUser({ username, phone, password });
    setLoading(false);
  };

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) setError("Password & Confirm Password didn't matched!");
    else if (username && phone && password) await signupUser({ username, phone, password });
    setLoading(false);
  };

   useEffect(() => {
    if (isLoginError || isSignupError) console.log(isLoginError);
    else {
      if (isLoginSuccess) dispatch(setUser({ session: loginData.session, phone, username }));
      else if (isSignupSuccess) dispatch(setUser({ session: signupData.session, phone, username }));
    }
  }, [isLoginSuccess, isSignupSuccess, isLoginError, isSignupError]);

  return useAuth() ? <Navigate to="/" /> : <View formValue={formValue} handleOnChange={handleOnChange} loginHandler={loginHandler} signupHandler={signupHandler} loading={loading} error={error} />;
};
export default Auth;
