import React from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <Link to="/"> HarvestLogo </Link>
      </div>
      <div>
        <Link to="/features"> Features </Link>
        <Link to="/customers"> Customers </Link>
        <Link to="/integration"> Integration </Link>
        <Link to="/pricing"> Pricing </Link>
      </div>
      <div>
        <button> SignIn </button>
        <button> Try Harvest for Free </button>
      </div>
    </div>
  );
};

export default NavbarMain;
