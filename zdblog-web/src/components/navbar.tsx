import React from "react";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "white" }}
          >
            ZDBlog
          </Typography>
          <Box
            sx={{
              margin: "1rem",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavButton url="/articles">Articles</NavButton>
            <NavButton url="/articles/categories">Categories</NavButton>
            <NavButton url="/articles/writers">Writers</NavButton>
          </Box>
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
      }}
    >
      {children}
    </Button>
  );
};
