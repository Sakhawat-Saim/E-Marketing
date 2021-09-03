import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  media: {
    height: 240,
  },
});

const HowWeDoCard = (props) => {
    const {id, imageUrl, title, description} = props.card;
  const classes = useStyles();
  return (
    <Card
      id="projectCard"
      style={{ borderRadius: "10px", margin: "1%" }}
      className={classes.root}
    >
      <CardMedia className={classes.media} image={imageUrl} title="Mello" />
      <CardActionArea>
        <CardContent>
          <div style={{ textAlign: 'center'}}>
              <Button style={{width: '40px', borderRadius: '50%', backgroundColor: '#F4CA16', fontSize: '30px', fontWeight: '1500'}}>{id}</Button>
            <Typography
              style={{ color: "Skyblue" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HowWeDoCard;





// import React from 'react';

// const HowWeDoCard = (props) => {
//     console.log(props);
//     return (
//         <div>
//             hello
//         </div>
//     );
// };

// export default HowWeDoCard;