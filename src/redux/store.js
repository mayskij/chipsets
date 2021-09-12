import { combineReducers, createStore } from "redux";
import chipsetReducer from "./chipset_reducer";
import accountReducer from "./account_reducer";

const reducers = combineReducers({
   chipset: chipsetReducer,
   account: accountReducer
})

let store = createStore(reducers)

window.store = store;

export default store