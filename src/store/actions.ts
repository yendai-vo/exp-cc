import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buttonClicked = createAction("app/buttonClicked");

// api docs: http://www.omdbapi.com/
export const movieUrl = "https://www.omdbapi.com/?apiKey=16073636&i=";

export const fetchMovies = createAsyncThunk(
  "app",
  async (movies: string[], { dispatch }) => {
    dispatch({ type: "app/pending" });
    axios.all(movies.map((id) => axios.get(movieUrl+id))).then(axios.spread((...res)=>{
      //console.log("res.map.data: ", res.map((datum)=>datum.data))
      const dataArray = res.map((datum)=>datum.data)
      // if(res){
      //   dispatch({ type: "app/fulfilled", payload: res.map((datum)=>datum.data });
      // }
      dispatch({ type: "app/fulfilled", payload: dataArray });
     
    })).catch((e)=>{
      dispatch({ type: "app/rejected", payload: e.message });
    });
  }
);
