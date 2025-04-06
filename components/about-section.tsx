"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-lg">
              <Image src="/placeholder.svg?height=800&width=600" alt="Nuestra tienda" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-pink-200"></div>
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-purple-200"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre Nosotros</h2>
            <div className="mb-6 h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>

            <p className="mb-4 text-gray-600">
              En <span className="font-semibold text-pink-500">CHIC</span>Style, nos apasiona la moda y creemos que cada
              prenda cuenta una historia. Nuestra misión es ayudarte a expresar tu personalidad a través de looks únicos
              y actuales.
            </p>

            <p className="mb-6 text-gray-600">
              Fundada en 2018, nuestra boutique se ha convertido en el destino favorito para quienes buscan prendas de
              calidad con un toque diferente. Seleccionamos cuidadosamente cada artículo para ofrecerte lo mejor en moda
              femenina.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-pink-50 p-4 text-center">
                <h3 className="text-2xl font-bold text-pink-500">5+</h3>
                <p className="text-sm text-gray-600">Años de experiencia</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-500">500+</h3>
                <p className="text-sm text-gray-600">Productos</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4 text-center">
                <h3 className="text-2xl font-bold text-yellow-500">20+</h3>
                <p className="text-sm text-gray-600">Marcas</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-500">1000+</h3>
                <p className="text-sm text-gray-600">Clientes felices</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-lg bg-pink-50 px-4 py-2 text-center">
                <span className="font-medium text-pink-500">Envíos a todo el país</span>
              </div>
              <div className="rounded-lg bg-purple-50 px-4 py-2 text-center">
                <span className="font-medium text-purple-500">Atención personalizada</span>
              </div>
              <div className="rounded-lg bg-yellow-50 px-4 py-2 text-center">
                <span className="font-medium text-yellow-500">Nuevos productos semanales</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

