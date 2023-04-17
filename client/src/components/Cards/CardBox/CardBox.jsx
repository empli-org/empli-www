/* eslint-disable prettier/prettier */
import React from 'react'
import { MiniCard } from 'components'

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
    <div className="m-5 mx-auto flex w-3/4 flex-col rounded-3xl bg-gray-900 p-10">
      <div className="m-5 flex flex-col items-end justify-end p-5 text-white">
        <div className="text-2xl font-bold">
          <h1>Top Profesionales</h1>
        </div>
        <div>
          <span>Mas de 200 ofertas por dia</span>
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
    </div>
  )
}

export default CardBox
