import React from 'react'

const ProductInfo = () => {
    const name = "Laptop";
    const price = "$"+ 1199.99;
    const description = "A high-performance laptop with 16GB RAM and 512GB SSD.";
    const features = ["16GB RAM", "512GB SSD", "Intel i7 Processor", "4K Display"];
    const quantity = 10;

  return (
    <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <ul>
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <p>Quantity: {quantity}</p>
    </div>
  )
}

export default ProductInfo