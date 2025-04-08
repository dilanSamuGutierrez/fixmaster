"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Zap,
  Droplets,
  Wrench,
  Fan,
  Lightbulb,
  Plug,
  ShowerHeadIcon as Shower,
  PaintBucket,
  Hammer,
  Thermometer,
} from "lucide-react"

type Service = {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  image: string
  features: string[]
  category: string
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const services: Service[] = [
    {
      id: "electrical-installation",
      name: "Instalación Eléctrica",
      description:
        "Instalación profesional de sistemas eléctricos residenciales y comerciales, cumpliendo con todas las normativas de seguridad vigentes.",
      icon: <Zap size={24} className="text-blue-600" />,
      image: "/img/instalacion.webp",
      features: [
        "Instalación de cableado completo",
        "Montaje de cuadros eléctricos",
        "Instalación de sistemas de protección",
        "Certificación de instalaciones",
        "Asesoramiento en eficiencia energética",
        "Garantía en todos los trabajos",
      ],
      category: "electrical",
    },
    {
      id: "outlet-replacement",
      name: "Cambio de Enchufes",
      description:
        "Sustitución de enchufes antiguos o dañados por nuevos modelos más seguros y eficientes, adaptados a las necesidades actuales.",
      icon: <Plug size={24} className="text-blue-600" />,
      image: "/img/enchufes.webp",
      features: [
        "Sustitución de enchufes convencionales",
        "Instalación de enchufes con USB",
        "Reparación de conexiones defectuosas",
        "Actualización a normativa vigente",
        "Enchufes para exteriores",
        "Soluciones para cocinas y baños",
      ],
      category: "electrical",
    },
    {
      id: "lighting-installation",
      name: "Instalación de Iluminación",
      description:
        "Diseño e instalación de sistemas de iluminación eficientes y decorativos para interiores y exteriores.",
      icon: <Lightbulb size={24} className="text-blue-600" />,
      image: "/img/iluminacion.jpeg",
      features: [
        "Instalación de luminarias",
        "Sistemas LED de bajo consumo",
        "Iluminación decorativa",
        "Luces de seguridad y exteriores",
        "Sistemas de control inteligente",
        "Soluciones personalizadas",
      ],
      category: "electrical",
    },
    {
      id: "fan-installation",
      name: "Instalación de Ventiladores",
      description:
        "Montaje profesional de ventiladores de techo y pared, asegurando una correcta fijación y conexión eléctrica.",
      icon: <Fan size={24} className="text-blue-600" />,
      image: "/img/ventilador.jpg",
      features: [
        "Instalación de ventiladores de techo",
        "Montaje de ventiladores de pared",
        "Sustitución de ventiladores antiguos",
        "Instalación de controles de velocidad",
        "Ventiladores con iluminación integrada",
        "Soluciones para espacios reducidos",
      ],
      category: "electrical",
    },
    {
      id: "plumbing-repairs",
      name: "Reparaciones de Plomería",
      description:
        "Solución rápida y eficaz para todo tipo de problemas de plomería, desde fugas hasta atascos y roturas.",
      icon: <Droplets size={24} className="text-blue-600" />,
      image: "/img/baños.jpg",
      features: [
        "Reparación de fugas y goteras",
        "Desatascos de tuberías",
        "Sustitución de grifería",
        "Reparación de cisternas",
        "Solución de problemas de presión",
        "Detección de fugas ocultas",
      ],
      category: "plumbing",
    },
    {
      id: "bathroom-installation",
      name: "Instalación de Baños",
      description:
        "Renovación e instalación completa de baños, incluyendo sanitarios, grifería, duchas y sistemas de fontanería.",
      icon: <Shower size={24} className="text-blue-600" />,
      image: "/img/plomeria.jpg",
      features: [
        "Instalación de sanitarios",
        "Montaje de duchas y bañeras",
        "Colocación de grifería",
        "Instalación de muebles de baño",
        "Renovación completa de baños",
        "Soluciones para espacios reducidos",
      ],
      category: "plumbing",
    },
    {
      id: "painting",
      name: "Pintura y Acabados",
      description:
        "Servicios profesionales de pintura para interiores y exteriores, con acabados de alta calidad y durabilidad.",
      icon: <PaintBucket size={24} className="text-blue-600" />,
      image: "/img/pintura.jpg",
      features: [
        "Pintura de interiores",
        "Tratamiento de exteriores",
        "Reparación de superficies",
        "Acabados decorativos",
        "Eliminación de humedades",
        "Asesoramiento en colores y materiales",
      ],
      category: "maintenance",
    },
    {
      id: "general-repairs",
      name: "Reparaciones Generales",
      description:
        "Soluciones para todo tipo de reparaciones domésticas, desde montaje de muebles hasta arreglos estructurales menores.",
      icon: <Hammer size={24} className="text-blue-600" />,
      image: "/img/reparaciones.jpg",
      features: [
        "Montaje de muebles",
        "Reparación de puertas y ventanas",
        "Instalación de cerraduras",
        "Colocación de cortinas y persianas",
        "Reparaciones de carpintería",
        "Soluciones a medida",
      ],
      category: "maintenance",
    },
    {
      id: "hvac",
      name: "Climatización",
      description:
        "Instalación y mantenimiento de sistemas de aire acondicionado, calefacción y ventilación para máximo confort.",
      icon: <Thermometer size={24} className="text-blue-600" />,
      image: "/img/climatizacion.jpg",
      features: [
        "Instalación de aire acondicionado",
        "Mantenimiento de sistemas HVAC",
        "Reparación de calefacción",
        "Mejora de eficiencia energética",
        "Limpieza de conductos",
        "Sistemas de control inteligente",
      ],
      category: "maintenance",
    },
  ]

  const categories = [
    { id: "all", name: "Todos los servicios", icon: <Wrench size={16} /> },
    { id: "electrical", name: "Electricidad", icon: <Zap size={16} /> },
    { id: "plumbing", name: "Plomería", icon: <Droplets size={16} /> },
    { id: "maintenance", name: "Mantenimiento", icon: <Hammer size={16} /> },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Ofrecemos una amplia gama de servicios profesionales para el mantenimiento y mejora de su hogar o negocio.
            Todos nuestros trabajos cuentan con garantía y son realizados por técnicos certificados.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{service.name}</h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>

                    <h4 className="mb-3 font-medium text-gray-900">Incluye:</h4>
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 text-blue-500"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">
                      <Link href="#contact">Solicitar presupuesto</Link>
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

