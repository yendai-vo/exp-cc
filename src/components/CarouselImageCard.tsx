import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  makeStyles,
  Card,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  cardWrapper: {
    display: "flex"
  },
  card: {
    width: "100%",
    border: "2px solid blue",
    margin: 10
  },
  media: {
    height: 200,
    width: "100%",
    border: "2px dotted purple"
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardMedia className={classes.media}>Movie Poster</CardMedia>
        <Typography color="textSecondary">Movie Title</Typography>
      </Card>
    </div>
  );
};
