import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Roboto", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#9c5f3a",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          "&:hover": {
            border: "1px solid black",
          },
        },
        outlined: {
          border: "1px solid black",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: "justify",
        },
        h4: {
          marginBottom: "1rem",
        },
      },
    },
  },
});
