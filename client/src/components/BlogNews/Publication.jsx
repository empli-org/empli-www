import React from 'react'
import { motion } from 'framer-motion'

// This component is for received for the publications from father component and render
export const Publication = ({ publicacion, onSeleccionarPublicacion }) => {
  return (
    <motion.div
      className="group w-full cursor-pointer rounded-2xl p-4 hover:overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onClick={() => onSeleccionarPublicacion(publicacion)}
    >
      <img
        src={publicacion.url}
        alt={publicacion.author}
        className="rounded-2xl group-hover:bg-hint-of-red group-hover:shadow-lg group-hover:shadow-black"
      />
      <div className="backdrop-blur-4xl mt-2 rounded-3xl bg-opacity-60 p-4 shadow-2xl backdrop-filter">
        <h2 className="mb-2 text-xl font-bold text-gray-700 group-hover:text-black">
          {publicacion.titulo}
        </h2>
        <p className="text-base text-transparent group-hover:text-gray-700">
          {publicacion.descripcion}
        </p>
      </div>
    </motion.div>
  )
}
