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

const Home = () => {
  const [homedata, setHomedata] = useState(null);

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
      <HomeRooms projectdata={homedata?.upcomingevents} />
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
