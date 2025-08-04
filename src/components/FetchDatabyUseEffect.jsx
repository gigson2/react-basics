import React, { useEffect } from 'react'

const FetchDatabyUseEffect = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();

            if (data && data.length > 0) {
                setData(data);
                console.log('Data fetched successfully:', data);
            } else {
                console.error('No data found or data is empty');
            }
        }
        getData().catch(error => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title} - Completed: {item.completed ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDatabyUseEffect
