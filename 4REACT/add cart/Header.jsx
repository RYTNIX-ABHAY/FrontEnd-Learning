import {useSelector} from "react-redux";


export default function Head(){
  const count=useSelector((state)=> state.first.count)

    return(
        <div style={{display:"flex" ,justifyContent:"center" ,gap:"20px"}} >
        <h1>SWIIGY</h1>
        <h2>CART_Items :{count}</h2>
        </div>
    )
}