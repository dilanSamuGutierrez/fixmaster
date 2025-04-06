"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Category = {
  id: string
  name: string
  image: string
  count: number
}

export function CategoriesSection() {
  const categories: Category[] = [
    {
      id: "tops",
      name: "Tops",
      image: "/placeholder.svg?height=600&width=400",
      count: 42,
    },
    {
      id: "dresses",
      name: "Vestidos",
      image: "/placeholder.svg?height=600&width=400",
      count: 38,
    },
    {
      id: "bottoms",
      name: "Pantalones",
      image: "/placeholder.svg?height=600&width=400",
      count: 35,
    },
    {
      id: "accessories",
      name: "Accesorios",
      image: "/placeholder.svg?height=600&width=400",
      count: 27,
    },
  ]

  return (
    <section id="categories" className="bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Categorías Destacadas</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Explora nuestra colección por categorías y encuentra tu estilo perfecto
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <Link href={`#${category.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="mb-1 text-2xl font-bold">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count} productos</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

