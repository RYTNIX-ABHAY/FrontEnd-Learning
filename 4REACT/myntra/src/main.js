import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Header from "./components/head";
import Footer from "./components/foot";
import items from "./utils/util";




function App() {
  let [A,setA]=useState(items);
  function sortarr(){
    A.sort((a,b)=>a.price-b.price);
    setA([...A]);
    
  }
  
    return (
      <>
      <Header/>
      <button onClick={sortarr}>sort by price</button>
      <div className="mid" style={{ display:"flex", flexWrap:"wrap", gap:"10px"}}>
        {
            A.map((value,index)=>{
               return <Card key ={index}clothes={value.clothes} offer={value.offer} image={value.image} price={value.price}/> 
            })
        }
      </div>
      <Footer/>
      </>
    );
  }


  
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)