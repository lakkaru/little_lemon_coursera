import React from "react";
import Footer_logo from "../assets/footer_logo.png";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#A9A9A9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10% 15% 0% 15%",
          padding: "5% 0",
        }}
      >
        <img
          src={Footer_logo}
          alt="little lemon logo"
          style={{ width: "75px" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 style={{marginBottom:'.5rem'}}>
            Doormat <br></br> Navigation
          </h4>
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
        </div>
        
          <div>
            <h4 style={{marginBottom:'2rem'}}>Contact</h4>
            <p>Address</p>
            <p>Phone number</p>
            <p> Email</p>
          </div>
          <div>
            <h4 style={{marginBottom:'2rem'}}>Social Media Links</h4>
            <p>Facebook</p>
            <p>WhatsApp</p>
            <p>Instagram</p>
          </div>
        
      </div>
    </footer>
  );
}
