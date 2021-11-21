import React from "react";
import { NavBar } from "./navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
