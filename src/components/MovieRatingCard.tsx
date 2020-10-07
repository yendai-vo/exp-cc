import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardMedia,
  TextField,
  Button
} from "@material-ui/core";
import StarRating from "./StarRating";

const useStyles = makeStyles({
  cardWrapper: {
    border: "2px solid red"
  },
  card: {
    border: "2px solid green"
  },
  movieTitle: {
    marginTop: 10,
    textAlign: "center"
  },
  starRatingSection: {
    position: "relative",
    marginTop: 10
  },
  infoSection: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  image: {
    height: 250,
    width: "25%",
    border: "2px dotted blue",
    margin: 15
  },
  descriptionSection: {
    height: 150,
    width: "40%",
    border: "2px dotted purple",
    margin: 15,
    position: "relative"
    //alignSelf: 'center',
  },
  commentSection: {
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    display: "flex",
    flexDirection: "column"
  },
  button: {
    right: 500
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <Typography variant="h5" className={classes.movieTitle}>
          Movie Title
        </Typography>
        <div className={classes.starRatingSection}>
          <StarRating />
        </div>
        <div className={classes.infoSection}>
          <CardMedia className={classes.image}>Image</CardMedia>
          <Typography className={classes.descriptionSection}>
            Movie Description
          </Typography>
          <form
            noValidate
            autoComplete="off"
            className={classes.commentSection}
          >
            <TextField
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              placeholder="Write a movie review (optional)."
              multiline
              rows={6}
              rowsMax={6}
            />
            <Button variant="contained">Submit</Button>
          </form>
        </div>
      </Card>
    </div>
  );
};
