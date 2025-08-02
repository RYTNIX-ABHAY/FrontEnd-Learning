import React from "react";

import {useEffect,useState} from "react";
function Switc(){

    const [color,setColor]=useState("black");

    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },[color]);
    return(
        <div className="change">
        <h1>color changer</h1>
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
        <button style={{backgroundColor:"orange"}}onClick={()=>setColor("orange")} >orange</button>
        <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>
        </div>
    )

}
export default Switc;