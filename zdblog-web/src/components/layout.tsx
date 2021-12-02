import React from "react";
import { NavBar } from "./navbar";
import "../index.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
