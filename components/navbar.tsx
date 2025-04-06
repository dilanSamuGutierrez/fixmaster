"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#services" },
    { name: "Por qué elegirnos", href: "#why-choose-us" },
    { name: "Trabajos", href: "#gallery" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 py-3 shadow-sm backdrop-blur-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center text-2xl font-bold">
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
            className="mr-2 text-blue-600"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span className="text-blue-600">Fix</span>
          <span className="text-gray-800">Master</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <a href="tel:+123456789" className="flex items-center gap-2">
              <Phone size={16} />
              <span>Llamar ahora</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-gray-800 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white py-4 shadow-md md:hidden">
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="tel:+123456789" className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>Llamar ahora</span>
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

