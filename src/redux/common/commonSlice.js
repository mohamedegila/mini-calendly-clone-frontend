import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    refresh: false,
    counter: 0
}
let commonSlice = createSlice({
    name:"common",
    initialState,
    reducers:{
        refresh:(state, status) => {
            console.log({status});
            state.refresh = status.payload
        }
    }
})


export let commonReducer = commonSlice.reducer;
export let {refresh} = commonSlice.actions;
