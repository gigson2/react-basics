import React from 'react'

const Greeting = () => {

    const name = "John Doe";
    const date = new Date();
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today's date is {date.toLocaleDateString()}</p>
    </div>
  )
}

export default Greeting
