"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Wrench, Zap, Droplets, CheckCircle } from "lucide-react"

export function HeroSection() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const animatedTools = useMemo(() => {
    if (!mounted) return null // 👈 No generar nada hasta estar en el cliente

    return [...Array(5)].map((_, i) => {
      const left = `${Math.random() * 100}%`
      const top = `${Math.random() * 100}%`
      const duration = Math.random() * 5 + 5
      const delay = Math.random() * 5
      const size = Math.random() * 30 + 20

      const Icon = i % 3 === 0 ? Wrench : i % 3 === 1 ? Zap : Droplets

      return (
        <motion.div
          key={i}
          className="absolute text-blue-200/30"
          style={{ left, top }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            delay,
          }}
        >
          <Icon size={size} />
        </motion.div>
      )
    })
  }, [mounted])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 lg:pt-32">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>

      {/* Animated tools */}
      <div className="absolute inset-0 overflow-hidden">
        {animatedTools}
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Soluciones</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                profesionales
              </span>
              <span className="block">para tu hogar</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Servicios de electricidad, plomería y mantenimiento general con garantía de calidad y atención inmediata.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {[
                "Respuesta rápida",
                "Técnicos certificados",
                "Garantía de servicio",
                "Precios transparentes",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={20} className="text-blue-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="#contact">Solicitar servicio</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Link href="#services">Ver servicios</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[400px] w-full max-w-lg md:h-[500px]"
          >
            <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-white p-3 shadow-lg">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/img/start.jpeg"
                  alt="Técnico profesional trabajando"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay with tools icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent">
                  <div className="absolute bottom-6 left-0 w-full px-6">
                    <div className="flex justify-between">
                      {[
                        { icon: <Zap size={24} />, label: "Electricidad" },
                        { icon: <Droplets size={24} />, label: "Plomería" },
                        { icon: <Wrench size={24} />, label: "Mantenimiento" },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                            {item.icon}
                          </div>
                          <span className="mt-2 text-sm font-medium text-white">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-blue-200"></div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-blue-100"></div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            {
              icon: (
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
                  className="text-blue-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              ),
              text: "100% Garantía",
            },
            {
              icon: (
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
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              ),
              text: "Servicio 24/7",
            },
            {
              icon: (
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
                  className="text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z"></path>
                </svg>
              ),
              text: "Seguridad garantizada",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-blue-100 p-3">{item.icon}</div>
              <p className="font-medium text-gray-900">{item.text}</p>
              {i < 3 && <div className="h-10 w-px bg-gray-200 md:h-16"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
