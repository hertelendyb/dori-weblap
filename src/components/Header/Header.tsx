import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./styles.css";

export const Header = () => {
  const mobileSize = useMediaQuery("(max-width:532px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (to: string) => {
    navigate(to);
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
            <Button
              variant="outlined"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              MENU
            </Button>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleNavigate("/")}>
                Bemutatkozás
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/szakterulet")}>
                Szakterületeim
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/tudnivalok")}>
                Tudnivalók
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/kapcsolat")}>
                Kapcsolat
              </MenuItem>
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
