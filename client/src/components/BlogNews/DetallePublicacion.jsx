import React from 'react'
import { FaLinkedin, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// este componente unicamente se encarga de renderizar el detalle de la noticia
const DetallePublicacion = ({ publicacion, setOnOff }) => {
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
          {/* aqui recibimos la funcion setOnOff del componente padre y cuando le hacen click el estado onOff que se encuentra en BlogNews se vuelve false, lo que permite que la noticia seleccionada se renderice junto con el resto de las noticias */}
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

export default DetallePublicacion
