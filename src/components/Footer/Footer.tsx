import React from "react";

import { Box, Typography } from "@mui/material";

import "./styles.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box sx={{ width: "100%", borderTop: "1px solid black" }} />
      <Typography className="footerText">
        Footer szöveg. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Quisque convallis elit a dolor fringilla viverra. Cras tincidunt nulla
        augue, eget accumsan dolor pellentesque in.
      </Typography>
    </Box>
  );
};

export default Footer;
