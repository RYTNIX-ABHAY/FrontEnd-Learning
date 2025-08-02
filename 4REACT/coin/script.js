import React from "react";
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import Store from "./store";
import Head from "./header";
import Coins from "./Coins";

function App(){
    return (
       <Provider store={Store} >
        <Head/>
        <Coins/>
       </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);