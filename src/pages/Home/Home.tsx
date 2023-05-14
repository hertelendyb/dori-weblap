import React from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
