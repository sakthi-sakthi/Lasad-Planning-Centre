import React from "react";
import Header from "./Components/Header";
import MenuBar from "./Components/MenuBar";
import SliderImage from "./Components/SliderImage";
import AboutHome from "./Components/AboutHome";
import HomeRooms from "./Components/HomeRooms";
import OurFacilities from "./Components/OurFacilities";
import AllDetails from "./Components/AllDetails";
import HomeContact from "./Components/HomeContact";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <SliderImage />
      <AboutHome />
      <HomeRooms />
      <HomeContact />
      <br />
      <br />
      <OurFacilities />
      <AllDetails />
      <Footer />
    </>
  );
};

export default Home;
