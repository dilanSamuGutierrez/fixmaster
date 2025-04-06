export function LocationSection() {
  return (
    <section id="location" className="bg-[#f9f5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-light text-gray-800 sm:text-4xl">Nuestra Ubicación</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#d4a0a0]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Visítanos en nuestra tienda para ver nuestros arreglos en persona y recibir asesoramiento personalizado.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1616603867354!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa de ubicación"
              className="h-full w-full"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-serif text-xl font-medium text-gray-800">Dirección</h3>
              <div className="flex items-start gap-4">
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
                  className="text-[#d4a0a0]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-gray-600">Calle de las Flores, 123</p>
                  <p className="text-gray-600">28001 Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-serif text-xl font-medium text-gray-800">Horario</h3>
              <div className="flex items-start gap-4">
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
                  className="text-[#d4a0a0]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div className="space-y-2">
                  <div className="flex justify-between gap-8">
                    <p className="font-medium text-gray-600">Lunes - Viernes:</p>
                    <p className="text-gray-600">9:00 - 20:00</p>
                  </div>
                  <div className="flex justify-between gap-8">
                    <p className="font-medium text-gray-600">Sábado:</p>
                    <p className="text-gray-600">10:00 - 18:00</p>
                  </div>
                  <div className="flex justify-between gap-8">
                    <p className="font-medium text-gray-600">Domingo:</p>
                    <p className="text-gray-600">Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-serif text-xl font-medium text-gray-800">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
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
                    className="text-[#d4a0a0]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a12.94 12.94 0 0 0 2.81.7 2 2 0 0 1 1.72 2Z" />
                  </svg>
                  <a href="tel:+34912345678" className="text-gray-600 hover:text-[#d4a0a0]">
                    +34 912 345 678
                  </a>
                </div>
                <div className="flex items-center gap-4">
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
                    className="text-[#d4a0a0]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:info@floristeria.com" className="text-gray-600 hover:text-[#d4a0a0]">
                    info@floristeria.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
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
                    className="text-[#d4a0a0]"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" x2="6" y1="1" y2="4" />
                    <line x1="10" x2="10" y1="1" y2="4" />
                    <line x1="14" x2="14" y1="1" y2="4" />
                  </svg>
                  <a
                    href="https://www.instagram.com/floristeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#d4a0a0]"
                  >
                    @floristeria
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

