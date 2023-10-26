import React from "react";
import Rogger from "../assets/Rogger.png";
import Peat from "../assets/Peat.png";
import Alice from "../assets/Alice.png";
import Teena from "../assets/Teena.png";
import Star from "../assets/star.png";

export default function Testimonials() {
  const testimonials = [
    { rating: 4, image: Rogger, name: "Rogger", review: "Tasty foods." },
    {
      rating: 3,
      image: Alice,
      name: "Alice",
      review: "Good customer service.",
    },
    {
      rating: 5,
      image: Teena,
      name: "Teena",
      review: "Excellent foods and deserts.",
    },
    { rating: 4, image: Peat, name: "Peat", review: "Nice place for dinner." },
  ];
  return (
    <section style={{ margin: '10% 0', backgroundColor: "#A9A9A9", padding: "10%" }}>
      <h2 style={{ textAlign: "center", fontSize: "4rem" }}>Testimonials!</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          // gap:1,
          margin: "10% 15% 0 15%",
          fontFamily: "Karla",
        }}
      >
        {testimonials.map((val, key) => {
         const ratingStats=[];
          for (let index = 1; index <= val.rating; index++) {
            ratingStats.push(<img src={Star} alt="" style={{width:'15px'}}/>);
          }
          return (
            <article
              key={key}
              style={{
                backgroundColor: "#EDEFEE",
                padding: "15px",
                width: "20%",
                borderRadius: "15px",
              }}
            >
              <h3 style={{ fontSize: "1.25rem" }}>{ratingStats}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={val.image}
                  alt=""
                  style={{ width: "75px", borderRadius: "50%" }}
                />{" "}
                <h4>{val.name}</h4>
              </div>
              <p style={{ fontSize: ".75rem" }}>{val.review}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
