import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter,Route,Routes,Link} from "react-router"
import Home from "./src/home";
import Cont from "./src/contact";

function App(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/contact" element={<Cont/>} ></Route>
        </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById("root")).render(<App/>);