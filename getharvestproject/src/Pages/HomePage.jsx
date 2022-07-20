import React from "react";

const HomePage = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div> Rating </div>
        <div>
          {" "}
          <h1> Finally, time tracking your team actually wants to use </h1>
        </div>
      </div>
      <div>
        <img
          width="50%"
          src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
          alt="laptop"
        />
      </div>
    </div>
  );
};

export default HomePage;
