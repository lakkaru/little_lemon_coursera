import React from "react";
import Logo from "./assets/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header style={{display:'flex',justifyContent:'space-between', margin:'0 15% 0 15%'}}>
      <img src={Logo} alt="Little lemon logo" />
      <Nav/>
    </header>
  );
}
