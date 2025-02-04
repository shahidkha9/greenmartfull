import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../app/components/Header'
import Footer from '@/app/components/Footer'
import Banner from '@/app/components/Banner'
import { CartProvider } from '@/app/contexts/CartContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { <meta name="google-site-verification" content="e81gHaHwsPOQr5MiIrm1Jryn35M5mAJjp2apcTpGnxY" />
  title: 'GreenMart - Your Eco-Friendly Store',
  description: 'Shop sustainably with GreenMart, your one-stop eco-friendly e-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>
        <CartProvider>
          <Banner />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}


