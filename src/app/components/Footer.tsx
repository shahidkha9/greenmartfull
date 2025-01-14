import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About GreenMart</h3>
            <p className="text-green-200">We are committed to providing eco-friendly products that help you live a sustainable lifestyle.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-green-200 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/products" className="text-green-200 hover:text-white transition duration-300">Products</Link></li>
              <li><Link href="/cart" className="text-green-200 hover:text-white transition duration-300">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-green-200">Email: shahidkha993@gmail.com</p>
            <p className="text-green-200">Phone: 0336-1808581</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; 2025 GreenMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

