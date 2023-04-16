import { Link } from 'react-router-dom'

export const DescriptionCard = ({ info }) => {
  return (
    <div className="m-2 flex w-3/5 justify-between p-2">
      <div className="mt-10 w-2/6 text-2xl font-bold">
        <h1>Biografia</h1>
      </div>
      <div className="flex w-3/4 flex-col items-center">
        <div className="m-2 flex w-full justify-between">
          <Link to="">
            <h2 className="font-semibold hover:underline">Biografia</h2>
          </Link>
          <Link to="">
            <h2 className="font-semibold hover:underline">Habilidades</h2>
          </Link>
          <Link to="">
            <h2 className="font-semibold hover:underline">Proyectos</h2>
          </Link>
          <Link to="">
            <h2 className="font-semibold hover:underline">Experiencia</h2>
          </Link>
        </div>
        <div className="m-3">
          <p>{info.description}</p>
        </div>
        <button className="transform rounded-full border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-gray-50">
          Mostrar mas
        </button>
      </div>
    </div>
  )
}
