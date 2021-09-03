import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "../Admin/Admin.css";
import Book from "./Book/Book";
import BookingList from "./BookingList/BookingList";
import Review from "./Review/Review";



const Customer = () => {
  const [switchState, setSwitchState] = useState({
    book: true,
    bookingList: false,
    review: false,
  });
  const switchWorkplace = (props) => {
    // console.log(props);
    if (props === "book") {
      setSwitchState({
        book: true,
        bookingList: false,
        review: false,
      });
    } else if (props === "bookingList") {
      setSwitchState({
        book: false,
        bookingList: true,
        review: false,
      });
    } else if (props === "review") {
      setSwitchState({
        book: false,
        bookingList: false,
        review: true,
      });
    } else {
      console.log("error!");
    }
  };
  const { book, bookingList, review } = switchState;
  return (
    <div id="adminSuperDiv">
      <div id="nestedDiv">
        <div style={{ width: "90%" }}>
          <Button onClick={() => switchWorkplace("book")}>
            Book
          </Button>
        </div>
        <div style={{ width: "90%" }}>
          <Button onClick={() => switchWorkplace("bookingList")}>
            Booking List
          </Button>
        </div>
        <div style={{ width: "90%" }}>
          <Button onClick={() => switchWorkplace("review")}>
            Review
          </Button>
        </div>
      </div>
      <div id="workplace">
        {book && <Book />}
        {bookingList && <BookingList />}
        {review && <Review />}
      </div>
    </div>
  );
};

export default Customer;

// export default Customer;
