
import { Link } from 'react-router-dom'
import {
  IconCheckEmpty,
  IconEmail,
  IconFace,
  IconInst,
  IconLink,
  IconLocation,
  IconStar,
  IconTwi,
} from './IconsProfile'

export const CardProfile = ({ name, address, image, rol, yearsOfExp }) => {
  return (
    <div className="w-3/5 bg-gray-100 rounded-2xl shadow-lg bg-blend-darken">
      <div className="m-2 p-2 flex justify-between">
        <div className="flex flex-col items-between justify-center w-fit">
          <div className="flex justify-center relative rounded-full overflow-hidden w-48 h-48 m-5 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="perfil"
            />
            <div className="flex justify-center items-center absolute bottom-0 left-0 w-full">
              <div className="flex justify-center items-center w-fit m-2 p-1 bg-green-200 text-black rounded-tr-full rounded-tl-full rounded-bl-full shadow-lg">
                <IconCheckEmpty />
                <span>open to work</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full m-1 p-1">
              <IconLocation />
              <span>{address}</span>
            </div>
          </div>
        </div>
        <div className="w-6/12 flex flex-col justify-center p-2">
          <div className="flex flex-col">
            <div className="flex justify-start w-full">
              <h1 className="font-bold text-2xl">{name}</h1>
              <IconCheckEmpty />
            </div>
            <div className="flex justify-between items-center">
              <Link to="">
                <IconFace />
              </Link>
              <Link to="">
                <IconTwi />
              </Link>
              <Link to="">
                <IconInst />
              </Link>
              <Link to="">
                <IconLink />
              </Link>
              <button className="bg-gray-900 text-white rounded-lg m-1 p-1 flex justify-stretch items-center shadow-lg">
                <IconEmail />
                Mensaje
              </button>
              <button className="bg-gray-900 text-white rounded-lg m-1 p-1 flex justify-stretch items-center shadow-lg">
                <IconEmail />
                Mensaje
              </button>
            </div>
          </div>
          <div className="flex justify-between p-2 w-full">
            <div className="w-6/12 flex flex-col">
              <span>Rol / Cargo</span>
              <h1 className="font-bold text-xl">{rol}</h1>
            </div>
            <div className="w-6/12">
              <span>Experiencia</span>
              <h1 className="font-bold text-xl">{yearsOfExp} Anos</h1>
            </div>
          </div>
          <h2 className="text-shadow-lg">Superpoderes</h2>
          <div className="flex justify-around w-full gap-x-px">
            <div className="bg-blue-200 rounded-tr-full rounded-tl-full rounded-bl-full p-1 m-3 flex justify-stretch items-center shadow-lg">
              <IconStar />
              AutoCad
            </div>
            <div className="bg-yellow-200 rounded-tr-full rounded-tl-full rounded-bl-full p-2 m-3 flex justify-stretch items-center shadow-lg">
              <IconStar />
              AutoCad
            </div>
            <div className="bg-gray-300 rounded-tr-full rounded-tl-full rounded-bl-full p-2  m-3 flex justify-stretch items-center shadow-lg">
              <IconStar />
              AutoCad
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
