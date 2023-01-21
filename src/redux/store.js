import {configureStore} from "@reduxjs/toolkit";
import { appReducer } from "./app/appSlice";
import { authReducer } from "./auth/authSlice";
import { commonReducer } from "./common/commonSlice";



let store = configureStore({
    reducer:{
        common: commonReducer,

        auth: authReducer,

        app: appReducer,
    }
})


export default store;