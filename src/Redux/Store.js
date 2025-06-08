import { createStore } from "redux";
import cartReducer from "./CartSlice";

const store = createStore(cartReducer);

export default store;
