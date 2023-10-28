import React from "react";
import BookingForm from "./main/BookingForm";
import restaurant from "../assets/restaurant.jpg";

export default function BookingMain() {
  return (
    <main
      style={{
        backgroundImage: `url(${restaurant})`,
        backgroundSize: "contain",
        filter:'grayscale(50%)',
        boxShadow: 'inset 0 0 0 2000px rgba(55, 0, 50, 0.4)',
        padding:'20px',
        // margin: "0% 15% 0% 15%",
      }}
    >
      <BookingForm />
    </main>
  );
}
