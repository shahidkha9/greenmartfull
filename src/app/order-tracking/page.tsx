'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [orderStatus, setOrderStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you'd fetch the order status from your backend
    setOrderStatus('Your order is currently being processed and will be shipped soon.')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">Track Your Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="flex items-center border-b border-green-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter your order number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
          <button
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            <Search size={24} />
          </button>
        </div>
      </form>
      {orderStatus && (
        <div className="bg-green-50 p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Order Status</h2>
          <p>{orderStatus}</p>
        </div>
      )}
    </div>
  )
}

