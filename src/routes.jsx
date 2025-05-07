import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

import { ContactPage } from "./pages/ContactPage";
import  Login  from "./components/Login";
import  Register  from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Blanks from "./pages/Blanks";
import { Dragon } from "./pages/dragon";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Blanks />} />
      <Route path="/token" element={<HomePage />} />
      <Route path="/tiger" element={<AboutPage />} />
      <Route path="/dragon" element={<Dragon />} />
      {/* <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default RouteConfig;
