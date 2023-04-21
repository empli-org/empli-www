/* eslint-disable prettier/prettier */
import React from 'react'
import { MiniCard } from 'components'
import { Link } from 'react-router-dom'

//We can received data from props or bring from global state
export const CardBox = ({ data }) => {
  const gruposDeDiez = data.reduce((accumulator, obj, index) => {
    const indexGroup = Math.floor(index / 10)

    if (!accumulator[indexGroup]) {
      accumulator[indexGroup] = []
    }

    accumulator[indexGroup].push(obj)

    return accumulator
  }, [])

  return (
    <div className="m-5 flex w-full flex-col rounded-3xl bg-gray-900 p-10">
      <div className="m-5 flex flex-col items-end justify-end p-5 text-hint-of-red">
        <div className="text-2xl font-bold">
          <h1 className="text-3xl">Top Profesionales</h1>
        </div>
        <div>
          <span className="font-quicksand-light">
            Más de <b>+200</b> ofertas por día
          </span>
        </div>
      </div>
      <div className="scrollbar-hide flex w-full overflow-x-scroll p-5">
        {gruposDeDiez[0].map((obj, index) => (
          <div key={index} className="h-50 flex flex-auto">
            <MiniCard
              subtitle={obj.subtitle}
              amount={obj.amount}
              rol={obj.rol}
              time={obj.time}
              title={obj.title}
              description={obj.descripcion}
              logo={obj.logo}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Link to="/talents" className="h-15 w-28">
          <p className="mt-5 w-auto rounded-lg bg-slate-800 px-6 py-4 text-center font-quicksand-light text-base font-bold text-hint-of-red">
            Ver más
          </p>
        </Link>
      </div>
    </div>
  )
}

export default CardBox
