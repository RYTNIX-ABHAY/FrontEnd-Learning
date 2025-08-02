import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/head";
import BoDy from "./components/body";


function Git(){
    return(
        <>
        <Head/>
        <BoDy/>
       </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Git/>)