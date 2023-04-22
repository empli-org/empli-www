import React from 'react'

export const CardPro = ({ logo, name, rol }) => {
  return (
    <div className="relative z-0 mx-2 mb-16 h-72 w-64 rounded-2xl shadow-xl transition-transform duration-300 hover:translate-y-3">
      <img
        className="h-full w-full rounded-2xl object-cover shadow-sm"
        src={logo}
        alt="logo"
      />
      <div className="absolute inset-x-2 -bottom-10 flex flex-col items-center justify-start rounded-2xl bg-white bg-opacity-90 py-2 text-gray-900 backdrop-blur-2xl backdrop-filter transition-opacity duration-300">
        <h1 className="flex w-full justify-center text-xl font-bold">{name}</h1>
        <div className="flex w-full items-center gap-x-1 space-x-2 pl-8">
          <button className="rounded-full bg-blue-whale px-2 text-transparent">
            ##
          </button>
          <span>{rol}</span>
        </div>
      </div>
    </div>
  )
}
