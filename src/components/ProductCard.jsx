import React, { useState } from "react";

const ProductCard = ({ product }) => {
    const [units, setUnits] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const handleUnitsChange = (event) => {
        setUnits(event.target.value);
    };

    const handleAddToCart = () => {
        if (units > 0) {
            setCartItems([...cartItems, { product, units }]);
            setUnits(0);
        }
    };

    const handleCardClick = () => {
        // Navigate to the detail page of the product
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4" onClick={handleCardClick}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            <h2 className="text-lg font-medium my-2">{product.name}</h2>
            <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">${product.price}</span>
                <div className="flex items-center">
                    <span className="mr-2">{product.stock} in stock</span>
                    <input
                        type="number"
                        min="0"
                        value={units}
                        onChange={handleUnitsChange}
                        className="w-16 border-gray-400 border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg " onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
