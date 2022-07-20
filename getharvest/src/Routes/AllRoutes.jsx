import React from "react";
import { Route, Routes } from "react-router-dom";
import Features from "../Pages/Features";
import HomePage from "../Pages/HomePage";
import Pricing from "../Pages/Pricing";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/customers" element={"#"} />
        <Route path="/integration" element={"#"} /> */}
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
