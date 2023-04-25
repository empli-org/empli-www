import React from 'react'
import {
  FaLinkedin,
  FaArrowLeft,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

// this component is just to render publications detail
export const DetailPublication = ({ publicacion, setOnOff }) => {
  const compartirEnLinkedIn = () => {
    // lógica para compartir en LinkedIn
  }

  return (
    <div className="w-2/4 cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col items-start gap-y-2 p-4">
        <div>
          {/* here received function setOnOff from the component father and when user click on the button state onOff change false */}
          <button onClick={() => setOnOff(false)}>
            <FaArrowLeft />
          </button>
        </div>
        <h1 className="mb-2 text-xl font-bold">{publicacion.fuente}</h1>
        <h1 className="mb-2 text-xl font-bold">{publicacion.fecha}</h1>
        <h1 className="mb-2 text-xl font-bold">{publicacion.autor}</h1>
        <img
          src={publicacion.url}
          alt={publicacion.titulo}
          className="w-4/12 rounded-2xl"
        />
        <p className="text-base text-gray-700">{publicacion.contenido}</p>
        <Link to={publicacion.more} target="_blank">
          <span>more</span>
        </Link>
        <button onClick={compartirEnLinkedIn}>
          Compartir{' '}
          <div className="flex justify-between gap-x-2">
            <FaLinkedin className="rounded-lg text-2xl hover:bg-hint-of-red hover:text-black" />
            <FaFacebook className="rounded-lg text-2xl" />
            <FaInstagram className="rounded-lg text-2xl" />
          </div>
        </button>
      </div>
    </div>
  )
}
