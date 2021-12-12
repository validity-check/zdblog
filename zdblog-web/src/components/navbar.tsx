import React from "react";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  let isOpen = false;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                isOpen = !isOpen;
              }}
              sx={{ margin: "0.5rem" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div></div>
          )}
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
