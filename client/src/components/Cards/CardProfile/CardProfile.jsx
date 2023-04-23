import { Link } from 'react-router-dom'
import {
  IconCheckEmpty,
  IconCheckFull,
  IconEmail,
  IconLocation,
  Tags,
  DescriptionCard,
} from 'components'
import { info } from '@/components/info'
import { IoIosArrowDown } from 'react-icons/io'
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const CardProfile = () => {
  const [drop, setDrop] = useState(false)

  const handleClick = () => {
    if (!drop) {
      setDrop(true)
    } else {
      setDrop(false)
    }
  }

  return (
    <div className="rounded-2xl bg-opacity-20 bg-login-img pt-4">
      <div className="w-full rounded-2xl bg-gray-100 bg-blend-darken shadow-lg">
        <div className="m-2 flex justify-between p-2">
          <div className="relative z-0 m-2 flex w-3/12 flex-col items-center justify-center">
            <div className="flex h-72 w-56 items-center">
              <img
                src={info.image}
                alt={info.name}
                className="w-full overflow-hidden rounded-full object-cover ring ring-white ring-offset-8 ring-offset-white"
              />
            </div>
            <div className="left-18 absolute top-56 z-20 flex justify-center rounded-bl-full rounded-tl-full rounded-tr-full bg-opacity-50 bg-gradient-to-r from-black px-3 py-2 text-center shadow-inner backdrop-blur-2xl backdrop-filter">
              <IconCheckFull className="text-white" />
              <span className="text-lg text-white">open to work</span>
            </div>
            <div className="mb-16 flex justify-center">
              <IconLocation className="text-black" />
              <span className="text-xl text-gray-500">
                {info.contactInfo.address}
              </span>
            </div>
            <button
              onClick={handleClick}
              className="flex w-full justify-start text-3xl font-bold focus:outline-none"
            >
              <IoIosArrowDown className="animate-pulse rounded-lg shadow-sm hover:shadow-black" />
            </button>
          </div>
          <div className="flex w-9/12 flex-col justify-center p-2">
            <div className="flex flex-col">
              <div className="flex w-full justify-start">
                <h1 className="text-3xl font-bold">
                  {info.name} {info.lastname}
                </h1>
                {info.verified ? <IconCheckFull /> : <IconCheckEmpty />}
              </div>
              <div className="flex items-center gap-3.5">
                <Link to="">
                  <FaFacebookF className="transition-easeout rounded-md text-2xl hover:bg-blue-whale hover:text-white hover:shadow-sm hover:shadow-blue-whale" />
                </Link>
                <Link to="">
                  <FaTwitter className="transition-easeout rounded-md text-2xl hover:bg-blue-whale hover:text-white hover:shadow-sm hover:shadow-blue-whale" />
                </Link>
                <Link to="">
                  <FaInstagram className="transition-easeout rounded-md text-2xl hover:bg-blue-whale hover:text-white hover:shadow-sm hover:shadow-blue-whale" />
                </Link>
                <Link to="">
                  <FaLinkedin className="transition-easeout rounded-md text-2xl hover:bg-blue-whale hover:text-white hover:shadow-sm hover:shadow-blue-whale" />
                </Link>
                <button className="m-1 flex items-center justify-stretch gap-px rounded-lg bg-gray-900 p-1 text-white shadow-sm shadow-gray-900 hover:shadow-white">
                  <IconEmail />
                  Mensaje
                </button>
                <button className="m-1 flex items-center justify-stretch gap-px rounded-lg bg-gray-900 p-1 text-gray-900 shadow-sm shadow-gray-900 hover:shadow-white">
                  vacio
                </button>
              </div>
            </div>
            <div className="flex w-full justify-center gap-3.5 p-2">
              <div className="flex w-6/12 flex-col items-center">
                <span>Rol / Cargo</span>
                <h1 className="text-xl font-bold">{info.rol}</h1>
              </div>
              <div className="flex w-6/12 flex-col items-center">
                <span>Experiencia</span>
                <h1 className="text-xl font-bold">{info.yearsOfExp} Anos</h1>
              </div>
              <div className="flex w-6/12 flex-col items-center">
                <span>Usermail</span>
                <h1 className="text-xl font-bold">{info.userEmail}</h1>
              </div>
            </div>
            <h2 className="text-xl font-bold">Superpoderes</h2>
            <div className="flex">
              <Tags />
            </div>
          </div>
        </div>
        {drop && <DescriptionCard />}
      </div>
    </div>
  )
}
