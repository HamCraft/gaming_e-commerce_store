"use client";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  imageSrc: string;
}

export default function ProductCard({ name, price, imageSrc }: ProductCardProps) {
  const [count, setCount] = useState(1);

  // Functions to handle incrementing and decrementing
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count by 1
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1)); // Decrement the count but not below 1
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-full text-center">
      <div>
        <img src={imageSrc} alt={name} className="w-50 h-50 mx-auto mb-4" /> {/* Fixed size for consistency */}
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 text-sm">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button className="text-xl p-1" onClick={decrement}>-</button>
        <span className="mx-2 text-xl">{count}</span> {/* Display current count */}
        <button className="text-xl p-1" onClick={increment}>+</button>
      </div>
      <button className="mt-4 bg-green-200 text-green-700 px-4 py-2 rounded hover:bg-green-300 self-center">
        Add to cart
      </button>
    </div>
  );
}
