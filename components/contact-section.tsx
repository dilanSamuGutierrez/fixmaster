"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  address: string
  message: string
  preferredDate?: string
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contacta con Nosotros</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Solicita un presupuesto sin compromiso o ponte en contacto con nosotros para cualquier consulta. Te
            responderemos a la mayor brevedad posible.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="mb-8 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-6 text-xl font-semibold text-gray-900">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <a href="tel:+123456789" className="text-gray-600 hover:text-blue-600">
                        +123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@fixmaster.com" className="text-gray-600 hover:text-blue-600">
                        info@fixmaster.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dirección</p>
                      <p className="text-gray-600">
                        Calle Principal, 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 font-medium text-gray-900">Horario de Atención</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>9:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Urgencias</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-blue-600 p-4 text-white">
                  <h4 className="mb-2 font-medium">Servicio de Urgencias 24/7</h4>
                  <p className="text-sm text-white/90">
                    Disponemos de un servicio de atención para emergencias las 24 horas, todos los días del año.
                  </p>
                  <a
                    href="tel:+123456789"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    <Phone size={16} />
                    <span>Llamar ahora</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-lg bg-blue-50 p-8 text-center">
                  <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
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
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos a la mayor brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                        Nombre completo
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          className={errors.name ? "border-red-300 pr-10" : ""}
                          {...register("name", { required: "Este campo es obligatorio" })}
                        />
                        {errors.name && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          className={errors.email ? "border-red-300 pr-10" : ""}
                          {...register("email", {
                            required: "Este campo es obligatorio",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Email inválido",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          className={errors.phone ? "border-red-300 pr-10" : ""}
                          {...register("phone", { required: "Este campo es obligatorio" })}
                        />
                        {errors.phone && (
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                        Servicio
                      </label>
                      <select
                        id="service"
                        className={`w-full rounded-md border ${errors.service ? "border-red-300" : "border-gray-300"} bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                        {...register("service", { required: "Este campo es obligatorio" })}
                      >
                        <option value="">Seleccionar servicio</option>
                        <option value="electrical">Electricidad</option>
                        <option value="plumbing">Plomería</option>
                        <option value="maintenance">Mantenimiento general</option>
                        <option value="other">Otro</option>
                      </select>
                      {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                      Dirección
                    </label>
                    <Input
                      id="address"
                      className={errors.address ? "border-red-300" : ""}
                      {...register("address", { required: "Este campo es obligatorio" })}
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-gray-700">
                      Fecha preferida (opcional)
                    </label>
                    <Input
                      id="preferredDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("preferredDate")}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Describe el servicio que necesitas o cualquier detalle adicional"
                      className={errors.message ? "border-red-300" : ""}
                      {...register("message", { required: "Este campo es obligatorio" })}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Solicitar presupuesto"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

