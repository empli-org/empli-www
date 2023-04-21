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
          <h1 className="font-amenable text-3xl">Top Profesionales</h1>
        </div>
        <div>
          <span className="font-quicksand-light">
            Más de <b>+200</b> ofertas por día
          </span>
        </div>
      </div>
      <div className="flex w-full overflow-x-scroll p-5">
        {gruposDeDiez[0].map((obj, index) => (
          <div key={index} className="flex-shrink-0">
            <MiniCard
              subtitle={obj.subtitle}
              amount={null}
              rol={obj.rol}
              time={null}
              title={obj.title}
              description={obj.descripcion}
              logo={obj.logo}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <Link to="/talents" className="w-28 h-15">
          <p className="text-hint-of-red font-quicksand-light font-bold text-base text-center mt-5 w-auto rounded-lg bg-slate-800 px-6 py-4">
            Ver más
          </p>
        </Link>
      </div>
    </div>
  )
}

export default CardBox
