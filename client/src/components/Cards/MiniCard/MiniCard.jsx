/* eslint-disable prettier/prettier */
import { ArrowBtnR } from 'components'
import { BiMap } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const MiniCard = ({
  title,
  logo,
  subtitle,
  amount,
  time,
  description,
  rol,
}) => {
  // esta variable sera renderizada unicamente si se recibe por props amount y time.
  // de igual modo se hace con la variable btn. de esta forma hacemos que el componente sea dinamico y reutilizable
  const price = (
    <div className="mx-1 mt-2 flex w-full justify-center gap-x-24">
      <div>
        <span className="font-quicksand font-bold">${amount}K/</span>
        <span>mes</span>
      </div>
      <span>{time}</span>
    </div>
  )

  const btn = (
    <Link to="/talent">
      <div className="mr-2 flex items-center justify-end rounded-full bg-blue-400 hover:bg-blue-600">
        <button className=" px-4 py-2 font-bold text-white">Empecemos</button>
        <div className="mr-2 rounded-full bg-black transition duration-300 hover:scale-125">
          <span className="text-2xl text-white">
            <ArrowBtnR />
          </span>
        </div>
      </div>
    </Link>
  )

  return (
    <div title="Haz click para ver mas informacion">
      <div className="grid-cols-2-auto m-4 grid h-72 w-64 transform grid-flow-col overflow-hidden rounded-2xl bg-white p-1 shadow-xl transition-transform duration-300 hover:-translate-y-4 hover:shadow-lg">
        <div className="m-1 flex h-auto w-fit flex-col items-center justify-between gap-y-2 rounded-2xl  md:p-2 lg:p-1 ">
          <div className="flex w-full">
            <div className="flex h-24 w-24">
              <img
                className="mr-2 h-24 w-24 rounded-lg object-cover"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="mx-5 w-full">
              <h3 className="break-words font-amenable text-xl text-blue-whale">
                {title}
              </h3>
              {subtitle && (
                <div className="flex items-center">
                  <BiMap />
                  <h2 className="font-quicksand text-sm">{subtitle}</h2>
                </div>
              )}
            </div>
          </div>

          <div className="my-2">
            {rol && (
              <h4 className="mb-1 font-amenable text-2xl font-light text-blue-whale">
                {rol}
              </h4>
            )}
            <p className="text-ellipsis text-justify font-quicksand text-blue-whale">
              {description}
            </p>
          </div>
          <div>{amount ? price : btn}</div>
        </div>
      </div>
    </div>
  )
}
