import { getProducts } from '@/app/lib/products'
import ProductCard from '../components/ProductCard'

export default function FeaturedProducts() {
  const products = getProducts().slice(0, 4) // Get first 4 products as featured

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

