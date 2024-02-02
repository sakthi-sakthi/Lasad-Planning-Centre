import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
