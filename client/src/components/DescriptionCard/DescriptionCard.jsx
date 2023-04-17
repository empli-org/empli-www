// import { info } from '../../pages/info'
import { Biografy } from '../Biografy/Biografy'
import { Tags } from '../Tags/Tags'
import { useState } from 'react'
export const DescriptionCard = () => {
  //The local initial state is Biografia
  const [title, setTitle] = useState('Biografia')

  return (
    <div className="m-2 flex w-3/5 justify-between p-2">
      <div className="mt-10 w-2/6 text-2xl font-bold">
        {/* title will change according to the click button */}
        <h1>{title}</h1>
      </div>
      <div className="flex w-3/4 flex-col items-center">
        <div className="m-2 flex w-full justify-between">
          <button onClick={() => setTitle('Biografia')}>
            <h2 className="font-semibold hover:underline">Biografia</h2>
          </button>
          {/* for example, when the click done title will be Habilidades */}
          <button onClick={() => setTitle('Habilidades')}>
            <h2 className="font-semibold hover:underline">Habilidades</h2>
          </button>
          <button onClick={() => setTitle('Proyectos')}>
            <h2 className="font-semibold hover:underline">Proyectos</h2>
          </button>
          <button onClick={() => setTitle('Experiencia')}>
            <h2 className="font-semibold hover:underline">Experiencia</h2>
          </button>
        </div>
        {/* the logi is here, just we will create rest component and include here*/}
        {title === 'Habilidades' ? (
          <div className="m-3">
            <Tags />
          </div>
        ) : title === 'Biografia' ? (
          <div className="m-3">
            <Biografy />
          </div>
        ) : (
          <div>
            <h1 className="m-3 p-3 font-bold">Estamos construyendo</h1>
          </div>
        )}
        <button className="transform rounded-full border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-gray-50">
          Mostrar mas
        </button>
      </div>
    </div>
  )
}
