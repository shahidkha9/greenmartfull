'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)
  const [text, setText] = useState('')
  const fullText = "Special Offer: 20% off on all eco-friendly products!"

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
    }
  }, [text])

  if (!isVisible) return null

  return (
    <div className="bg-green-600 text-white py-2 px-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm sm:text-base font-medium">{text}</p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-green-200 transition duration-300"
          aria-label="Close banner"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  )
}

