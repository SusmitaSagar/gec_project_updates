import { combineReducers } from "redux";
import CurrentUser_Reducer from "./reducers/CurrentUser_Reducer";

const RootReducer = combineReducers({
   CurrentUser_Reducer,
   
})

export default RootReducer;