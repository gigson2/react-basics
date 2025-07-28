import React from 'react'

export const ShoppingList = () => {
    const [items, setItems] = React.useState([]);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !quantity) return;
        const newItem = {
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity, 10)
        }
        setItems((prevItems) => [...prevItems, newItem]);
        setName('');
        setPrice('');
        setQuantity('');
    };

    const cardStyle = {
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };
    return (
        <div style={cardStyle}>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}
