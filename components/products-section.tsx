"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  salePrice?: number
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const products: Product[] = [
    {
      id: "p1",
      name: "Blusa Floral",
      price: 29.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "tops",
      isNew: true,
    },
    {
      id: "p2",
      name: "Vestido Verano",
      price: 49.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "dresses",
    },
    {
      id: "p3",
      name: "Jeans Skinny",
      price: 39.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "bottoms",
      isSale: true,
      salePrice: 29.99,
    },
    {
      id: "p4",
      name: "Collar Bohemio",
      price: 19.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "accessories",
    },
    {
      id: "p5",
      name: "Camiseta Básica",
      price: 15.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "tops",
    },
    {
      id: "p6",
      name: "Falda Midi",
      price: 34.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "bottoms",
      isNew: true,
    },
    {
      id: "p7",
      name: "Vestido Elegante",
      price: 59.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "dresses",
      isSale: true,
      salePrice: 44.99,
    },
    {
      id: "p8",
      name: "Aretes Dorados",
      price: 12.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "accessories",
    },
  ]

  const categories = [
    { id: "all", name: "Todos" },
    { id: "tops", name: "Tops" },
    { id: "dresses", name: "Vestidos" },
    { id: "bottoms", name: "Pantalones" },
    { id: "accessories", name: "Accesorios" },
  ]

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section id="products" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Productos</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Descubre nuestra selección de prendas y accesorios de temporada
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 sm:grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                      {product.isNew && <Badge className="bg-pink-500 text-white hover:bg-pink-600">Nuevo</Badge>}
                      {product.isSale && <Badge className="bg-purple-500 text-white hover:bg-purple-600">Oferta</Badge>}
                    </div>

                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 transition-colors hover:bg-white hover:text-pink-500"
                      aria-label={favorites.includes(product.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Heart
                        size={18}
                        fill={favorites.includes(product.id) ? "currentColor" : "none"}
                        className={favorites.includes(product.id) ? "text-pink-500" : ""}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="mb-3 flex items-center gap-2">
                      {product.isSale ? (
                        <>
                          <span className="text-lg font-bold text-pink-500">${product.salePrice?.toFixed(2)}</span>
                          <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      )}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90"
                    >
                      <a
                        href={`https://wa.me/1234567890?text=Me%20interesa%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

