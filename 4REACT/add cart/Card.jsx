const foodItem = [
    { id: 1, food: "Pizza", price: "200" },
    { id: 2, food: "Burger", price: "150" },
    { id: 3, food: "Pasta", price: "180" },
    { id: 4, food: "Sandwich", price: "120" },
    { id: 5, food: "Fries", price: "100" },
    { id: 6, food: "Momos", price: "130" }
];
  import Incart from "./incart";

export default function Card(){
  

    return(
        <div style={{display:'flex' ,justifyContent:"center",gap:"50px",flexWrap:"wrap" ,marginTop:"40px"}}>
           {
            foodItem.map((value)=>{
                return(
                    <div key={value.id} >
                       <Incart value={value}></Incart>
                    </div>
                )
            })
           }
        </div>
    )
}