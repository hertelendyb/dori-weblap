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
    MuiTypography: {
      styleOverrides: {
        h4: {
          marginBottom: "1rem",
        },
      },
    },
  },
});
