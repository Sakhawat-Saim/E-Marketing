import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { UserContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    width: 180,
  },
  media: {
    height: 170,
  },
});

const BookingListCard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let { isAdmin, email, isUser } = loggedInUser;
  console.log(isAdmin, email, isUser);
  // isAdmin = true; email === props.booking.email
  const classes = useStyles();
  const [services, setServices] = useState([]);

  const { name, service, date, _id, status } = props.booking;
  const bookingInfo = {
    _id: _id,
    name: name,
    service: service,
    date: date,
    imageURL: "hello",
    status: status,
  };
  const [selectedValue, setSelectedValue] = useState(status);
  // props.booking.status = selectedValue;
  // console.log(props.booking.status);
  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addService")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  for (let i = 0; i < Object.size(services); i++) {
    if (services[i].title === bookingInfo.service) {
      bookingInfo.imageURL = services[i].imageURL;
    }
  }
  //update
  const handleStatus = (event) => {
    // console.log("clicked", event.target.value);
    bookingInfo.status = event.target.value;

    setSelectedValue(event.target.value);
    const url = `https://fast-tor-66437.herokuapp.com/updateStatus/${_id}`;
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const [deleteClicked, setDeleteClicked] = useState(false);
  const deleteBooking = (props) => {
    console.log(props);
    let url = `https://fast-tor-66437.herokuapp.com/deleteBooking/${props}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Logo deleted Successfully!");
      });
    setDeleteClicked(true);
  };

  // console.log(props.booking.status);
  // console.log(bookingInfo.status);
  // console.log(selectedValue);
  // email === props.booking.email
  console.log(email);
  console.log(props.booking.email);
  if (email === props.booking.email) {
    console.log("Matched");
  } else {
    console.log("MisMatched");
  }
  return (
    <div>
      {isAdmin && (
        <div>
          {deleteClicked ? (
            <div sytle={{ display: "none" }}></div>
          ) : (
            <Card
              id="projectCard"
              style={{ borderRadius: "10px", margin: "10px" }}
              className={classes.root}
            >
              <CardMedia
                className={classes.media}
                image={bookingInfo.imageURL}
                title="Mello"
              />
              <CardActionArea>
                <CardContent>
                  <span style={{ color: "Skyblue" }}>{service}</span>
                  <div style={{ height: "60px" }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {name}
                      <br />
                      {props.booking.email}
                      <br />
                      {date}
                    </Typography>
                  </div>
                </CardContent>
                <div sytle={{textAlign: 'center'}}>
                  <select
                    disabled={!isAdmin}
                    class="form-control"
                    onChange={handleStatus}
                    name="status"
                    value={selectedValue}
                    style={{ margin: "3%", width: '90%' }}
                  >
                    <option>Done</option>
                    <option>Pending</option>
                    <option>On going</option>
                    <option>Paused</option>
                  </select>
                </div>
                <div style={{ margin: "5px 0px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteBooking(_id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    &nbsp;DELETE
                  </Button>
                </div>
              </CardActionArea>
            </Card>
          )}
        </div>
      )}
      {isUser && (
        <div>
          {email === props.booking.email ? (
            <div>
              {deleteClicked ? (
                <div sytle={{ display: "none" }}></div>
              ) : (
                <Card
                  id="projectCard"
                  style={{ borderRadius: "10px", margin: "10px" }}
                  className={classes.root}
                >
                  <CardMedia
                    className={classes.media}
                    image={bookingInfo.imageURL}
                    title="Mello"
                  />
                  <CardActionArea>
                    <CardContent>
                      <span style={{ color: "Skyblue" }}>{service}</span>
                      <div style={{ height: "60px" }}>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {name}
                          <br />
                          {props.booking.email}
                          <br />
                          {date}
                        </Typography>
                      </div>
                    </CardContent>
                    <div style={{textAlign: 'center'}}>
                      <select
                        disabled={!isAdmin}
                        class="form-control"
                        onChange={handleStatus}
                        name="status"
                        value={selectedValue}
                        style={{ margin: "5%", widht: '90%' }}
                      >
                        <option>Done</option>
                        <option>Pending</option>
                        <option>On going</option>
                        <option>Paused</option>
                      </select>
                    </div>
                    <div style={{ margin: "5px 0px"  }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteBooking(_id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        &nbsp;DELETE
                      </Button>
                    </div>
                  </CardActionArea>
                </Card>
              )}
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingListCard;

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
