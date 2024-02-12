import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import MainFooter from "./partials/MainFooter";
import MainMenuBar from "./partials/MainMenubar";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919943339446", "_blank");
  };
  return (
    <>
      <Header />
      <MainMenuBar />
      <div style={{ minHeight: "66.5vh", padding: "10px" }}>
        <Outlet />
      </div>
      <MainFooter />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: "999",
          border: "3px solid #25D366",
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <FaWhatsapp
          size={30}
          style={{ cursor: "pointer", color: "#25D366" }}
          onClick={handleWhatsAppClick}
        />
      </div>
    </>
  );
};

export default MainLayout;
