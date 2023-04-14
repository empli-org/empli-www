/* eslint-disable prettier/prettier */
import { PlusIcons } from "./PlusIcons"

export const CardLarge = ({ proffesionals, offers, companies }) => {
    return (
        <div className="w-3/4 mx-auto flex flex-col md:flex-row md:items-center md:justify-center bg-yellow-50 rounded-3xl shadow-2xl p-10">
            <div className="text-center md:text-left flex flex-col items-center  w-1/3 hover:scale-125 transition duration-300">
                <h1 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">Profesionales</h1>
                <h1 className="text-3xl font-bold flex justify-center items-center"><PlusIcons className='text-sm' />{proffesionals}K</h1>
            </div>
            <div className="mt-6 md:mt-0 text-center md:text-left flex flex-col items-center w-1/3 border-l border-black border-r">
                <div className="hover:scale-125 transition duration-300">
                    <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">Ofertas</h2>
                    <h1 className="text-3xl font-bold flex justify-center items-center"><PlusIcons  className='text-sm'/>{offers}K</h1>
                </div>
            </div>
            <div className="mt-6 md:mt-0 text-center md:text-left flex flex-col items-center w-1/3 hover:scale-125 transition duration-300">
                <h2 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">Empresas</h2>
                <h1 className="text-3xl font-bold flex justify-center items-center"><PlusIcons  className='text-sm'/>{companies}K</h1>
            </div>
        </div>
    )
}