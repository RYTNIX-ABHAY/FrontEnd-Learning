import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDom from "react-dom/client";
import switc from "./component/setcolor";
import Switc from "./component/setcolor";

function Main(){
   return <Switc/>
   
}

ReactDom.createRoot(document.getElementById("root")).render(<Main/>);