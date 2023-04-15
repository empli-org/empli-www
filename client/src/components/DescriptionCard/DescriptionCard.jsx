
import { Link } from 'react-router-dom'

export const DescriptionCard = ({ info }) => {
  return (
    <div className="flex justify-between m-2 p-2 w-3/5">
      <div className="font-bold text-2xl w-2/6 mt-10">
        <h1>Biografia</h1>
      </div>
      <div className="w-3/4 flex flex-col items-center">
        <div className="flex justify-between w-full m-2">
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
        <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-full transition duration-500 ease-in-out hover:bg-gray-50 transform hover:-translate-y-1 hover:scale-100 shadow-lg">
          Mostrar mas
        </button>
      </div>
    </div>
  )
}
