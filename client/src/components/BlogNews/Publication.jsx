import React from 'react'
import { motion } from 'framer-motion'

// This component is for received for the publications from father component and render
export const Publication = ({ publicacion, onSeleccionarPublicacion }) => {
  return (
    <motion.div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg"
      whileHover={{ scale: 1.05 }}
      onClick={() => onSeleccionarPublicacion(publicacion)}
    >
      <div className="p-4">
        <img src={publicacion.url} alt={publicacion.author} />
        <h2 className="mb-2 text-xl font-bold">{publicacion.titulo}</h2>
        <p className="text-base text-gray-700">{publicacion.descripcion}</p>
      </div>
    </motion.div>
  )
}
