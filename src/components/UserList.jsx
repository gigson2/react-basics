import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 28 },
    ];

    const productList = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 1999 },
        { id: 3, name: 'Tablet', price: 539 },
    ];
    return (
        <div>
            <h2>User List using map</h2>
            {users.map((user) => (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Age: {user.age}</li>
                </ul>
            ))}

            <h2>Product List using using destructuring</h2>
            {productList.map(({ id, name, price }) => (
                <ul key={id}>
                    <li>Name: {name}</li>
                    <li>Price: {price}</li>
                </ul>
            ))}
        </div>
    )
}

export default UserList