import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../Pages/Customers";
import Features from "../Pages/Features";
import HomePage from "../Pages/HomePage";
import Integration from "../Pages/Integration";
import Pricing from "../Pages/Pricing";
import SignIn from "../Pages/SignIn";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
