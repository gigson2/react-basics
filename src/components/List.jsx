import React from 'react'

const List = () => {
    const UserDetails = [
        { id: 1, name: 'John Doe', location: 'New York', age: 30 },
        { id: 2, name: 'Jane Smith', location: 'Los Angeles', age: 25 },
        { id: 3, name: 'Bob Johnson', location: 'Chicago', age: 40 },
        { id: 4, name: 'Alice Brown', location: 'Houston', age: 35 },
        { id: 5, name: 'Charlie Davis', location: 'Miami', age: 28 }
    ];
    return (
        <div>
            <h2>Using Map</h2>
            {/* Using map to iterate over the UserDetails array */}
            {UserDetails.map((user) => (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Location: {user.location}</li>
                    <li>Age: {user.age}</li>
                </ul>
            ))}
            {/* Using destructuring to access properties directly */}
            <h2>Using Destructuring</h2>
            {/* destructuring the user object */}
            {UserDetails.map(({ id, name, location, age }) => (
                <ul key={id}>
                    <li>Name: {name}</li>
                    <li>Location: {location}</li>
                    <li>Age: {age}</li>
                </ul>
            ))}
        </div>
    )
}

export default List