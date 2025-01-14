'use client';

import { getProductById } from '@/app/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useCart } from '@/app/contexts/CartContext';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Resolve the params promise using React's `use()`
  const resolvedParams = use(params);
  const product = getProductById(parseInt(resolvedParams.id));
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 relative h-[400px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-green-800">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4 text-green-600">${product.price.toFixed(2)}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

