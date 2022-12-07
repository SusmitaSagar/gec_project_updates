import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import Saga from "./Saga";
import createSagaMiddleware  from "redux-saga"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
       reducer:RootReducer,
       middleware:()=>[sagaMiddleware]
    }
);

sagaMiddleware.run(Saga);

export default store;