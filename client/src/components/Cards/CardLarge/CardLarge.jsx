/* eslint-disable prettier/prettier */
import { PlusIcons } from 'components'

export const CardLarge = ({ proffesionals, offers, companies }) => {
  return (
    <div className="mx-auto flex w-3/4 flex-col rounded-3xl bg-yellow-50 p-10 shadow-2xl md:flex-row md:items-center md:justify-center">
      <div className="flex w-1/3 flex-col items-center text-center  transition duration-300 hover:scale-125 md:text-left">
        <h1 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
          Profesionales
        </h1>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          <PlusIcons className="text-sm" />
          {proffesionals}K
        </h1>
      </div>
      <div className="mt-6 flex w-1/3 flex-col items-center border-l border-r border-black text-center md:mt-0 md:text-left">
        <div className="transition duration-300 hover:scale-125">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            Ofertas
          </h2>
          <h1 className="flex items-center justify-center text-3xl font-bold">
            <PlusIcons className="text-sm" />
            {offers}K
          </h1>
        </div>
      </div>
      <div className="mt-6 flex w-1/3 flex-col items-center text-center transition duration-300 hover:scale-125 md:mt-0 md:text-left">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
          Empresas
        </h2>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          <PlusIcons className="text-sm" />
          {companies}K
        </h1>
      </div>
    </div>
  )
}
