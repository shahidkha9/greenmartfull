'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/contexts/CartContext'

export default function Header() {
  const { getCartCount } = useCart()

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">GreenMart</Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-green-200 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-green-200 transition duration-300">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-green-200 transition duration-300 flex items-center">
              <ShoppingCart className="mr-2" />
              <span>Cart ({getCartCount()})</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


