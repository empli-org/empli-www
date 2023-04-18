import React from 'react'
import { FaLinkedin, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// this component is just to render publications detail
export const DetailPublication = ({ publicacion, setOnOff }) => {
  const compartirEnLinkedIn = () => {
    // lógica para compartir en LinkedIn
  }

  return (
    <motion.div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-4">
        <div>
          {/* here received function setOnOff from the component father and when user click on the button state onOff change false */}
          <button onClick={() => setOnOff(false)}>
            <FaArrowLeft />
          </button>
        </div>
        <h1 className="mb-2 text-xl font-bold">{publicacion.fuente}</h1>
        <h1 className="mb-2 text-xl font-bold">{publicacion.fecha}</h1>
        <h1 className="mb-2 text-xl font-bold">{publicacion.autor}</h1>
        <img src={publicacion.url} alt={publicacion.titulo} />
        <p className="text-base text-gray-700">{publicacion.contenido}</p>
        <Link to={publicacion.more}>
          <span>more</span>
        </Link>
        <button onClick={compartirEnLinkedIn}>
          Compartir en LinkedIn <FaLinkedin />
        </button>
      </div>
    </motion.div>
  )
}
