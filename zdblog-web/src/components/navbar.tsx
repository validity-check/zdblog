import React from "react";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          ZDBlog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
