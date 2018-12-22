import { combineReducers } from "redux";
import people from "./people";

const rootReducer = combineReducers({
  people: people
});

export default rootReducer;
