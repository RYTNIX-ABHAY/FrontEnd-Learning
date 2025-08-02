import React ,{useCallback, useEffect,useState}from "react";
import ReactDOM from "react-dom/client";

function Pass(){
    const[password,setpassword]=useState("");
    const [length,setlength]=useState(8);
    const [channum,setchangenum]=useState(false);
    const[chanchar,setchangechar]=useState(false);
    function chanpass(){
        let str="abcdeoGHIBCDEFOPfgJKLMNpqrstuvwxyzAhijklmnQRSTUVWXYZ";
        if(channum){
            str+="0123456789";
        }
        if(chanchar){
            str+="@$&~?;";
        }
        let pass="";
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)];
        }
      setpassword(pass);
    
      }
useCallback(chanpass,[length,chanchar,channum]);
  
 
  useEffect(()=>{
    chanpass();
  },[length,chanchar,channum])

    return(
      <div>
        <h1>PASSWORD IS : {password}</h1>
        <div className="change">
        <label>  
            <input type="range" min={8} max={20} value={length} onChange={(e)=>{
                setlength(e.target.value)
            }} ></input>
            length({length})</label>

        <label>
            <input type="checkbox" defaultChecked={channum} onChange={()=>{
                setchangenum(!channum);
            }}></input>
           NUMBER</label>

        
            <input type="checkbox"defaultChecked={chanchar} onChange={()=>{
                setchangechar(!chanchar);
            }} ></input>
            <label>SPECIAL CHARCTER</label>
        </div>
      </div>
    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<Pass/>);
