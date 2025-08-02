import { useState } from "react";
import Store from "./store";
import { AddItem ,DelItem } from "./slice";
import {useDispatch} from "react-redux";

export default function Incart({value}){

   
    const [incart,setincart]=useState(false);
   const dispatch =useDispatch(); 
 function Handel(){
    if (incart) {
        setincart(false);
        dispatch(DelItem()); // Remove = Decrease
      } else {
        setincart(true);
        dispatch(AddItem()); // Add = Increase
      }
      
 }
    return (
        <>
        <h1>{value.food}</h1>
        <p>{value.price}</p>
        <button onClick={Handel}>{incart?"remove":"Add"}</button>
        </>
    )
        
  
    
}