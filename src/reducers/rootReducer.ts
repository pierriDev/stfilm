import { combineReducers } from "redux";
import CartSlice from "./CartReducer/CardManager";

const rootReducer =  combineReducers({
    cart: CartSlice,
})

export default rootReducer