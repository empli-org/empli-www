/* eslint-disable prettier/prettier */
import React from 'react'
import { MiniCard } from '../MiniCard/MiniCard'

//We can received data from props or bring from global state
function CardBox({ data }) {
    const gruposDeDiez = data.reduce((accumulator, obj, index) => {
    const indexGroup = Math.floor(index / 10)

    if (!accumulator[indexGroup]) {
      accumulator[indexGroup] = []
    }

    accumulator[indexGroup].push(obj)

    return accumulator
  }, [])

  return (
    <div className='bg-gray-900 flex flex-col w-3/4 mx-auto m-5 p-10 rounded-3xl'>
      <div className='p-5 text-white flex flex-col items-end justify-end m-5'>
        <div className='font-bold text-2xl'>
           <h1>Top Profesionales</h1>
        </div>
        <div>
            <span>Mas de 200 ofertas por dia</span>
        </div>
      </div>
      <div className="flex overflow-x-scroll p-5">
        {gruposDeDiez[0].map((obj, index) => (
          <div key={index} className="flex-shrink-0">
            <MiniCard
              subtitle={null}
              amount={null}
              office={null}
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