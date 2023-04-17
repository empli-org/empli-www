import React from 'react'
//Imported Icons from React Icons ==>
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import './search.css'

export const Search = () => {
  return (
    <div className="searchDiv bg-greyIsh rounded- [10px] grid gap-10 p-[3rem]">
      <form action="">
        <div className="firstDiv gap[10px] rounded-[8px]bg-white shadow-greyIsh-700 flex items-center justify-between p-5 shadow-lg">
          <div className="flex items-center gap-2">
            <AiOutlineSearch className="icon text-[25px]" />
            <input
              type="text"
              className="- none w-[100%] bg-transparent text-blue-500 focus:outline"
              placeholder="Buscar por Trabajo "
            />
            <AiOutlineCloseCircle className="text -[#a5a6a6] hover:text-textColor icon text-[30px]" />
          </div>

          <div className="flex items-center gap-2">
            <BsHouseDoor className="icon text-[25px]" />
            <input
              type="text"
              className="- none w-[100%] bg-transparent text-blue-500 focus:outline"
              placeholder="buscar por empresa"
            />
            <AiOutlineCloseCircle className="text -[#a5a6a6] hover:text-textColor icon text-[30px]" />
          </div>

          <div className="flex items-center gap-2">
            <CiLocationOn className="icon text-[25px]" />
            <input
              type="text"
              className="- none w-[100%] bg-transparent text-blue-500 focus:outline"
              placeholder="buscar por ubicación"
            />
            <AiOutlineCloseCircle className="text -[#a5a6a6] hover:text-textColor icon text-[30px]" />
          </div>

          <button className="h-full cursor-pointer rounded-[10px] bg-emerald-500 p-5 px-10 text-white hover:bg-emerald-700">
            Buscar
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center justify-center gap-10">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="font-semibold text-[#808080]">
            Ordenar por:
          </label>

          <select
            name=""
            id="relevance"
            className="rounded-[3px] bg-white px-4 py-1"
          >
            <option value="">Relevancia</option>
            <option value="">Recientes</option>
            <option value="">Años de Experiencia</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="font-semibold text-[#808080]">
            Ordenar por:
          </label>

          <select
            name=""
            id="relevance"
            className="rounded-[3px] bg-white px-4 py-1"
          >
            <option value="">full-time</option>

            <option value="">Part-Time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="font-semibold text-[#808080]">
            Ordenar por:
          </label>

          <select
            name=""
            id="relevance"
            className="rounded-[3px] bg-white px-4 py-1"
          >
            <option value="">Ubicacion</option>
            <option value="">Ciudades</option>
          </select>
        </div>

        <span className="cursor-pointer text-[#a1a1a1]">Clear All</span>
      </div>
    </div>
  )
}

export default Search
