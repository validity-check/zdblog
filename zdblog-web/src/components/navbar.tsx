import React from "react";
import { Link } from "gatsby";

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
          <NavButton url="/">Test</NavButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavButton = ({ children, url }) => {
  return (
    <Button
      component={Link}
      to={url}
      variant="outlined"
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
