import { useState } from "react";
//hooks-provide a simpler and more readable approach for using state, context, refs, and other React features in functional components.
//useState-allows to add and manage state (data) inside a functional component.The useState() hook lets you declare state variables in a functional component.

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