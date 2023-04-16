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
    <div className="w-25 grid-cols-auto mr-10 grid h-64 transform overflow-hidden rounded-lg bg-blue-200 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-50 flex h-40 flex-col items-center p-4 md:p-6 lg:p-8">
        <div className="mb-4 flex w-full justify-between">
          <img
            className="mr-2 h-14 w-14 rounded-lg shadow-xl"
            src={logo}
            alt="logo"
          />
          <div className="h-full w-full">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </div>
        <div className="mb-4">
          {office && (
            <h4 className="text-2xl font-bold text-gray-900">{office}</h4>
          )}
          <p className="text-ellipsis text-gray-700">{description}</p>
        </div>
        {amount ? price : btn}
      </div>
    </div>
  )
}
