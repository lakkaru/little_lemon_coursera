import React, { useState } from "react";

export default function BookingForm() {

  const [date, setDate]=useState();
  const [time, setTime]=useState();
  const [guests, setGuests]=useState(1);
  const [occasion, setOccasion]=useState();

  const availableTimes =['17:00', '18:00', '19:00', '20:00', '21:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };
  return (
    <form
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        margin: "auto",
        border: "2px solid #495E57",
        borderRadius: "16px",
        padding: "20px",
        backgroundColor: "rgba(73, 94, 87, 1)",
        // marginTop: "5%",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={(e)=>setDate(e.target.value)}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e)=>setTime(e.target.value)}>
        {availableTimes.map((val, key)=>{
          return (<option key={key}>{val}</option>);
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>setGuests(e.target.value)}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e)=>setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        style={{ backgroundColor: "#F4CE14" }}
      />
    </form>
  );
}
