// import { info } from '../../pages/info'
import { Projects } from '@/components/Projects/Projects'
import { Biography } from '../../Biografy/Biography'
import { Tags } from '../../Tags/Tags'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
export const DescriptionCard = () => {
  //The local initial state is Biografia
  const [title, setTitle] = useState('Biografia')

  return (
    <div className="m-2 flex w-full justify-between gap-x-2 rounded-lg border border-white bg-white p-2">
      <div className="mt-10 h-16 p-4 text-4xl font-bold">
        {/* title will change according to the click button */}
        <h1>{title}</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="m-2 flex w-full items-center justify-around gap-x-10">
          <button onClick={() => setTitle('Biografia')}>
            <h2 className="hover:easeout rounded-full border border-white p-3 text-xl font-bold duration-500 hover:bg-gulf-stream hover:bg-opacity-60 hover:underline hover:underline-offset-2 hover:shadow-sm hover:shadow-gray-500 focus:outline-none">
              Biografia
            </h2>
          </button>
          {/* for example, when the click done title will be Habilidades */}
          <button onClick={() => setTitle('Habilidades')}>
            <h2 className="hover:easeout rounded-full border border-white p-3 text-xl font-bold duration-500 hover:bg-gulf-stream hover:bg-opacity-60 hover:underline hover:underline-offset-2 hover:shadow-sm hover:shadow-gray-500 focus:outline-none">
              Habilidades
            </h2>
          </button>
          <button onClick={() => setTitle('Proyectos')}>
            <h2 className="hover:easeout rounded-full border border-white p-3 text-xl font-bold duration-500 hover:bg-gulf-stream hover:bg-opacity-60 hover:underline hover:underline-offset-2 hover:shadow-sm hover:shadow-gray-500 focus:outline-none">
              Proyectos
            </h2>
          </button>
          <button onClick={() => setTitle('Experiencia')}>
            <h2 className="hover:easeout rounded-full border border-white p-3 text-xl font-bold duration-500 hover:bg-gulf-stream hover:bg-opacity-60 hover:underline hover:underline-offset-2 hover:shadow-sm hover:shadow-gray-500 focus:outline-none">
              Experiencia
            </h2>
          </button>
          <button className="transform rounded-full border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 shadow-lg transition duration-500 ease-in-out hover:bg-gray-50">
            <AiOutlinePlusCircle />
          </button>
        </div>
        {/* the logi is here, just we will create rest component and include here*/}
        {title === 'Habilidades' ? (
          <div className="m-3">
            <Tags />
          </div>
        ) : title === 'Biografia' ? (
          <div className="m-3">
            <Biography />
          </div>
        ) : title === 'Proyectos' ? (
          <div className="m-1 flex w-full bg-white backdrop-filter">
            <Projects />
          </div>
        ) : (
          <div>
            <strong className="text-3xl">Building</strong>
          </div>
        )}
      </div>
    </div>
  )
}
