import React from "react";
import food from "../assets/restauranfood.jpg";

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: "#495E57", minWidth:'320px' }}>
      <div style={{ display: "flex", margin: "0 15% 0 15%", justifyContent:'space-between' }}>
        <article
          style={{
            width: "50%",
            fontFamily: "Markazi Text",
            // paddingRight: "10%",
            marginBottom:'5%'
          }}
        >
          <h1
            style={{
              color: "#F4CE14",
              fontSize: "4rem",
            }}
          >
            Little Lemon
          </h1>
          <h3
            style={{
              color: "#fff",
              fontSize: "2.5rem",
            }}
          >
            Chicago
          </h3>
          <p
            style={{ color: "#fff", fontFamily: "Karla", fontSize: "1.25rem" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using...
          </p>
          <button
            style={{
              backgroundColor: "#F4CE14",
              borderRadius: "16px",
              padding: "15px",
              fontWeight: "500",
              boxShadow: "5px 5px black",
              fontFamily: "Karla",
              fontSize: "18pt",
            }}
          >
            Reserve a table
          </button>
        </article>
        <img
          src={food}
          alt=""
          style={{
            width: "30%",
            // minWidth:'200px',
            borderRadius: "30px",
            position: "relative",
            top: "50px",
          }}
        />
      </div>
    </section>
  );
}
