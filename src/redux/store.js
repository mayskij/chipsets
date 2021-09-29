import { combineReducers, createStore } from "redux";
import chipset from "./chipset_reducer";
import account from "./account_reducer";
import basket from "./basket_reducer";

const reducers = combineReducers({
   chipset,
   account,
   basket,
})

let store = createStore(reducers)

window.store = store;

export default store