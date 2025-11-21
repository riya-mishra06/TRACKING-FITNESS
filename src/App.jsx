import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import Tracking from "./Pages/Tracking";
import MemberShip from "./Pages/MemberShip";
import Footer from "./Components/Common.jsx/Footer";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/tracking" 
          element={
            <ProtectedRoute>
              <Tracking />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/membership" 
          element={
            <ProtectedRoute>
              <MemberShip />
            </ProtectedRoute>
          } 
        />

        {/* Public but separate */}
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
