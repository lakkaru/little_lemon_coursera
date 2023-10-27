import React from "react";
import Mario_A from "../assets/Mario and Adrian A.jpg";
import Mario_B from "../assets/Mario and Adrian b.jpg";

export default function AboutSection() {
  return (
    <div
      style={{
        margin: "0 15% 0 15%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10%",
      }}
    >
      <div>
        <h2
          style={{
            color: "#000",
            fontSize: "2.5rem",
            fontFamily: "Markazi Text",
          }}
        >
          Little Lemon
        </h2>
        <h3
          style={{
            color: "#000",
            fontSize: "1.25rem",
            fontFamily: "Karla",
          }}
        >
          Chicago
        </h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
      <div style={{ position: "relative", display: "flex" }}>
        <img
          src={Mario_A}
          alt=""
          style={{ width: "250px", position: "relative", borderRadius:'10PX' }}
        />
        <img
          src={Mario_B}
          alt=""
          style={{
            width: "250px",
            position: "relative",
            left: "-40px",
            top: "-40px",
            borderRadius:'10PX' 
          }}
        />
      </div>
    </div>
  );
}
