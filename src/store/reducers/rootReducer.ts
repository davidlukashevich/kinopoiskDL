import { combineReducers } from "@reduxjs/toolkit";
import filmsSlice from "./filmsReducer"

const rootReducer = combineReducers({
  films: filmsSlice
});

export default rootReducer;
