import React from "react";
import { makeStyles, Typography, TextField } from "@material-ui/core";
import MovieRatingCard from "./MovieRatingCard";

const useStyles = makeStyles({
  ratingComponent: {
    border: "2px solid blue",
    width: "90%",
    margin: "auto"
  },
  headingTitle: {
    marginTop: 10
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.ratingComponent}>
      <Typography variant="h4" className={classes.headingTitle}>
        Rate the Movies You've Seen
      </Typography>
      <MovieRatingCard />
      <MovieRatingCard />
      <MovieRatingCard />
    </div>
  );
};
