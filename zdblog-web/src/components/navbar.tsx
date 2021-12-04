import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h3" noWrap>
            ZDBlog
          </Typography>
          <NavButton>Test</NavButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavButton = ({ children }) => {
  return (
    <Button
      sx={{
        color: "white",
        display: "block",
        margin: "1rem",
      }}
    >
      {children}
    </Button>
  );
};
