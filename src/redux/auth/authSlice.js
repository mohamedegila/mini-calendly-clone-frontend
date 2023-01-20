import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    isAuth: false,
    user:{
        id:"",
        username: "",
        email:""
    }
}
let authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        auth:(state, status) => {
            console.log({status});
            state.isAuth = status.payload
        }
    }
})


export let authReducer = authSlice.reducer;
export let {auth} = authSlice.actions;
