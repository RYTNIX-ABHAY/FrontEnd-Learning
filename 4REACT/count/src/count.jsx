import {useSelector,useDispatch} from "react-redux";
import { Inc,Dec } from "./slice1";


export default function Count(){
    const count =useSelector((state)=>state.slice.count);
    const dis = useDispatch();

    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dis(Inc())}>Increment</button>
        <button onClick={()=>dis(Dec())}>Decrement</button>
        </>
    )
}