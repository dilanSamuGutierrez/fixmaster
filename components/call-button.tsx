"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

export function CallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsTooltipVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      if (window.scrollY > 300) {
        setIsTooltipVisible(true)

        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setIsTooltipVisible(false)
        }, 5000)
      }
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute bottom-full right-0 mb-2 rounded-lg bg-white p-3 text-sm font-medium text-gray-700 shadow-lg"
              >
                ¿Necesitas ayuda urgente?
                <div className="absolute -bottom-2 right-4 h-3 w-3 rotate-45 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="tel:+123456789"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            <Phone size={24} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

