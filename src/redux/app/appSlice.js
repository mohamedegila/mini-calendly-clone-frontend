import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    
    events:[]
}
let appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        events:(state, status) => {
            console.log({status});
            state.events = status.payload
        }
    }
})


export let appReducer = appSlice.reducer;
export let {events} = appSlice.actions;
