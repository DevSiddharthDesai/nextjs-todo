import { combineReducers } from "redux";
import { MainReducer } from "./main/main.reducer";

export const rootReducer = combineReducers({
    user: MainReducer
});
