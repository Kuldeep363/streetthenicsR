import { combineReducers } from "redux";
import { myReducer } from "./reducers";

const appReducer = combineReducers({
    myReducer : myReducer
});

export default appReducer;