import { Link } from 'react-router-dom'

export const TopHeader = () => {
  return (
    <div>
      <div className="mx-auto mt-6 max-w-screen-lg p-12">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">
            Encuentra{' '}
            <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-gulf-stream">
              <span className="relative ">La Mejor</span>
            </span>
            <br />
            Oferta de Trabajo
          </h1>
        </div>
        <div className="mt-8">
          <h2 className="mt-2 text-2xl">
            Encontrar trabajo puede ser un proceso difícil. En <br></br>
            nuestra red, contamos con una gran cantidad de <br></br>
            empresas que buscan personas talentosas como <br></br>tú para unirse
            a su equipo.{' '}
          </h2>
          <div className="mt-4 flex items-center gap-4 py-6">
            <Link
              to="/auth/register"
              className="rounded-lg bg-slate-800 px-6 py-4 text-white"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
