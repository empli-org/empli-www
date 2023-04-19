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
    <div className="flex w-full justify-between">
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
    <div className="grid-cols-2-auto m-2 grid h-auto w-64 transform grid-flow-col overflow-hidden rounded-lg bg-blue-200 p-2 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-auto w-fit flex-col items-center p-2 md:p-2 lg:p-2">
        <div className="mb-2 flex h-auto w-fit justify-center">
          <div className="flex w-2/6">
            <img
              className="mr-2 w-fit overflow-hidden rounded-lg shadow-xl"
              src={logo}
              alt="logo"
            />
          </div>
          <div className=" w-3/4">
            <h3 className="break-words text-2xl font-bold text-gray-900">
              {title}
            </h3>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </div>
        <div className="mb-4">
          {rol && <h4 className="text-2xl font-bold text-gray-900">{rol}</h4>}
          <p className="text-ellipsis text-gray-700">{description}</p>
        </div>
        {amount ? price : btn}
      </div>
    </div>
  )
}
