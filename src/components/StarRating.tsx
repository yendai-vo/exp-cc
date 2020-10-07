import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  individualStar: {
    fontSize: 35
  }
});

export default () => {
  const classes = useStyles();
  function starRating() {
    var starArray = [];
    for (var i = 0; i < 5; i++) {
      starArray.push(<StarBorderIcon className={classes.individualStar} />);
    }
    return starArray;
  }
  return <div>{starRating()}</div>;
};
