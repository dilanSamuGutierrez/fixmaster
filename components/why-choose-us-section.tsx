"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Clock, ShieldCheck, Banknote, UserCheck, ThumbsUp } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: <Award className="text-blue-600" />,
      title: "Técnicos Certificados",
      description:
        "Nuestro equipo está formado por profesionales con certificaciones y años de experiencia en el sector.",
    },
    {
      icon: <Clock className="text-blue-600" />,
      title: "Respuesta Rápida",
      description: "Entendemos la urgencia de ciertos problemas, por eso ofrecemos un servicio de respuesta rápida.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" />,
      title: "Garantía en Todos los Trabajos",
      description:
        "Todos nuestros servicios incluyen garantía, asegurando la calidad y durabilidad de nuestras reparaciones.",
    },
    {
      icon: <Banknote className="text-blue-600" />,
      title: "Precios Transparentes",
      description: "Ofrecemos presupuestos claros y detallados sin costos ocultos ni sorpresas de última hora.",
    },
    {
      icon: <UserCheck className="text-blue-600" />,
      title: "Atención Personalizada",
      description: "Cada cliente es único, por eso adaptamos nuestros servicios a sus necesidades específicas.",
    },
    {
      icon: <ThumbsUp className="text-blue-600" />,
      title: "Satisfacción Garantizada",
      description: "Nuestro objetivo es su completa satisfacción, trabajamos hasta que el resultado sea perfecto.",
    },
  ]

  return (
    <section id="why-choose-us" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Por qué elegirnos?</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Nos distinguimos por nuestra profesionalidad, experiencia y compromiso con la calidad. Descubra por qué
            somos la mejor opción para el mantenimiento de su hogar.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-50 p-3">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-blue-50 p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Nuestro Proceso</h3>
              <p className="mb-6 text-gray-600">
                Seguimos un proceso meticuloso para garantizar resultados excepcionales en cada servicio.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Evaluación inicial</h4>
                    <p className="text-sm text-gray-600">Analizamos el problema y sus necesidades específicas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Presupuesto detallado</h4>
                    <p className="text-sm text-gray-600">Ofrecemos un presupuesto claro sin costos ocultos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Ejecución profesional</h4>
                    <p className="text-sm text-gray-600">
                      Nuestros técnicos realizan el trabajo con precisión y eficiencia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Verificación y garantía</h4>
                    <p className="text-sm text-gray-600">
                      Comprobamos que todo funcione perfectamente antes de finalizar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Técnico profesional trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

