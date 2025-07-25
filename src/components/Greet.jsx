import React from 'react'

const Greet = ({timeOfDay}) => {
  return timeOfDay === 'morning' ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good {timeOfDay}</h1>
  )
}

export default Greet
