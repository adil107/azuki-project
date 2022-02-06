import React from "react";
import GardenBgImg from "../../assests/images/garden-bg.png";
import Navbar from "../MajorComponents/Navbar/navbar";

function Garden() {
  return (
    <div className="page pt-4">
      <Navbar />
      <div className="col-12 container-fluid pt-3 d-flex">
        <div className="col-1"></div>
        <div className="col-5 m-0 p-0">
          <h1 className="heading">
            FROM THE ALLEY <br /> TO THE GARDEN{" "}
            <span className="head2">{"//"}</span>
          </h1>
        </div>
      </div>
      <div className="col-6 p-0 m-0 gardenImg">
        <img className="bgImg" src={GardenBgImg} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Garden;
