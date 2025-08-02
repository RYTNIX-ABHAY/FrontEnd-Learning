import React ,{useState} from "react";
import ReactDOm from "react-dom/client";

function Main(){
    let [count,setcount]=useState(0);

    return (
        <div className="ok">
            <h1>Count is: {count}</h1>
            <button onClick={()=>{
                setcount(count+1);
            }}>INCR</button>
            <button onClick={()=>{
                setcount(count-1);
            }}>DECR</button>
        </div>
    )
}
ReactDOm.createRoot(document.getElementById('root')).render(<Main/>);