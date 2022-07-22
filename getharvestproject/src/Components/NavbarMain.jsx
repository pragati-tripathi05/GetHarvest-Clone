import React from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

const NavbarMain = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <NavLink to="/"> HarvestLogo </NavLink>
      </div>
      <div>
        <Divider orientation="vertical" />
      </div>
      <div>
        <NavLink to="/features"> Features </NavLink>
        <NavLink to="/customers"> Customers </NavLink>
        <NavLink to="/integration"> Integration </NavLink>
        <NavLink to="/pricing"> Pricing </NavLink>
      </div>
      <div>
        <NavLink to="/signin"> SignIn </NavLink>
        <NavLink to="/signup">
          <button> Try Harvest for Free </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarMain;
