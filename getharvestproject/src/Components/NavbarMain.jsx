import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
        <Button />
      </div>
    </div>
  );
};

export default NavbarMain;
