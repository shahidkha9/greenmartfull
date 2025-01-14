'use client'

import { useCart } from '@/app/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getSubtotal, getDiscount, getTaxes, getShipping, getTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8 text-green-800">Your Cart is Empty</h1>
        <Link href="/products" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Your Cart</h1>
      <div className="grid gap-8">
        {cart.map((item) => (
          <div key={item.product.id} className="flex items-center border-b pb-4">
            <div className="w-24 h-24 relative mr-4">
              <Image 
                src={item.product.image} 
                alt={item.product.name} 
                fill
                style={{objectFit: 'cover'}}
                className="rounded"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-green-800">{item.product.name}</h2>
              <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => removeFromCart(item.product.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-semibold text-green-800 mb-2">Subtotal: ${getSubtotal().toFixed(2)}</p>
        <p className="text-xl font-semibold text-green-500 mb-2">Discount (20%): -${getDiscount().toFixed(2)}</p>
        <p className="text-xl font-semibold text-green-800 mb-2">Taxes: ${getTaxes().toFixed(2)}</p>
        <p className="text-xl font-semibold text-green-800 mb-2">Shipping: ${getShipping().toFixed(2)}</p>
        <p className="text-2xl font-bold text-green-800 mb-4">Total: ${getTotal().toFixed(2)}</p>
        <Link href="/checkout" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 mt-4">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}



