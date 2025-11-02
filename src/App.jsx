import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../src/Pages/HomePage'
import LoginPage from "../src/Pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;
