import { useState } from "react";

const Assignment = () =>{
    let price = 200
    let [item,setItem] = useState(1)
    let totalprice = item * price

    return(
        <div className="assignment">
            <h1>Select item</h1>

            <h2>Item Decreement</h2>
            <button onClick={()=> setItem(item-1)}>Decrease</button>

            <h2>Item Increment</h2>
            <button onClick={()=> setItem(item+1)}>Increase</button>


        </div>
    )
}
export default Assignment;