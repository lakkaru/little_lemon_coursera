import React from "react";
import Hamburger from "../../assets/hamburger menu.svg";
import logo from "../../assets/Logo.svg";
import basket from "../../assets/Basket.svg";

export default function Mob_nav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <img src={Hamburger} alt=""  />
      <img src={logo} alt="" />
      {/* <div> */}
      <img src={basket} alt="" />
      {/* </div> */}
    </div>
  );
}
