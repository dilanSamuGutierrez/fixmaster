"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function InstagramSection() {
  const instagramPosts = [
    {
      id: "i1",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
    {
      id: "i2",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
    {
      id: "i3",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
    {
      id: "i4",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
    {
      id: "i5",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
    {
      id: "i6",
      image: "/placeholder.svg?height=600&width=600",
      link: "#",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Síguenos en Instagram</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Descubre nuestras últimas novedades y outfits de inspiración en Instagram
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                <Instagram
                  size={24}
                  className="text-transparent transition-colors duration-300 group-hover:text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 transition-colors hover:text-pink-600"
          >
            <Instagram size={20} />
            <span className="font-medium">@chicstyle</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

