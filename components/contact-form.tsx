"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  name: string
  email: string
  phone: string
  date: string
  venue: string
  message: string
}

export function ContactForm() {
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
        <h2 className="mb-12 text-center font-serif text-3xl font-light tracking-wide text-gray-800 sm:text-4xl">
          Contacto
        </h2>
        <div className="mx-auto max-w-3xl rounded-lg bg-rose-50/50 p-6 sm:p-8 md:p-10">
          {isSubmitted ? (
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-green-500"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3 className="mb-2 text-xl font-medium text-green-800">¡Mensaje enviado!</h3>
              <p className="text-green-700">Gracias por contactarme. Te responderé lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full rounded-md border ${errors.name ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                    {...register("name", { required: "Este campo es obligatorio" })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full rounded-md border ${errors.email ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                    {...register("email", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full rounded-md border ${errors.phone ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                    {...register("phone")}
                  />
                </div>
                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-700">
                    Fecha de la boda
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={`w-full rounded-md border ${errors.date ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                    {...register("date")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="venue" className="mb-2 block text-sm font-medium text-gray-700">
                  Lugar de la boda
                </label>
                <input
                  id="venue"
                  type="text"
                  className={`w-full rounded-md border ${errors.venue ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                  {...register("venue")}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full rounded-md border ${errors.message ? "border-red-300" : "border-gray-300"} bg-white px-4 py-2 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200`}
                  {...register("message", { required: "Este campo es obligatorio" })}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-rose-100 px-8 py-3 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 disabled:opacity-70"
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
                    "Enviar mensaje"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

