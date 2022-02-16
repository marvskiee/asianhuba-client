import { combineReducers } from "redux";
import searchReducer from "./search/searchReducers";
import homeReducer from "./home/homeReducers";
import historyReducer from "./history/historyReducers";

const rootReducer = combineReducers({
  search: searchReducer,
  home: homeReducer,
  history: historyReducer,
});

export default rootReducer;
