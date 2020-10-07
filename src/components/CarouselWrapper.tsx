import React from "react";
import { makeStyles } from "@material-ui/core";
import CarouselSlider from "./CarouselSlider";

const useStyles = makeStyles({
  carouselWrapper: {
    height: 250,
    width: "90%",
    border: "5px solid red",
    margin: "auto",
    padding: 10
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.carouselWrapper}>
      <CarouselSlider />
    </div>
  );
};
