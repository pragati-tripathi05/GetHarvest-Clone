import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

const NavbarMain = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <Link to="/"> HarvestLogo </Link>
      </div>
      <div>
        <Divider orientation="vertical" />
      </div>
      <div>
        <Link to="/features"> Features </Link>
        <Link to="/customers"> Customers </Link>
        <Link to="/integration"> Integration </Link>
        <Link to="/pricing"> Pricing </Link>
      </div>
      <div>
        <Link to="/signin"> SignIn </Link>
        <Link to="/signup">
          <button> Try Harvest for Free </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMain;
