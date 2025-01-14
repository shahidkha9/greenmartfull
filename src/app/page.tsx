import Link from 'next/link'
import Image from 'next/image'
import FeaturedProducts from '@/app/components/FeaturedProducts'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-green-700 text-white">
        <Image
          src="/products/Eco-friendly products.webp"
          alt="Eco-friendly products"
          fill
          style={{objectFit: 'cover'}}
          className="mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GreenMart</h1>
          <p className="text-xl md:text-2xl mb-8">Your one-stop shop for eco-friendly products</p>
          <Link href="/products" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Why Choose GreenMart?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Eco-Friendly</h3>
              <p className="text-gray-600">All our products are sustainably sourced and environmentally friendly.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Quality Assured</h3>
              <p className="text-gray-600">We guarantee the quality and durability of every product we sell.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Customer First</h3>
              <p className="text-gray-600">Our dedicated support team is always here to assist you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

