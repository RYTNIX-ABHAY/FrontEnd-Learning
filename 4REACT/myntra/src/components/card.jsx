function Card(props){
    return (
        <div className="card" style={{height:"340px", width:"300px", border:"2px solid black", textAlign:"center", borderRadius:"10px"}}>
            <img src={props.image}style={{height:"220px", width:"260px", textAlign:"center"}}></img>
            <div>
            <h1>{props.clothes}</h1>
            <h2>{props.offer}</h2>
            <h3>Shop Now</h3>
            <h2>Price:{props.price}</h2>
            </div>
            
        </div>
    )
}
export default Card;