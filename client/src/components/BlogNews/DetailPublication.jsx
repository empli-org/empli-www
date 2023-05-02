import React from 'react'
import {
  FaLinkedin,
  FaArrowLeft,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// this component is just to render publications detail
export const DetailPublication = ({ publicacion }) => {
  const navigate = useNavigate()
  const compartirEnLinkedIn = () => {
    // lógica para compartir en LinkedIn
  }

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col items-start gap-y-2 p-4">
        <div>
          <button
            className="rounded-lg bg-hint-of-red p-4"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="py-4">
          <h1 className="mb-2 font-amenable text-sm font-medium">
            April 27, 2023
          </h1>
        </div>
        {/* 
        <button onClick={compartirEnLinkedIn}>
          Compartir{' '}
          <div className="flex justify-between gap-x-2">
            <FaLinkedin className="rounded-lg text-2xl hover:bg-hint-of-red hover:text-black" />
            <FaFacebook className="rounded-lg text-2xl" />
            <FaInstagram className="rounded-lg text-2xl" />
          </div>
        </button>
      */}
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: '24rem',
            backgroundImage: `url(${publicacion.image})`,
          }}
        >
          <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-[90%] bg-black/30 px-6 py-4 text-center backdrop-blur-sm">
              <h1 className="text-2xl font-semibold uppercase text-white md:text-3xl">
                {publicacion.title}
              </h1>
              <h2 className="text-white">{publicacion.description}</h2>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="font-quicksand text-lg text-gray-700">
            {publicacion.body}
          </p>
        </div>

        <div className="py-4">
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
    </div>
  )
}
