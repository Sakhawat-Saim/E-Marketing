import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  media: {
    height: 140,
  },
});

const ServiceMngCard = (props) => {
  console.log(props);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { description, imageURL, price, title, _id } = props.service;
  const classes = useStyles();
  const deleteService = (props) => {
    console.log(props)
    let url = `https://fast-tor-66437.herokuapp.com/deleteService/${props}`;
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
  return (
    <div>
      {deleteClicked ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <Card
          id="projectCard"
          style={{ borderRadius: "10px", margin: "10px" }}
          className={classes.root}
        >
          <CardMedia className={classes.media} image={imageURL} title="Mello" />
          <CardActionArea>
            <CardContent>
              <div style={{ height: "50px", textAlign: "center" }}>
                <Typography style={{ color: "Skyblue", fontSize: "16px" }}>
                  {title}
                </Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={() => deleteService(_id)}
                  style={{
                    border: "1px solid red",
                    backgroundColor: "#EBC1BE",
                    color: "red",
                  }}
                  type="submit"
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default ServiceMngCard;

// export default ServiceMngCard;
