import { useState } from "react";
//hooks
const Thirdcomponent = () =>{
    //example of usestate hook usage
    const [number,setNumber] = useState(10)
    const [name,setName] = useState("James")
    return(
        <div className="thirdcomponent">
            <h3>Welcome to my Third Component</h3>
            <h2>My number is:{number} </h2>
            <button onClick={() => setNumber(20)}>Update number</button>

              <h2>My name is: {name} </h2>
            <button onClick={() => setName("Joseph")}>Update number</button>
        </div>
        
    )
}
export default Thirdcomponent