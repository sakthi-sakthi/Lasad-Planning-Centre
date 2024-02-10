import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuBar from "./Components/MenuBar";
import SliderImage from "./Components/SliderImage";
import AboutHome from "./Components/AboutHome";
import HomeRooms from "./Components/HomeRooms";
import OurFacilities from "./Components/OurFacilities";
import AllDetails from "./Components/AllDetails";
import HomeContact from "./Components/HomeContact";
import Footer from "./Components/Footer";
import { ApiUrl } from "./API/Api";
import axios from "axios";
import Features from "./Components/Features";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [homedata, setHomedata] = useState(null);
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919943339446", "_blank");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
        setHomedata(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MenuBar menudata={homedata?.headermenudata} />
      <SliderImage sliderdata={homedata?.SlidesData} />
      <AboutHome />
      <HomeRooms projectdata={homedata?.projectdata} />
      <HomeContact />
      <br />
      <br />
      <OurFacilities menudata={homedata?.headermenudata} />
      <AllDetails testimonials={homedata?.testmonialdata} />
      <br />
      <br />
      <Features />
      <Footer menudata={homedata?.headermenudata} />
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

export default Home;
