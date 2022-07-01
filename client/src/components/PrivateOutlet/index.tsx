import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { socket } from "../../socket";

const PrivateOutlet: React.FC = () => {
  const phone = useAppSelector((state: RootState) => state.persistedReducer.authSlice.phone);

  if (useAuth()) {
    socket.emit("join-server", phone);
    return <Outlet />;
  } else return <Navigate to="/login" />;
};

export default PrivateOutlet;
