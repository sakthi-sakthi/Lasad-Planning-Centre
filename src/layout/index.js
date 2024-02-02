import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import MainFooter from "./partials/MainFooter";
import MainMenuBar from "./partials/MainMenubar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainMenuBar />
      <div style={{ minHeight: "66.5vh", padding: "10px" }}>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
};

export default MainLayout;
