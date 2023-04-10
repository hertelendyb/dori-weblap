import React from "react";
import { NavLink } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import "./styles.css";

export const Header = () => {
  return (
    <Box className="header">
      <Box className="title">
        <img style={{ width: "64px" }} src="img/column.svg" alt="oszlop" />
        <Typography sx={{ fontStyle: "italic" }} variant="h3">
          Dr. Devecseri Dóra ügyvéd
        </Typography>
      </Box>
      <Box className="navbar">
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
      </Box>
    </Box>
  );
};
