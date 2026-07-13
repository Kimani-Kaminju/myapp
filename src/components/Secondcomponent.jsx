// variable-container that enables one to store dynamic values on our website
// to declare we use initializer let or const
const Secondcomponent = () => {
    //example on how to declare variables
    let name = "Bernard James"
    let age = 43
    let message = "I love programming"

    return(
        <div className="secondcomponent">
            <h1>Welcome to my second component</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, mollitia voluptatum dolorem sit hic doloremque iste excepturi necessitatibus! Aspernatur, incidunt!</p>

            {/*Below we bind our variables:*/}
            <h4>I am {name}.and i am {age} years and {message}</h4>
        </div>
    )

}
export default Secondcomponent