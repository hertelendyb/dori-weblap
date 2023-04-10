import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import {
  AboutMe,
  Contact,
  Home,
  Informations,
  NotFound,
  Specialization,
} from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/kapcsolat",
        element: <Contact />,
      },
      {
        path: "/szakterulet",
        element: <Specialization />,
      },
      {
        path: "/tudnivalok",
        element: <Informations />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
