/* eslint-disable prettier/prettier */
import React from 'react'
import { ArrowBtnR } from './ArrowBtnR'
import { Link } from 'react-router-dom'

export const MiniCard = ({
  logo,
  title,
  description,
  subtitle,
  office,
  amount,
  time,
}) => {
  const price = (

    <div className="w-full flex justify-between">
      <div>
        <span className="font-bold">${amount}K/</span>
        <span>mes</span>
      </div>
      <span>{time}</span>
    </div>
  )

  const btn = (
    <Link to="/talent">
      <div className="flex items-center justify-end bg-blue-400 hover:bg-blue-600 rounded-full mr-2">
        <button className=" text-white font-bold py-2 px-4">Empecemos</button>
        <div className="rounded-full mr-2 bg-black hover:scale-125 transition duration-300">
          <span className="text-white text-2xl">
            <ArrowBtnR />
          </span>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="bg-blue-200 rounded-lg overflow-hidden shadow-xl h-64 w-25 mr-10 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 grid grid-cols-auto">
      <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center w-50 h-40">
        <div className="flex justify-between mb-4 w-full">
          <img
            className="h-14 w-14 mr-2 rounded-lg shadow-xl"
            src={logo}
            alt="logo"
          />
          <div className="w-full h-full">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </div>
        <div className="mb-4">
          {office && (
            <h4 className="text-2xl font-bold text-gray-900">{office}</h4>
          )}
          <p className="text-gray-700 text-ellipsis">{description}</p>
        </div>
        {amount ? price : btn}
      </div>
    </div>
  )
}
