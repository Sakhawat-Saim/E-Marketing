import React, { useEffect, useState } from "react";
import BookingListCard from "./BookingListCard/BookingListCard";
import bookinglist from './bookingList.json';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => {
        setBookings(bookinglist);
        console.log(error.message);
      });
  }, []);
  
  return (
    <div
      style={{
        textAlign: "center",
        margin: '2%'
      }}
    >
      <h5>Booking List</h5>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "3%",
          padding: "2%",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        {bookings.map((booking) => {
          return <BookingListCard booking={booking}></BookingListCard>;
        })}
      </div>
    </div>
  );
};

export default BookingList;
