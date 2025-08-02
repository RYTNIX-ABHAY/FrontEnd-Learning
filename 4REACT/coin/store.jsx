import {configureStore} from "@reduxjs/toolkit";
import slice1red from "./thunk"
const Store=configureStore({
    reducer:{
        slice01:slice1red
    }
})
export default Store;