import React from 'react'

const Cart = () => {
    const cartItems = ["Wireless Mouse", "Wireless Keyboard", "Monitor", "Laptop Stand", "Mouse Pad", "Headphones"];

    return <div>

        <h2>Shopping Cart</h2>
        {/* check items in cart */}
        {cartItems.length > 0 ? (
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p>Your cart is empty.</p>
        )}

        {/* count items in cart */}
        {cartItems.length > 0 && <h4>you have {cartItems.length} items in your cart</h4>}

        {/* total price of items in cart */}

        {/* total items in cart */}
        <p>Total items in cart: {cartItems.length}</p>
    </div>
}

export default Cart