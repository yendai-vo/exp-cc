import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

const movieIdArray = [
  "tt8080054",
  "tt0848228",
  "tt4154796",
  "tt1826940",
  "tt3398228",
  "tt1439629",
  "tt1220719",
  "tt1386932",
  "tt5672048",
  "tt1312171",
  "tt4955642",
  "tt1266020",
  "tt0386676",
  "tt0487831",
  "tt2467372"
];
export function Button() {
  const dispatch = useDispatch();
  const onClick = () => dispatch(fetchMovies(movieIdArray));

  return <button onClick={onClick}>Get a movie</button>;
}
