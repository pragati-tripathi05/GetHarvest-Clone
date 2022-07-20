import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Harvest Logo</Link>
      <Link to="/features"> Features</Link>
      {/* <Link to="/customers"> Customers</Link>
      <Link to="/integration"> Integration </Link> */}
      <Link to="/pricing"> Pricing</Link>
    </div>
  );
};

export default Navbar;
