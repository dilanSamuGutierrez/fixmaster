import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block text-2xl font-bold">
              <span className="text-blue-400">Fix</span>
              <span className="text-white">Master</span>
            </Link>
            <p className="mb-4">
              Servicios profesionales de electricidad, plomería y mantenimiento general para hogares y negocios.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="transition-colors hover:text-blue-400">
                  Electricidad
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-blue-400">
                  Plomería
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-blue-400">
                  Mantenimiento general
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-blue-400">
                  Climatización
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="transition-colors hover:text-blue-400">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="transition-colors hover:text-blue-400">
                  Trabajos realizados
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="transition-colors hover:text-blue-400">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition-colors hover:text-blue-400">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+123456789" className="transition-colors hover:text-blue-400">
                  +123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@fixmaster.com" className="transition-colors hover:text-blue-400">
                  info@fixmaster.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Calle Principal, 123
                  <br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} FixMaster. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

