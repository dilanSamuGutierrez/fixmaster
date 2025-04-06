"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Cuál es el tiempo de respuesta para una emergencia?",
      answer:
        "Para emergencias, nuestro tiempo de respuesta es de 1 a 2 horas en la mayoría de las zonas. Contamos con un equipo disponible 24/7 para atender situaciones urgentes como fugas de agua, problemas eléctricos graves o cualquier situación que pueda poner en riesgo su seguridad.",
    },
    {
      question: "¿Ofrecen garantía en sus servicios?",
      answer:
        "Sí, todos nuestros trabajos cuentan con garantía. Dependiendo del tipo de servicio, la garantía puede variar de 3 meses a 1 año. Esta cubre tanto los materiales utilizados como la mano de obra. Si surge algún problema relacionado con nuestro trabajo durante el período de garantía, lo solucionaremos sin costo adicional.",
    },
    {
      question: "¿Cómo se establece el precio de un servicio?",
      answer:
        "Nuestros precios se basan en varios factores: tipo de servicio, complejidad del trabajo, materiales necesarios y tiempo estimado. Siempre proporcionamos un presupuesto detallado antes de comenzar cualquier trabajo, y este presupuesto es respetado salvo que surjan complicaciones imprevistas, en cuyo caso le consultaremos antes de proceder.",
    },
    {
      question: "¿Trabajan los fines de semana?",
      answer:
        "Sí, ofrecemos servicios los sábados en horario regular y los domingos para emergencias. Nuestro objetivo es adaptarnos a las necesidades de nuestros clientes, por lo que también podemos coordinar trabajos fuera del horario habitual con cita previa.",
    },
    {
      question: "¿Qué áreas geográficas cubren?",
      answer:
        "Actualmente damos servicio en toda la Comunidad de Madrid y alrededores. Para zonas más alejadas, puede haber un cargo adicional por desplazamiento que será especificado en el presupuesto.",
    },
    {
      question: "¿Necesito proporcionar materiales o herramientas?",
      answer:
        "No, nosotros nos encargamos de llevar todas las herramientas y la mayoría de los materiales necesarios. Para trabajos específicos que requieran materiales especiales o de preferencia del cliente (como grifería o electrodomésticos), podemos asesorarle en la compra o adquirirlos por usted con su aprobación previa.",
    },
  ]

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Resolvemos tus dudas sobre nuestros servicios. Si no encuentras la respuesta que buscas, no dudes en
            contactarnos directamente.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

