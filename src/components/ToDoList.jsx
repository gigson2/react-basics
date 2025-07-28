import React from 'react'

const ToDoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return; // Prevent adding empty tasks
        // Add the new task to the list
        setTodos([...todos, inputValue]);
        setInputValue(''); // Clear the input field
    };
    return (
        // explain the code
        // This component manages a simple to-do list where users can add tasks.
        <div>
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Enter a task' />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
