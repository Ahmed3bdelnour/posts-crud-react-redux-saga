import { combineReducers } from "redux";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  postsState: postsReducer,
});

export default rootReducer;
