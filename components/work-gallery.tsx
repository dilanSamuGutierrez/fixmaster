"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Branding Corporativo",
    category: "branding",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Rediseño completo de identidad visual para una empresa tecnológica, incluyendo logo, paleta de colores y aplicaciones.",
  },
  {
    id: 2,
    title: "Campaña Publicitaria",
    category: "advertising",
    image: "/placeholder.svg?height=800&width=600",
    description: "Desarrollo de materiales visuales para campaña en redes sociales y medios impresos.",
  },
  {
    id: 3,
    title: "Diseño Editorial",
    category: "editorial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Maquetación y diseño de revista digital con enfoque en experiencia de lectura y jerarquía visual.",
  },
  {
    id: 4,
    title: "Ilustración Digital",
    category: "illustration",
    image: "/placeholder.svg?height=800&width=600",
    description: "Serie de ilustraciones conceptuales para proyecto editorial sobre sostenibilidad.",
  },
  {
    id: 5,
    title: "Diseño Web",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Diseño de interfaz para aplicación web con enfoque en experiencia de usuario y accesibilidad.",
  },
  {
    id: 6,
    title: "Packaging",
    category: "packaging",
    image: "/placeholder.svg?height=800&width=600",
    description: "Diseño de empaque para producto premium con acabados especiales y experiencia de unboxing.",
  },
]

const categories = [
  { id: "all", name: "Todos" },
  { id: "branding", name: "Branding" },
  { id: "advertising", name: "Publicidad" },
  { id: "editorial", name: "Editorial" },
  { id: "illustration", name: "Ilustración" },
  { id: "web", name: "Web" },
  { id: "packaging", name: "Packaging" },
]

export function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">PORTAFOLIO</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Una selección de mis mejores trabajos en diferentes áreas del diseño gráfico. Cada proyecto refleja mi
            enfoque creativo y atención al detalle.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full ${
                activeCategory === category.id
                  ? "bg-black text-white hover:bg-black/90"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">Ver Proyecto</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-mono text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{categories.find((c) => c.id === project.category)?.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 font-mono text-2xl font-bold">{selectedProject.title}</h3>
                <p className="mb-4 text-sm font-medium text-gray-500">
                  {categories.find((c) => c.id === selectedProject.category)?.name}
                </p>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

