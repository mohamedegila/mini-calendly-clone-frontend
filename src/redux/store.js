import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { commonReducer } from "./common/commonSlice";



let store = configureStore({
    reducer:{
        common: commonReducer,
        auth: authReducer
    }
})


export default store;