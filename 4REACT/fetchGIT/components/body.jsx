import { useEffect,useState } from "react";
function BoDy(){
  const [profile, setProfile] = useState([]);

  const [num,setnum]=useState("");

 async function getdata(count){
  try{
    let x=Math.floor(Math.random()*1000);
    const promise= await fetch(`https://api.github.com/users?since=${x}&per_page=${count}`)

    const data= await promise.json();
    setProfile(data)
  }
  catch(error){
    console.log("error");
  }
  }
  useEffect(()=>{
    getdata(num);
  },[])
    
    return(
        <>
        <div className="but">

        <input type="text" placeholder="search" value={num} onChange={(e)=>{
       setnum(Number(e.target.value))
        }}></input>

        <button onClick={()=>{
           getdata(num);
        }}>Search</button>
        </div>
      <div className="ma">
        
      {
        profile.map((value)=>{
           return(
            <div key={value.id} className="card">
                <img src={value.avatar_url}></img>
                <h2 style={{marginTop:"20px", marginBottom:"5px"}}>{value.login} </h2>
                <a href={value.html_url}>GIT PROFILE</a>
            </div>
           ) 
         
      })
      }
      </div>
      </>
    )
         
    
}
export default BoDy;