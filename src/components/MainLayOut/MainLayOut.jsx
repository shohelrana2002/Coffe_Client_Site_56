import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const MainLayOut = () => {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
