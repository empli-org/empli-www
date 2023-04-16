import React from 'react'
//importamos el icono de react-icons==>
import { BiTimeFive } from 'react-icons/bi'
//importamos la imagen===>

// @ts-ignore
import logoCompañia from '../Cards/img/logoConstruccion.png'
// @ts-ignore
import logoConstruccion from '../Cards/img/logo2.png'
// @ts-ignore
import logo3 from '../Cards/img/logo3.png'
// @ts-ignore
import logo4 from '../Cards/img/logo4.png'
// @ts-ignore
import logo5 from '../Cards/img/logo5.png'
// @ts-ignore
import logo6 from '../Cards/img/logo6.png'
// @ts-ignore
import logo7 from '../Cards/img/logo7.png'
// @ts-ignore
import logo8 from '../Cards/img/logo8.png'
//para todos los trabajos vamos a utilizar un método de matriz de alto orden llamado Map
//en este caso listaremos todos los trabajos en una matriz llamada data

const Data = [
  {
    id: 1,
    image: logoCompañia,
    title: 'Arquitecto',
    time: 'Now',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Jet Constructora',
  },
  {
    id: 2,
    image: logoConstruccion,
    title: 'Ingeniero',
    time: '12Hrs',
    location: 'Colombia',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Constructora Cop.',
  },
  {
    id: 3,
    image: logo3,
    title: 'Albañil',
    time: '24Hrs',
    location: 'Argentina',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Citmat Cop.',
  },
  {
    id: 4,
    image: logo4,
    title: 'Maestro de Obra',
    time: '7Hrs',
    location: 'Lima-Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Soluciones C.O.',
  },
  {
    id: 5,
    image: logo5,
    title: 'Ingeniero Civil',
    time: '10Hrs',
    location: 'Venezuela',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Obras Sil.',
  },
  {
    id: 6,
    image: logo6,
    title: 'Arquitecto',
    time: '2Hrs',
    location: 'Mexico',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Corporacion A.S.',
  },
  {
    id: 7,
    image: logo7,
    title: 'Ayudante de Obra',
    time: '4Hrs',
    location: 'Argentina',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Contrucciones C.A',
  },
  {
    id: 8,
    image: logo8,
    title: 'Ingeniero Civil',
    time: '1Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmenteposee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Civil Cop.',
  },
]

//esta es una sola empresa, veamos como mapearla

const Cards = () => {
  return (
    <div>
      <div className="jobContainer flex flex-wrap items-center justify-center gap-10 py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            //esto devolverá una sola publicación de trabajo basada en la identificación
            <div
              key={id}
              className="group/item singleJob [10px] shadow-greyIsh-400/700 group w-[250px] rounded rounded bg-white p-[20px] shadow-lg hover:bg-emerald-500 hover:shadow-lg"
            >
              <span className="flex items-center justify-between gap-4">
                <h1 className="text-textColor group-hover text-bg-neutral-950 text-[16px] font-semibold">
                  {title}
                </h1>
                <span className="flex items-center gap-1 text-[#ccc]">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p className="mt-[20px] border-t-[2px] pt-[20px] text-[13px] text-[#95959] group-hover:text-white">
                {desc}
              </p>

              <div className='"company flex items-center gap-2'>
                <img src={image} alt="Company logo" className="w-[10%]" />
                <span className="block py-[1rem] text-[14px] group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px]rounded-[10px] text-textColor groud-hover:bg-white group-hover/item:text-textColor block w-full p-[10px] text-[14px] font-semibold hover:bg-white ">
                Aplicar
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
