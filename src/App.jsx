import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import Tracking from "./Pages/Tracking";
import MemberShip from "./Pages/MemberShip";
import Footer from "./Components/Common.jsx/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* These were protected, now normal */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/membership" element={<MemberShip />} />

        {/* Public */}
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
