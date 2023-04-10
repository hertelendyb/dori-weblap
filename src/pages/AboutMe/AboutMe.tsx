import React from "react";

import { Box, Typography } from "@mui/material";

import "./styles.css";

export const AboutMe = () => {
  return (
    <Box className="container">
      <Typography variant="h4">Bemutatkozás</Typography>
      <img
        style={{ width: "200px", float: "left", marginRight: "15px" }}
        src="https://st2.depositphotos.com/1441511/12048/i/950/depositphotos_120485602-stock-photo-beauty-woman-portrait-girl-with.jpg"
        alt=""
      />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        convallis elit a dolor fringilla viverra. Cras tincidunt nulla augue,
        eget accumsan dolor pellentesque in. Nunc viverra ornare risus, at
        ullamcorper quam pulvinar et. Phasellus viverra pulvinar commodo. Fusce
        a dignissim augue. Donec a lacus lobortis diam commodo bibendum. In
        dictum tincidunt augue, in egestas massa lobortis et.
      </Typography>
      <Typography>
        Sed euismod nunc pellentesque imperdiet fermentum. Aliquam dapibus felis
        et placerat auctor. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Praesent pellentesque non lacus eget condimentum. Sed
        tincidunt tristique urna nec vulputate. Quisque eleifend sapien sit amet
        est pharetra egestas. Suspendisse sit amet ligula a elit auctor
        tincidunt. Integer rhoncus interdum nisl, a semper enim gravida eu.
      </Typography>
      <Typography>
        Vivamus varius sagittis accumsan. Suspendisse eros nisl, ultricies eget
        fermentum sit amet, facilisis blandit orci. Donec tincidunt elementum
        metus, eu condimentum lectus commodo et. Donec quis egestas tortor.
        Phasellus id pharetra lorem, id luctus tellus. Donec efficitur est eget
        sapien ullamcorper, eu consectetur sem dapibus. Duis aliquam dolor
        consectetur commodo iaculis. Praesent at efficitur nunc. Maecenas eget
        tellus odio. Curabitur dolor nibh, egestas et lectus non, accumsan
        tempor massa. Nullam convallis risus nec lorem accumsan feugiat. Ut et
        mauris suscipit, ornare nulla id, cursus enim.
      </Typography>
    </Box>
  );
};
