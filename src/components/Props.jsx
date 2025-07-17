import React from 'react'

const Props = () => {
    return (
        <User name="John Doe" age={30} isMarried={true} hobbies={["gaming", "coding"]} imgUrl="https://picsum.photos/200/300" />
        // You can also render other components or elements here    
    )
}
const User = (props) => {
    return (
        <div>
            {/* Using props */}
            <h1>Using Props (Parent to Child)</h1>
            <img src={props.imgUrl} alt="User" />
            <h4>{props.name}</h4>
            <p>{props.age}</p>
            <p>{props.isMarried ? "Married" : "Single"}</p>
            <p>Hobbies: {props.hobbies.join(", ")}</p>
        </div>
    )
}

export default Props