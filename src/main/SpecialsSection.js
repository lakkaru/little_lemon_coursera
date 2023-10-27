import React from "react";
import Geek_salad from "../assets/greek salad.jpg";
import Burchetta from "../assets/bruchetta.svg";
import Lemon_Desert from "../assets/lemon dessert.jpg";
import { BiCycling } from "react-icons/bi";

export default function SpecialsSection() {
  const specials = [
    {
      imgSrc: Geek_salad,
      name: "Geek Salad",
      price: "23.00",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
    },
    // {
    //   imgSrc: Burchetta,
    //   name: "Burchetta",
    //   price: "18.00",
    //   description:
    //     "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
    // },
    // {
    //   imgSrc: Lemon_Desert,
    //   name: "Lemon Desert",
    //   price: "13.00",
    //   description:
    //     "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
    // },
  ];
  return (
    <section style={{ margin: "10% 15% 0 15%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Markazi Text",
            fontSize: "4rem",
          }}
        >
          This week specials!
        </h1>
        <div>
          <button
            style={{
              backgroundColor: "#F4CE14",
              borderRadius: "16px",
              padding: "15px",
              fontWeight: "bold",
              boxShadow: "5px 5px black",
              fontFamily: "Karla",
              fontSize: "1.5rem",
            }}
          >
            Online Menu
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: "5%" }}
      >
        {specials.map((val, key) => {
          return (
            <article
              key={key}
              style={{
                backgroundColor: "#EDEFEE",
                borderRadius: "16px 16px 0 0 ",
              }}
            >
              <img
                style={{
                  width: "100%",
                  minWidth: "250px",
                  height: "30vh",
                  minHeight: "180px",
                  borderRadius: "16px 16px 0 0 ",
                }}
                src={val.imgSrc}
                alt=""
              />
              <div style={{margin:'0 15px'}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontSize: "18pt", fontWeight: "bold" }}>
                    {val.name}
                  </h3>
                  <p
                    style={{
                      color: "red",
                      fontSize: "16pt",
                      fontWeight: "500",
                    }}
                  >
                    $ {val.price}
                  </p>
                </div>
                <p style={{ fontSize: "16pt" }}>{val.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontSize: "1.25rem" }}>Order for delivery</h3>
                  <BiCycling/>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
