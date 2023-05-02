/* eslint-disable prettier/prettier */
import { PlusIcons } from 'components'
import {
  useGetJobsQuery,
  useGetAllTalentsQuery,
} from '@/redux/features/api/base'

export const CardLarge = () => {
  // info sirve unicamente para probar que la card renderiza,
  // porque lo que se quiere es que la info venga por props, asi todo seria dinamico
  const { data: offersData = [] } = useGetJobsQuery()
  const { data: talentsData = [] } = useGetAllTalentsQuery()

  // total talentsData in the aplication. it is array
  const countTalents = talentsData && talentsData.length

  const uniqueCompany = offersData &&
    offersData.reduce((acu, curr) => {
      const name = curr.company.name
      if (!acu[name]) {
        acu[name] = true
      }
      return acu
    }, {})

  const countCompany = Object.keys(uniqueCompany).length

  // total offersData in the aplication. it is array
  const countOffers = offersData && offersData.length
  console.log(countOffers)
  const Marked = ({ data, title, isBorder = false }) => {
    return (
      <div
        className={`flex w-1/3 flex-col items-center text-center transition ${isBorder ? 'border-gray border-l-2 border-r-2' : ''
          } duration-300 hover:scale-125 md:text-left`}
      >
        <h1 className="mb-3 text-center font-quicksand text-xs font-bold uppercase tracking-wider text-gray-400">
          {title}
        </h1>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          {/* usamos .length pensando que exista un objeto cuyo nombre sea info, con una propiedad proffesionals que sea un array,
           y la cantidad de objetos dentro de ese array seria el numero de professionales registrados en la plataforma.
           Pero esto puede ser modificado segun venga la informacion */}
          <PlusIcons className="text-sm" />
          {data}
        </h1>
      </div>
    )
  }
  return (
    <div className="relative mx-auto flex w-full flex-col rounded-3xl bg-white shadow-2xl md:flex-row md:items-center md:justify-center md:p-2 lg:p-10">
      <Marked data={countTalents} title="Profesionales" />

      <Marked data={countOffers} title="Ofertas" isBorder={true} />

      <Marked data={countCompany} title="Empresas" />
    </div>
  )
}
