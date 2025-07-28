import React from 'react'

const StateComp = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }
    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    const divStyle = {
        textAlign: 'center',
    };
    const textStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };
    const decrementButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#f44336',
        marginLeft: '10px',
        padding: '10px 20px',
    };
    return (
        <div style={divStyle}>
            <h1 style={textStyle}>Count: {count}</h1>
            <button style={buttonStyle} onClick={increment}>Increment</button>
            <button style={decrementButtonStyle} onClick={decrement}>Decrement</button>
        </div>
    )
}

export default StateComp
