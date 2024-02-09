import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ConferenceHall from "./Pages/Features/ConferenceHall";
import Retreats from "./Pages/Services/Retreats";
import MainLayout from "./layout";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import OurRoomDetails from "./Pages/RoomsDetails/OurRoomDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MainLayout />}>
          <Route path="aboutus" element={<AboutUs />} />

          {/* facilities page routing */}

          <Route path="individualroom" element={<ConferenceHall />} />
          <Route path="dormitory" element={<ConferenceHall />} />
          <Route path="gatheringhall" element={<ConferenceHall />} />
          <Route path="acrooms" element={<ConferenceHall />} />
          <Route path="conferencehall" element={<ConferenceHall />} />
          <Route path="prayerroom" element={<ConferenceHall />} />
          <Route path="meditationhall" element={<ConferenceHall />} />
          <Route path="wifi" element={<ConferenceHall />} />

          {/* service page routing */}

          <Route path="retreats" element={<Retreats />} />
          <Route path="seminars" element={<Retreats />} />
          <Route path="meetings" element={<Retreats />} />
          <Route path="recollections" element={<Retreats />} />
          <Route path="programmes" element={<Retreats />} />

          <Route path="gallery" element={<ImageGallery />} />
          <Route path="services" element={<OurRoomDetails />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
