import ProductCard from '@/app/components/ProductCard'
import { getProducts } from '@/app/lib/products'

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-green-800">Our Eco-Friendly Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

