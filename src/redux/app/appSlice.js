import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    
    events:[{
        id: 1,
        duration: 10
    },
    {
        id: 2,
        duration: 60
    }]
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
