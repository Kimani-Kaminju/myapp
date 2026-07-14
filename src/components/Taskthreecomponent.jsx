import { useState } from "react";

const Taskthreecomponent = () =>{
    const [marks,setMarks] = useState(59);
    const [height,setHeight] = useState(150);
    const [weight,setWeight] = useState(90)
    const [points,setPoints] = useState(20)
    return(
        <div className="taskthreecomponent">
            <h3>Task Three react assignment</h3>
            <h4>Your Marks are: {marks} </h4>
                <button onClick={() => setMarks(marks+1)}>Update marks</button>
            <h4>Your height is {height} cm </h4>
                <button onClick={() => setHeight(height+1)}>Update height </button>
             <h4>Your weight is {weight} kg</h4>
                <button onClick={() => setWeight(weight+1)}>Update Weight </button>
             <h4>Your Points is {points} </h4>
                <button onClick={() => setPoints(points+1)}>Update Points</button>

        </div>
    )
}
export default Taskthreecomponent