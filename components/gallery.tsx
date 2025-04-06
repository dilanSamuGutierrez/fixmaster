"use client"

import Image from "next/image"
import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Bride and groom" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Wedding ceremony" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Wedding rings" },
    { src: "/placeholder.svg?height=800&width=600", alt: "First dance" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Wedding details" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Bridal portrait" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Wedding party" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Venue decoration" },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-light tracking-wide text-gray-800 sm:text-4xl">
          Galería
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

