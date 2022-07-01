import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../../pages/Auth";
import Home from "../../pages/Home";
import PrivateOutlet from "../PrivateOutlet";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
