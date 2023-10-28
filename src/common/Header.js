import React from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./header/Nav";
import Mob_nav from "./header/Mob_nav";

export default function Header() {
  return (
    <header>
      <div className="navbar">
        <img src={Logo} alt="Little lemon logo" />
        <Nav />
      </div>
      <div className="mobile_navbar">
        <Mob_nav />
      </div>
    </header>
  );
}
