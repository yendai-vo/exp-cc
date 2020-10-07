import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppStateSlice } from "../store/reducer";
import { makeStyles, Typography, TextField } from "@material-ui/core";
import { Button } from "./Button";
import { AppState } from "./store/reducer";
import CarouselWrapper from "./CarouselWrapper";
import MovieRatingWrapper from "./MovieRatingWrapper";

const useStyles = makeStyles({
  carouselWrapper: {
    margin: 20
  },
  searchBar: {
    margin: "auto",
    textAlign: "right"
  }
});

export function App() {
  const state = useSelector<AppState, AppStateSlice>((state) => state.app);
  console.log("state: ", state);

  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h2">Huflixon+</Typography>
      <Button />
      <form noValidate autoComplete="off" className={classes.searchBar}>
        <TextField
          id="filled-basic"
          className={classes.searchBar}
          label="Search Title"
          variant="filled"
        />
      </form>
      <div className={classes.carouselWrapper}>
        <CarouselWrapper />
      </div>
      <div>
        <MovieRatingWrapper />
      </div>
    </div>
  );
}
