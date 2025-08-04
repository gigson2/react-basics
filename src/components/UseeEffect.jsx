// We setup useEffect hook to run some code WHEN
// Component renders for the first time
// & whenever it re-renders
// & some data in our component changed

import React from 'react'
import { useState, useEffect } from 'react';

const UseeEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(()=>{
        console.log('useEffect called');
        document.title = `You clicked ${value} times`;
    },[value]); // Dependency array, effect runs when 'value' changes
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  )
}

export default UseeEffect
