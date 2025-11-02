import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import Tracking from "./Pages/Tracking";
// import Reports from "./Pages/Reports";
// import MemberShip from "./Pages/MemberShip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/tracking" element={<Tracking />} />
        {/* <Route path="/reports" element={<Reports />} /> */}
        {/* <Route path="/membership" element={<MemberShip />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
