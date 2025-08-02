import {createSlice} from "@reduxjs/toolkit";

const slice1= createSlice({
   
    name:"couter",
    initialState:{count:0},
    reducers:{
        Inc:(state)=>{state.count=state.count+1},
        Dec:(state)=>{state.count=state.count-1}
    }

})
export const{Inc,Dec}=slice1.actions;
export default slice1.reducer;
