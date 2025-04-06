"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type GalleryItem = {
  id: number
  title: string
  category: string
  before: string
  after: string
  description: string
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const [sliderPosition, setSliderPosition] = useState(50)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Instalación Eléctrica Completa",
      category: "electrical",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description:
        "Renovación completa del sistema eléctrico de una vivienda antigua, incluyendo nuevo cableado, cuadro eléctrico y protecciones.",
    },
    {
      id: 2,
      title: "Reparación de Fugas",
      category: "plumbing",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description:
        "Detección y reparación de fugas ocultas en el sistema de fontanería de un baño, evitando daños mayores.",
    },
    {
      id: 3,
      title: "Instalación de Ventiladores",
      category: "electrical",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description: "Montaje de ventiladores de techo con iluminación integrada en varias habitaciones de una vivienda.",
    },
    {
      id: 4,
      title: "Renovación de Baño",
      category: "plumbing",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description:
        "Renovación completa de un baño antiguo, incluyendo nueva grifería, sanitarios y sistema de fontanería.",
    },
    {
      id: 5,
      title: "Pintura Interior",
      category: "maintenance",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description: "Trabajos de pintura interior con reparación previa de paredes dañadas y tratamiento de humedades.",
    },
    {
      id: 6,
      title: "Instalación de Aire Acondicionado",
      category: "maintenance",
      before: "/placeholder.svg?height=600&width=600",
      after: "/placeholder.svg?height=600&width=600",
      description:
        "Montaje de sistema de aire acondicionado split en varias estancias, incluyendo conductos y conexiones.",
    },
  ]

  const filters = [
    { id: "all", name: "Todos" },
    { id: "electrical", name: "Electricidad" },
    { id: "plumbing", name: "Plomería" },
    { id: "maintenance", name: "Mantenimiento" },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPosition = (x / rect.width) * 100
    setSliderPosition(newPosition)
  }

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Trabajos</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Descubra la calidad de nuestros servicios a través de algunos de nuestros trabajos realizados. Cada proyecto
            refleja nuestro compromiso con la excelencia y la satisfacción del cliente.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-blue-200 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden" onMouseMove={handleSliderChange}>
                {/* Before image */}
                <Image
                  src={item.before || "/placeholder.svg"}
                  alt={`Antes - ${item.title}`}
                  fill
                  className="object-cover"
                />

                {/* After image with clip-path */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                  }}
                >
                  <Image
                    src={item.after || "/placeholder.svg"}
                    alt={`Después - ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Slider control */}
                <div
                  className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-md"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                  Antes
                </div>
                <div className="absolute bottom-2 right-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                  Después
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-blue-600">{filters.find((f) => f.id === item.category)?.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="grid gap-6 md:grid-cols-2">
              <Tabs defaultValue="before-after" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="before-after">Antes/Después</TabsTrigger>
                  <TabsTrigger value="comparison">Comparación</TabsTrigger>
                </TabsList>
                <TabsContent value="before-after" className="mt-4">
                  <div className="grid gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={selectedImage.before || "/placeholder.svg"}
                        alt={`Antes - ${selectedImage.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                        Antes
                      </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={selectedImage.after || "/placeholder.svg"}
                        alt={`Después - ${selectedImage.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        Después
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="comparison" className="mt-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg" onMouseMove={handleSliderChange}>
                    {/* Before image */}
                    <Image
                      src={selectedImage.before || "/placeholder.svg"}
                      alt={`Antes - ${selectedImage.title}`}
                      fill
                      className="object-cover"
                    />

                    {/* After image with clip-path */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                      }}
                    >
                      <Image
                        src={selectedImage.after || "/placeholder.svg"}
                        alt={`Después - ${selectedImage.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Slider control */}
                    <div
                      className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-md"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                      Antes
                    </div>
                    <div className="absolute bottom-2 right-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Después
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="mb-4 text-sm font-medium text-blue-600">
                  {filters.find((f) => f.id === selectedImage.category)?.name}
                </p>
                <p className="mb-6 text-gray-600">{selectedImage.description}</p>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">
                  <a href="#contact">Solicitar este servicio</a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

