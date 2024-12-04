// app/page.tsx
"use client"

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch products from API route
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        {/* Background music */}
        <audio autoPlay loop>
          <source src="/music/background.mp3" type="audio/mpeg" />
          <p>Your browser does not support playing audio files.</p>
        </audio>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 ">
        <header className="bg-gradient-to-r from-slate-500 to-neutral-700 p-3 shadow-md flex justify-between items-center">
          <h1 className="text-2xl text-white font-extrabold ">Gaming Zone 🎮🔥</h1>
          <div className="relative cursor-pointer hover:bg-slate-400 text-5xl ">
            🛒
          </div>
        </header>
        <div className='text-center text-2xl font-semibold text-white hover:text-400 mt-4'>Buy Latest Games💿</div>
        <main className="max-w-7xl mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageSrc={product.imageSrc} />
          ))}
        </main>
      </div>
    </>
  );
}
