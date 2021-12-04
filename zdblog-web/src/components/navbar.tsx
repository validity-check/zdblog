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
          <Typography variant="h4" noWrap>
            ZDBlog
          </Typography>
          <Button sx={{ my: 2, color: "white", display: "block" }}>Test</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
