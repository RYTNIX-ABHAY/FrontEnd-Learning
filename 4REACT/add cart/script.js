import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Header";
import Card from "./Card";
import { Provider } from "react-redux";
import Store from "./store";



function App(){
    return (
        <Provider store={Store}>
        <Head/>
        <Card/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)