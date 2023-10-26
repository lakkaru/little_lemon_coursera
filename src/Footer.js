import React from "react";
import logo from "./assets/Logo.svg";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="little lemon logo" />
      <div>
        <div style={{ display: "flex", gap: "150px" }}>
          <p>
            Doormat <br></br> Navigation
          </p>
          <p>Contact</p>
          <p>Social Media Links</p>
        </div>
        <div style={{display:'flex',display: "flex", gap: "120px" }}>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <a href="#" style={{ textDecoration: "none" }}>
              Home
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              About
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Menu
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Reservations
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Order Online
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Login
            </a>
          </nav>
          <div>
            <p>Address</p>
            <p>Phone number</p>
            <p> Email</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>WhatsApp</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
