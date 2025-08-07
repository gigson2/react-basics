import React, { useReducer, useState } from 'react'
import { counterReducer, initialState } from './counterReducer'

const Counter = () => {
    // Counter component logic can be added here
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0);
    const handleIncrement = () => {
        dispatch({ type: 'increment' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    }

    const handleIncrementByAmount = () => {
        dispatch({ type: 'incrementByAmount', payload: Number(inputValue) });
        setInputValue(0); // Reset input after increment
    }
    const handleDecrementByAmount = () => {
        dispatch({ type: 'decrementByAmount', payload: Number(inputValue) });
        setInputValue(0); // Reset input after decrement
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Subtract</button>
            </div>
        </div>
    )
}

export default Counter
