import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter ,Route ,Routes ,Link} from "react-router";
import About from "./src/About"
import Contact from "./src/contacts";
import Home from "./src/home";
import HI from "./src/hi";
import Hello from "./src/hello";
import Def from "./src/default";

function App(){
    return(
       <BrowserRouter>
       {/* navigation */}
       <nav>
        <Link to="/about">About</Link>
        
        <Link to="/home">Home</Link>
        <Link to="/contacts">Contacts</Link>
       </nav>
       {/* mainBody */}
       <Routes>
        <Route path="/home" element={<Home/>}>
        <Route index element={<Def/>}></Route>
        <Route path="hello" element={<Hello/>}></Route>
        <Route path="hi" element={<HI/>}></Route>
        </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contacts" element={<Contact/>}></Route>
       </Routes>
       {/* footer */}

       </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById("root")).render(<App/>);