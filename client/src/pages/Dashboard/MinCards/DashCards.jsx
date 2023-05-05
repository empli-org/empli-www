import React from 'react'

const DashCards = ({ title, number, color }) => {
  return (
    <div className="ml-7 mt-4 flex h-60 w-60 flex-col items-center justify-center rounded-lg border bg-white p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <span className={`bg-${color} mt-2 text-5xl font-bold text-blue-500`}>
        {number}
      </span>
      <p className="mt-2 text-blue-500">Disponibles</p>
      <p className="text-black-500 mt-2">No Disponibles: 5</p>
    </div>
  )
}

export default DashCards
