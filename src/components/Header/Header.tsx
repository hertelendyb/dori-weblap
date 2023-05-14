import React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";

import "./styles.css";

export const Header = () => {
  const mobileSize = useMediaQuery("(max-width:532px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header">
      <Box className="title">
        <img style={{ width: "64px" }} src="img/column.svg" alt="oszlop" />
        <Typography
          sx={{ fontStyle: "italic", textAlign: "center" }}
          variant="h3"
        >
          Dr. Devecseri Dóra ügyvéd
        </Typography>
      </Box>
      <Box className="navbar">
        {mobileSize ? (
          <>
            <Button onClick={handleClick}>MENU</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Bemutatkozás</MenuItem>
              <MenuItem onClick={handleClose}>Szakterületeim</MenuItem>
              <MenuItem onClick={handleClose}>Tudnivalók</MenuItem>
              <MenuItem onClick={handleClose}>Kapcsolat</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Box className="link-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/"
              >
                <Typography className="link">Bemutatkozás</Typography>
              </NavLink>
            </Box>
            <Box className="navbar-separator" />
            <Box className="link-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/szakterulet"
              >
                <Typography className="link">Szakterületeim</Typography>
              </NavLink>
            </Box>
            <Box className="navbar-separator" />
            <Box className="link-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/tudnivalok"
              >
                <Typography className="link">Tudnivalók</Typography>
              </NavLink>
            </Box>
            <Box className="navbar-separator" />
            <Box className="link-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to="/kapcsolat"
              >
                <Typography className="link">Kapcsolat</Typography>
              </NavLink>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
