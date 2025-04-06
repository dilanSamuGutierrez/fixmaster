"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Propietario de vivienda",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Excelente servicio. Tuve un problema eléctrico urgente y respondieron en menos de una hora. El técnico fue muy profesional y resolvió el problema rápidamente. Definitivamente los recomendaré.",
      rating: 5,
    },
    {
      id: 2,
      name: "María González",
      role: "Administradora de fincas",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Llevamos trabajando con ellos más de 2 años para el mantenimiento de varios edificios. Su profesionalidad y calidad de trabajo son excepcionales. Siempre cumplen con los plazos y presupuestos acordados.",
      rating: 5,
    },
    {
      id: 3,
      name: "Javier Martínez",
      role: "Gerente de oficina",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Contratamos sus servicios para la renovación completa de la instalación eléctrica de nuestra oficina. El trabajo fue impecable y nos asesoraron sobre soluciones más eficientes energéticamente.",
      rating: 4,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Opiniones de Clientes</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Descubra lo que nuestros clientes opinan sobre nuestros servicios. Su satisfacción es nuestro mejor aval.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-100/50"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-100/50"></div>

            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-6 text-blue-200"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>

              <div className="mb-6 text-center text-lg text-gray-600 md:text-xl">
                {testimonials[activeIndex].content}
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-blue-100">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{testimonials[activeIndex].name}</h3>
                <p className="mb-2 text-sm text-blue-600">{testimonials[activeIndex].role}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

