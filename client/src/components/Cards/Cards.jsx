// @ts-nocheck
//importamos el icono de react-icons==>
import { BiTimeFive } from 'react-icons/bi'

import logoCompañia from 'assets/img/logoConstruccion.png'
import logoConstruccion from 'assets/img/logo2.png'
import logo3 from 'assets/img/logo3.png'
import logo4 from 'assets/img/logo4.png'
import logo5 from 'assets/img/logo5.png'
import logo6 from 'assets/img/logo6.png'
import logo7 from 'assets/img/logo7.png'
import logo8 from 'assets/img/logo8.png'

//para todos los trabajos vamos a utilizar un método de matriz de alto orden llamado Map
//en este caso listaremos todos los trabajos en una matriz llamada data

const data = [
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
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Constructora Cop.',
  },
  {
    id: 3,
    image: logo3,
    title: 'Albañil',
    time: '24Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Citmat Cop.',
  },
  {
    id: 4,
    image: logo4,
    title: 'Maestro de Obra',
    time: '7Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Soluciones C.O.',
  },
  {
    id: 5,
    image: logo5,
    title: 'Ingeniero Civil',
    time: '10Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Obras Sil.',
  },
  {
    id: 6,
    image: logo6,
    title: 'Arquitecto',
    time: '2Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Corporacion A.S.',
  },
  {
    id: 7,
    image: logo7,
    title: 'Ayudante de Obra',
    time: '4Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Contrucciones C.A',
  },
  {
    id: 8,
    image: logo8,
    title: 'Ingeniero Civil',
    time: '1Hrs',
    location: 'Peru',
    desc: 'Empresa de Construccion, Es una organización que fundamentalmente posee capacidad administrativa para desarrollar y controlar la       realización de obras.',
    company: 'Civil Cop.',
  },
]

//esta es una sola empresa, veamos como mapearla

export const Cards = () => {
  return (
    <div>
      <div className="box-border grid grid-cols-3 gap-6 pb-10 pt-10">
        {data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="flex-shrink-0 transform overflow-hidden rounded-lg border border-green-500 bg-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:border-green-800"
            >
              <img
                src={image}
                alt={title}
                className="h-60 w-full object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{title}</h3>
                <p className="text-gray-500">{company}</p>
                <p className="text-gray-500">{location}</p>
                <div className="mt-4 flex items-center">
                  <BiTimeFive className="text-gray-400" />
                  <p className="ml-2 text-gray-500">{time}</p>
                </div>
                <p className="mt-4 text-gray-500">{desc}</p>
                <button className="ml-28 mt-4 flex justify-center rounded bg-green-600 px-7 py-2 font-bold text-white hover:bg-green-600  active:bg-green-900">
                  Aplicar
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
