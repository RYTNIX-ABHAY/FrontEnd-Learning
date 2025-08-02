import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";

const Coin= createAsyncThunk(
    //Action:type :payload
    "Coin/fetch",
    async(args,thunkAPI)=>{
   try{
    const Res=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
    const data= await Res.json();
    return data;
   }
   catch(error){
    return thunkAPI.rejectedWithValue("error in fetching API");
   }
    }


)
 import { createSlice } from "@reduxjs/toolkit";
const SLice1 =createSlice({
    name:"coin",
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(Coin.pending,(state)=>{
         state.loading=true;
         state.error=null
    })
    .addCase(Coin.fulfilled,(state,Action)=>{
        state.loading=false;
        state.data=Action.payload;

    })
    .addCase(Coin.rejected,(state,Action)=>{
        state.error=Action.payload;
        state.loading=false;
    })
    }
})


export default SLice1.reducer;
export {Coin};