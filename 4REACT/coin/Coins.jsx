import { useEffect } from "react";
import {Coin} from "./thunk"
import {useDispatch, useSelector} from "react-redux"

export default function Coins(){
    const dispatch =useDispatch();
    const {data,loading,error}=useSelector((state)=>state.slice01);

    useEffect(()=>{
        dispatch(Coin(20));
    },[])
    if(loading){
        return <h1>Loading Data</h1>

    }
    if(error){
        return <h1>error</h1>
    }
    return(
        <div id="done">
            {
                data.map((value)=>{
                    return (
                        <div className="mine" key={value.id}>
                            <img src={value.image}></img>
                            <h3>{value.name}</h3>
                            <p>Price:{value.current_price} USD</p>

                        </div>

                    )
                })
            }
        </div>
    )

}