import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/app/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-green-800">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300">
          View Details
        </Link>
      </div>
    </div>
  )
}

