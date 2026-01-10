import { combineReducers } from "@reduxjs/toolkit";
import filmsSlice from "./filmsReducer"
import trailerSlice from './trailerReducer'

const rootReducer = combineReducers({
  films: filmsSlice,
  trailer: trailerSlice
});

export default rootReducer;
