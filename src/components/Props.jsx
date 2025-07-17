import React from 'react'

const Props = () => {
    return (
        <UserNew name="John Doe" age={30} isMarried={true} hobbies={["gaming", "coding"]} imgUrl="https://picsum.photos/200/300" />


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
// Destructuring props
const UserNew = ({ name, age, isMarried, hobbies, imgUrl }) => {
    return (
        <div>
            <h1>Using Props (Parent to Child)</h1>
            <img src={imgUrl} alt="User" />
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{isMarried ? "Married" : "Single"}</p>
            <p>Hobbies: {hobbies.join(", ")}</p>
        </div>
    )
}

export default Props