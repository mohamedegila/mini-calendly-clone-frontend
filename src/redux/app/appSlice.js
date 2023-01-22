import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    
    events:[],
    registerInfo:{}
}
let appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        events:(state, status) => {
            console.log({status});
            state.events = status.payload
        },
        setRegisterInfo:(state, status) => {
            console.log({status});
            state.registerInfo = status.payload
        }
    }
})


export let appReducer = appSlice.reducer;
export let {events, setRegisterInfo} = appSlice.actions;
