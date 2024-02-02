import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import IndividualRooms from "./Pages/Features/IndividualRooms";
import Dormitories from "./Pages/Features/Dormitories";
import GatheringHall from "./Pages/Features/GatheringHall";
import ACRooms from "./Pages/Features/ACRooms";
import ConferenceHall from "./Pages/Features/ConferenceHall";
import PrayerRoom from "./Pages/Features/PrayerRoom";
import MeditationHall from "./Pages/Features/MeditationHall";
import WifiConnection from "./Pages/Features/WifiConnection";
import Retreats from "./Pages/Services/Retreats";
import Seminars from "./Pages/Services/Seminars";
import Meetings from "./Pages/Services/Meetings";
import Recollections from "./Pages/Services/Recollections";
import Programmes from "./Pages/Services/Programmes";
import MainLayout from "./layout";
import ImageGallery from "./Pages/Gallery/ImageGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MainLayout />}>
          {/* Features Sub Pages Routing */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="individualroom" element={<IndividualRooms />} />
          <Route path="dormitory" element={<Dormitories />} />
          <Route path="gatheringhall" element={<GatheringHall />} />
          <Route path="acrooms" element={<ACRooms />} />
          <Route path="conferencehall" element={<ConferenceHall />} />
          <Route path="prayerroom" element={<PrayerRoom />} />
          <Route path="meditationhall" element={<MeditationHall />} />
          <Route path="wifi" element={<WifiConnection />} />

          {/* Services Sub Pages Routing */}
          <Route path="retreats" element={<Retreats />} />
          <Route path="seminars" element={<Seminars />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="recollections" element={<Recollections />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
