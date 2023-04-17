import { Link } from 'react-router-dom'
import {
  IconCheckEmpty,
  IconCheckFull,
  IconEmail,
  IconFace,
  IconInfo,
  IconInst,
  IconLink,
  IconLocation,
  IconTwi,
} from './IconsProfile'
import { Tags } from '../Tags/Tags'

export const CardProfile = ({ info }) => {
  return (
    <div className="w-3/4 rounded-2xl bg-gray-100 bg-blend-darken shadow-lg">
      <div className="m-2 flex justify-between p-2">
        <div className="m-2 flex w-4/12 flex-col items-center justify-center">
          <div className="relative">
            <img
              src={info.image}
              alt={info.name}
              className="w-fit overflow-hidden rounded-full object-cover"
            />
          </div>
          <div className="absolute m-1 mt-16 flex justify-center rounded-bl-full rounded-tl-full rounded-tr-full bg-blue-200 p-1 text-center">
            <IconCheckFull />
            <span>open to work</span>
          </div>
          <div className="flex justify-center">
            <IconLocation />
            <span>{info.contactInfo.address}</span>
          </div>
        </div>
        <div className="flex w-9/12 flex-col justify-center p-2">
          <div className="flex flex-col">
            <div className="flex w-full justify-start">
              <h1 className="text-2xl font-bold">
                {info.name} {info.lastname}
              </h1>
              {info.verified ? <IconCheckFull /> : <IconCheckEmpty />}
            </div>
            <div className="flex items-center gap-3.5">
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
              <button className="m-1 flex items-center justify-stretch gap-px rounded-lg bg-gray-900 p-1 text-white shadow-sm shadow-gray-900 hover:shadow-white">
                <IconEmail />
                Mensaje
              </button>
              <button className="m-1 flex items-center justify-stretch gap-px rounded-lg bg-gray-900 p-1 text-white shadow-sm shadow-gray-900 hover:shadow-white">
                <IconInfo />
                Mas info
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center gap-3.5 p-2">
            <div className="flex w-6/12 flex-col items-center">
              <span>Rol / Cargo</span>
              <h1 className="text-xl font-bold">{info.rol}</h1>
            </div>
            <div className="flex w-6/12 flex-col items-center">
              <span>Experiencia</span>
              <h1 className="text-xl font-bold">{info.yearsOfExp} Anos</h1>
            </div>
            <div className="flex w-6/12 flex-col items-center">
              <span>Usermail</span>
              <h1 className="text-xl font-bold">{info.userEmail}</h1>
            </div>
          </div>
          <h2 className="font-semibold">Superpoderes</h2>
          <div className="flex">
            <Tags skills={info.skills} />
          </div>
        </div>
      </div>
    </div>
  )
}
