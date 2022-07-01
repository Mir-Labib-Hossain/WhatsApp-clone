import React from "react";
import { useNavigate } from "react-router-dom";
import useRandomImage from "../../../hooks/useRandomImage";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { RootState } from "../../../redux/app/store";
import { removeUser } from "../../../redux/features/authSlice";
import { Button, Icon, Paragraph, Span } from "../../../styles/comon.styled";
import { Left, Profilepic, Right } from "../styled";
import { ProfileContainer } from "./styled";

const BlockProfile: React.FC = () => {
  const { username, phone } = useAppSelector((state: RootState) => state.persistedReducer.authSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <ProfileContainer>
      <Left>
        <Profilepic bg={useRandomImage()} />
        <Paragraph>{phone}</Paragraph>
        <Span>{username}</Span>
      </Left>
      <Right>
        <Button onClick={logout}>
          <Icon className="fa-solid fa-power-off" />
        </Button>
      </Right>
    </ProfileContainer>
  );
};
export default BlockProfile;
