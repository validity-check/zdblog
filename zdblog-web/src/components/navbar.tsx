import React, { useState } from "react";
import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isOpen, setIsOpen] = useState(false);

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
                setIsOpen(!isOpen);
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
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="left">
        <List>
          <NavButtonMobile url="/articles">Articles</NavButtonMobile>
          <NavButtonMobile url="/articles/categories">
            Categories
          </NavButtonMobile>
          <NavButtonMobile url="/articles/writers">Writers</NavButtonMobile>
        </List>
      </Drawer>
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

const NavButtonMobile = ({ children, url }) => {
  return (
    <ListItem button component={Link} to={url}>
      {children}
    </ListItem>
  );
};
