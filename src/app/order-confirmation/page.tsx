import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  // In a real application, you'd fetch this data from your backend
  const orderNumber = Math.floor(100000 + Math.random() * 900000)
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle className="mx-auto mb-8 text-green-500" size={64} />
      <h1 className="text-3xl font-bold mb-4 text-green-800">Order Confirmed!</h1>
      <p className="text-xl mb-8">Thank you for your purchase. Your order has been received and is being processed.</p>
      <div className="bg-green-50 p-6 rounded-lg mb-8 inline-block text-left">
        <p className="mb-2"><strong>Order Number:</strong> #{orderNumber}</p>
        <p className="mb-2"><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>
      </div>
      <p className="mb-8">You will receive an email with your order details and tracking information once your order has been shipped.</p>
      <Link href="/order-tracking" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 mr-4">
        Track Order
      </Link>
      <Link href="/" className="bg-green-100 hover:bg-green-200 text-green-800 font-bold py-3 px-6 rounded-full inline-block transition duration-300">
        Continue Shopping
      </Link>
    </div>
  )
}


