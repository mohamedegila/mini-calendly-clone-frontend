import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "./app/appSlice";
import { authReducer } from "./auth/authSlice";
import { commonReducer } from "./common/commonSlice";



let store = configureStore({
    reducer:{
        app: appReducer,
        common: commonReducer,
        auth: authReducer
    }
})


export default store;