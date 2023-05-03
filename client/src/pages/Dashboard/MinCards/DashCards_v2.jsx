import React from 'react'

const DashCards = ({ title, number, label, color, subtitle }) => {
  return (
    <div className="flex h-60 w-60 flex-col items-center justify-center rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-medium text-slate-700">{title}</h2>
      <span
        className={`${
          color ? color : 'text-blue-whale'
        } mt-2 text-5xl font-bold`}
      >
        {number}
      </span>
      <p className={`mt-2 text-sm ${color ? color : 'text-blue-whale'}`}>
        {label}
      </p>
      {subtitle ? (
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      ) : (
        '-'
      )}
    </div>
  )
}

export default DashCards
