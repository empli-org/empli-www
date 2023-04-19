import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiArrowUpSLine } from 'react-icons/ri'

// Este hook sirve unicamente para que cuando el usuario hace el scroll de la pagina aparezca un boton al final
//  que al hacer click lo devuelva al inicio de la misma.
// se usa motion para el efecto visual
export const useGoUp = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showScrollButton && (
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-10 right-10 z-50 rounded-md bg-gray-900 p-2 text-white shadow-lg"
        >
          <RiArrowUpSLine />
        </motion.button>
      )}
    </>
  )
}
