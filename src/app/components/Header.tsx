'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/contexts/CartContext'

export default function Header() {
  const { getCartCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Ensure the component is mounted before rendering dynamic content
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Return a fallback UI during SSR to ensure consistency
    return null
  }

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">GreenMart</Link>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-white hover:text-green-200 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 items-center ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:static bg-green-700 w-full md:w-auto left-0 top-full md:top-0 p-4 md:p-0`}
        >
          <li className="mb-2 md:mb-0">
            <Link href="/" className="hover:text-green-200 transition duration-300 block md:inline">Home</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link href="/products" className="hover:text-green-200 transition duration-300 block md:inline">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-green-200 transition duration-300 flex items-center">
              <ShoppingCart className="mr-2" />
              <span>({getCartCount()})</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


