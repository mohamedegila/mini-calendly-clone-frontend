import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    isAuth: sessionStorage.user !== undefined ? true : false,

    user: sessionStorage.user
          ? JSON.parse(sessionStorage.getItem("user"))
          : null,
}
let authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuth:(state, status) => {
            console.log({status});
            state.isAuth = status.payload;
            // sessionStorage.setItem("isAuth", JSON.stringify(status.payload));
        },

        setUser: async (state, user) => {
          state.user = user.payload
        //   state.isAuth = true
          sessionStorage.setItem("user", JSON.stringify(user.payload));
        },

        logout: async (state) => {
          state.user = null
          state.isAuth = false
          sessionStorage.removeItem("user");
        },
    }
})


export let authReducer = authSlice.reducer;
export let {setAuth, setUser, logout} = authSlice.actions;
