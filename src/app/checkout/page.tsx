'use client'

import { useState } from 'react'
import { useCart } from '@/app/contexts/CartContext'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { sendOrderConfirmationEmail } from '@/app/utils/emailService'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { cart, getSubtotal, getDiscount, getTaxes, getShipping, getTotal, clearCart } = useCart()
  const router = useRouter()
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const stripe = await stripePromise

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shippingDetails,
        amount: getTotal(),
      }),
    })

    const session = await response.json()

    if (session.id) {
      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        console.error(result.error.message)
      } else {
        // Send order confirmation email
        const orderNumber = Math.floor(100000 + Math.random() * 900000).toString()
        await sendOrderConfirmationEmail({
          orderNumber,
          customerName: shippingDetails.name,
          customerEmail: shippingDetails.email,
          totalAmount: getTotal(),
          items: cart.map(item => ({
            name: item.product.name,
            quantity: item.quantity,
            price: item.product.price
          }))
        })

        clearCart()
        router.push(`/order-confirmation?orderNumber=${orderNumber}`)
      }
    } else {
      console.error('Failed to create checkout session')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingDetails.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={shippingDetails.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingDetails.city}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingDetails.postalCode}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingDetails.country}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold text-green-800 mb-2">Subtotal: ${getSubtotal().toFixed(2)}</p>
          <p className="text-xl font-semibold text-green-500 mb-2">Discount (20%): -${getDiscount().toFixed(2)}</p>
          <p className="text-xl font-semibold text-green-800 mb-2">Taxes: ${getTaxes().toFixed(2)}</p>
          <p className="text-xl font-semibold text-green-800 mb-2">Shipping: ${getShipping().toFixed(2)}</p>
          <p className="text-2xl font-bold text-green-800 mb-4">Total: ${getTotal().toFixed(2)}</p>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  )
}



