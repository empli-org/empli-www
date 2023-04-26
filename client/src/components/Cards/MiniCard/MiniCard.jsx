/* eslint-disable prettier/prettier */
import React from 'react'
import { ArrowBtnR } from './ArrowBtnR'
import { Link } from 'react-router-dom'

export const MiniCard = ({
  title,
  logo,
  subtitle,
  amount,
  time,
  description,
  rol,
}) => {
  // esta variable sera renderizada unicamente si se recibe por props amount y time.
  // de igual modo se hace con la variable btn. de esta forma hacemos que el componente sea dinamico y reutilizable
  const price = (
    <div className="mx-1 mt-2 flex w-full justify-center gap-x-24">
      <div>
        <span className="font-bold">${amount}K/</span>
        <span>mes</span>
      </div>
      <span>{time}</span>
    </div>
  )

  const btn = (
    <Link to="/talent">
      <div className="mr-2 flex items-center justify-end rounded-full bg-blue-400 hover:bg-blue-600">
        <button className=" px-4 py-2 font-bold text-white">Empecemos</button>
        <div className="mr-2 rounded-full bg-black transition duration-300 hover:scale-125">
          <span className="text-2xl text-white">
            <ArrowBtnR />
          </span>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="grid-cols-2-auto m-1 grid h-72 w-64 transform grid-flow-col overflow-hidden rounded-lg p-1 shadow-xl transition-transform duration-300 hover:-translate-y-4 hover:shadow-lg">
      <div className="backdrop-blur-4xl m-1 flex h-auto w-fit flex-col items-center gap-y-2 rounded-2xl bg-white bg-opacity-90 p-3 backdrop-filter md:p-2 lg:p-1 ">
        <div className="mt-2 flex h-24  w-full">
          <div className="flex h-24 w-28">
            <img
              className="mr-2 w-full overflow-hidden rounded-lg"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="w-full">
            <h3 className="break-words text-xl font-bold text-gray-900">
              {title}
            </h3>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </div>
        <div className="my-4">
          {rol && <h4 className="text-2xl font-bold text-gray-900">{rol}</h4>}
          <p className="w-fit text-ellipsis text-gray-700">{description}</p>
          {amount ? price : btn}
        </div>
      </div>
    </div>
  )
}
