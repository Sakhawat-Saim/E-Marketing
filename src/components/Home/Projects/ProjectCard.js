import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./ProjectCard.css";

const useStyles = makeStyles({
  root: {
    width: 210,
  },
  media: {
    height: 200,
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();
  const { id, title, header, imageUrl, progress } = props.project;
  return (
    <Card
      id="projectCard"
      style={{ borderRadius: "10px", margin: "10px" }}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={id} />
        <CardContent>
          <div style={{ height: "120px" }}>
            <Typography style={{color: 'Skyblue'}} gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {header}
            </Typography>
          </div>
          <div
            sytle={{
              width: "100%",
              backgroundColor: "white",
              border: "1px solid grey",
            }}
          >
            <div
              style={{
                width: `${progress}`,
                backgroundColor: "skyblue",
                padding: "0px 3%",
                borderRadius: "20px",
              }}
            >
              {progress}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
