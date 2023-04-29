/* eslint-disable prettier/prettier */
import { PlusIcons } from 'components'
import { CardGlass } from '../CardGlass/CardGlass'
import {
  useGetJobsQuery,
  useGetAllTalentsQuery,
} from '@/redux/features/api/base'

export const CardLarge = () => {
  // info sirve unicamente para probar que la card renderiza,
  // porque lo que se quiere es que la info venga por props, asi todo seria dinamico
  const { data: offers } = useGetJobsQuery({})
  const { data: talents } = useGetAllTalentsQuery({})

  // total talents in the aplication. it is array
  const countTalents = talents?.data?.length
  // console.log(countTalents)

  // total companies in the aplication. This is an object
  const uniqueCompany = offers?.data?.reduce((acu, curr) => {
    const name = curr.company.name
    if (!acu[name]) {
      acu[name] = true
    }
    return acu
  }, {})
  const countCompany = Object.keys(uniqueCompany).length
  // console.log(countCompany)

  // total offers in the aplication. it is array
  const countOffers = offers?.data?.length
  // console.log(countOffers)

  return (
    <div className="relative mx-auto flex w-full flex-col rounded-3xl bg-white shadow-2xl md:flex-row md:items-center md:justify-center md:p-2 lg:p-10">
      <div className="flex w-1/3 flex-col items-center text-center transition  duration-300 hover:scale-125 md:text-left">
        <h1 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
          Profesionales
        </h1>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          {/* usamos .length pensando que exista un objeto cuyo nombre sea info, con una propiedad proffesionals que sea un array,
           y la cantidad de objetos dentro de ese array seria el numero de professionales registrados en la plataforma.
           Pero esto puede ser modificado segun venga la informacion */}
          <PlusIcons className="text-sm" />
          {countTalents}K
        </h1>
      </div>
      <div className="mt-6 flex w-1/3 flex-col items-center border-l-2 border-r-2 border-black border-opacity-60 text-center md:mt-0 md:text-left">
        <div className="transition duration-300 hover:scale-125">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            Ofertas
          </h2>
          <h1 className="flex items-center justify-center text-3xl font-bold">
            <PlusIcons className="text-sm" />
            {countOffers}K
          </h1>
        </div>
      </div>
      <div className="mt-6 flex w-1/3 flex-col items-center text-center transition duration-300 hover:scale-125 md:mt-0 md:text-left">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
          Empresas
        </h2>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          <PlusIcons className="text-sm" />
          {countCompany}K
        </h1>
      </div>
      <CardGlass />
    </div>
  )
}
