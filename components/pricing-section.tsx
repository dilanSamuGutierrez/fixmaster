export function PricingSection() {
  const packages = [
    {
      name: "Esencial",
      price: "1.200€",
      features: [
        "6 horas de cobertura",
        "1 fotógrafo",
        "Galería digital completa",
        "150+ fotos editadas",
        "Entrega en 4-6 semanas",
      ],
    },
    {
      name: "Completo",
      price: "1.800€",
      features: [
        "10 horas de cobertura",
        "1 fotógrafo",
        "Sesión pre-boda",
        "Galería digital completa",
        "300+ fotos editadas",
        "Álbum digital",
        "Entrega en 3-5 semanas",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "2.500€",
      features: [
        "Cobertura ilimitada",
        "2 fotógrafos",
        "Sesión pre-boda",
        "Galería digital completa",
        "500+ fotos editadas",
        "Álbum físico de lujo",
        "Mini vídeo highlights",
        "Entrega en 2-4 semanas",
      ],
    },
  ]

  return (
    <section id="pricing" className="bg-rose-50/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-light tracking-wide text-gray-800 sm:text-4xl">
          Precios
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Cada boda es única, por lo que ofrezco paquetes personalizables. Estos son mis paquetes más populares, pero no
          dudes en contactarme para crear uno a medida.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-lg ${pkg.featured ? "bg-white shadow-lg ring-2 ring-rose-200" : "bg-white/80"} p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-100 px-4 py-1 text-sm text-rose-700">
                  Más popular
                </div>
              )}
              <h3 className="mb-2 text-center font-serif text-2xl font-light text-gray-800">{pkg.name}</h3>
              <p className="mb-6 text-center text-3xl font-light text-gray-800">{pkg.price}</p>
              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
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
                      className="mt-1 text-rose-400"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href="#contact"
                  className={`inline-block rounded-full ${pkg.featured ? "bg-rose-100 text-rose-700 hover:bg-rose-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} px-6 py-2 text-sm transition-colors`}
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

