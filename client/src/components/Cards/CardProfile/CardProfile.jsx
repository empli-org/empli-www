import { Link } from 'react-router-dom'
import {
  IconCheckEmpty,
  IconEmail,
  IconStar,
  IconLocation,
  IconTwi,
  IconInst,
  IconLink,
  IconFace,
} from 'components'

export const CardProfile = ({ name, address, image, rol, yearsOfExp }) => {
  return (
    <div className="w-3/5 rounded-2xl bg-gray-100 bg-blend-darken shadow-lg">
      <div className="m-2 flex justify-between p-2">
        <div className="items-between flex w-fit flex-col justify-center">
          <div className="relative m-5 flex h-48 w-48 justify-center overflow-hidden rounded-full shadow-2xl">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt="perfil"
            />
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center">
              <div className="m-2 flex w-fit items-center justify-center rounded-bl-full rounded-tl-full rounded-tr-full bg-green-200 p-1 text-black shadow-lg">
                <IconCheckEmpty />
                <span>open to work</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="m-1 flex w-full items-center justify-center p-1">
              <IconLocation />
              <span>{address}</span>
            </div>
          </div>
        </div>
        <div className="flex w-6/12 flex-col justify-center p-2">
          <div className="flex flex-col">
            <div className="flex w-full justify-start">
              <h1 className="text-2xl font-bold">{name}</h1>
              <IconCheckEmpty />
            </div>
            <div className="flex items-center justify-between">
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
              <button className="m-1 flex items-center justify-stretch rounded-lg bg-gray-900 p-1 text-white shadow-lg">
                <IconEmail />
                Mensaje
              </button>
              <button className="m-1 flex items-center justify-stretch rounded-lg bg-gray-900 p-1 text-white shadow-lg">
                <IconEmail />
                Mensaje
              </button>
            </div>
          </div>
          <div className="flex w-full justify-between p-2">
            <div className="flex w-6/12 flex-col">
              <span>Rol / Cargo</span>
              <h1 className="text-xl font-bold">{rol}</h1>
            </div>
            <div className="w-6/12">
              <span>Experiencia</span>
              <h1 className="text-xl font-bold">{yearsOfExp} Anos</h1>
            </div>
          </div>
          <h2 className="text-shadow-lg">Superpoderes</h2>
          <div className="flex w-full justify-around gap-x-px">
            <div className="m-3 flex items-center justify-stretch rounded-bl-full rounded-tl-full rounded-tr-full bg-blue-200 p-1 shadow-lg">
              <IconStar />
              AutoCad
            </div>
            <div className="m-3 flex items-center justify-stretch rounded-bl-full rounded-tl-full rounded-tr-full bg-yellow-200 p-2 shadow-lg">
              <IconStar />
              AutoCad
            </div>
            <div className="m-3 flex items-center justify-stretch rounded-bl-full  rounded-tl-full rounded-tr-full bg-gray-300 p-2 shadow-lg">
              <IconStar />
              AutoCad
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
