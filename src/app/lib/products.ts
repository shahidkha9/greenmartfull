export interface Product {
    id: number
    name: string
    price: number
    description: string
    image: string
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Eco-Friendly Water Bottle",
      price: 24.99,
      description: "Reusable water bottle made from sustainable materials. Perfect for your daily hydration needs.",
      image: "/products/bottle.webp"
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      description: "Comfortable and stylish t-shirt made from 100% organic cotton. Available in various sizes and colors.",
      image: "/products/2.avif"
    },
    {
      id: 3,
      name: "Bamboo Cutlery Set",
      price: 19.99,
      description: "Portable and eco-friendly cutlery set made from sustainable bamboo. Includes fork, knife, spoon, and chopsticks.",
      image: "/products/pala.webp"
    },
    {
      id: 4,
      name: "Recycled Paper Notebook",
      price: 9.99,
      description: "Environmentally friendly notebook made from 100% recycled paper. Perfect for jotting down your thoughts and ideas.",
      image: "/products/3.avif"
    },
    {
      id: 5,
      name: "Solar-Powered Charger",
      price: 49.99,
      description: "Charge your devices on the go with this compact solar-powered charger. Eco-friendly and convenient.",
      image: "/products/4.avif"
    },
    {
      id: 6,
      name: "Reusable Produce Bags",
      price: 14.99,
      description: "Set of 5 reusable mesh produce bags. Perfect for grocery shopping and reducing plastic waste.",
      image: "/products/reusa.jpeg"
    },
    {
        id: 7,
        name: "Beeswax Wraps",
        price: 98.99,
        description: "Beeswax wraps are a natural alternative to plastic wrap for food storage. They are made from beeswax, jojoba oil, and cotton, and can be reused multiple times..",
        image: "/products/oil.jpeg"
      },
      {
        id: 8,
        name: "Eco-Friendly Cleaning Products",
        price: 14.99,
        description: "Eco-friendly cleaning products are made from natural ingredients and are free from harsh chemicals, toxins, and pollutants. They are biodegradable and non-toxic.",
        image: "/products/wasf.jpeg"
      }
  ]
  
  export function getProducts(): Product[] {
    return products
  }
  
  export function getProductById(id: number): Product | undefined {
    return products.find(product => product.id === id)
  }
  
  