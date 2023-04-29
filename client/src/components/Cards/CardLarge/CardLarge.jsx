/* eslint-disable prettier/prettier */
import { PlusIcons } from 'components'

export const CardLarge = () => {
  // info sirve unicamente para probar que la card renderiza,
  // porque lo que se quiere es que la info venga por props, asi todo seria dinamico
  const info = {
    proffesionals: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    offers: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    companies: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
  }
  const Marked = ({ data, title, isBorder=false }) => {

    return (
      <div className={`flex w-1/3 flex-col items-center text-center transition ${isBorder ? 'border-l-2 border-r-2 border-gray':'' } duration-300 hover:scale-125 md:text-left`}>
        <h1 className="mb-3 text-xs font-quicksand font-bold text-center uppercase tracking-wider text-gray-400">
          {title}
        </h1>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          {/* usamos .length pensando que exista un objeto cuyo nombre sea info, con una propiedad proffesionals que sea un array,
           y la cantidad de objetos dentro de ese array seria el numero de professionales registrados en la plataforma.
           Pero esto puede ser modificado segun venga la informacion */}
          <PlusIcons className="text-sm" />
          {data.length * 20}
        </h1>
      </div>
    )
  }
  return (
    <div className="relative mx-auto flex w-full flex-col rounded-3xl bg-white shadow-2xl md:flex-row md:items-center md:justify-center md:p-2 lg:p-10">
      <Marked data={info.proffesionals} title="Profesionales"/>

      <Marked data={info.offers} title="Ofertas" isBorder={true} />

      <Marked data={info.companies} title="Empresas"/>
    </div>
  )
}
