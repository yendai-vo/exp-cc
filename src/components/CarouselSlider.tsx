import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CarouselImageCard from "./CarouselImageCard";

const useStyles = makeStyles({
  slider: {
    border: "5px solid green",
    height: 250,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imageCards: {
    display: "flex",
    flexDirection: "row"
  }
});

export default () => {
  const classes = useStyles();

  const handleLeftArrowClick = () => {
    console.log("left arrow clicked");
  };

  const handleRightArrowClick = () => {
    console.log("right arrow clicked");
  };

  return (
    <div className={classes.slider}>
      <IconButton>
        <ArrowBackIosIcon onClick={handleLeftArrowClick} />
      </IconButton>
      <div className={classes.imageCards}>
        <CarouselImageCard />
        <CarouselImageCard />
        <CarouselImageCard />
        <CarouselImageCard />
      </div>
      <IconButton>
        <ArrowForwardIosIcon onClick={handleRightArrowClick} />
      </IconButton>
    </div>
  );
};
