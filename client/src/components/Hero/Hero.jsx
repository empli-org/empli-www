// @ts-nocheck
import ing from '../../assets/ing.png'
export const Hero = () => {
  return (
    <>
      <div className="m-4 flex justify-center">
        <div className=" flex justify-between rounded-3xl border-2 bg-slate-500 p-11">
          <div>
            <div className="container">
              <h1 className="text-5xl font-bold">
                Encuentra{' '}
                <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-green-500">
                  <span className="relative ">La Mejor</span>
                </span>
                <br />
                Oferta de Trabajo
              </h1>
            </div>

            <div className="container2">
              <p className="segundo">
                Encontrar trabajo puede ser un proceso difícil. En <br></br>
                nuestra red, contamos con una gran cantidad de <br></br>empresas
                que buscan personas talentosas como <br></br>tú para unirse a su
                equipo.{' '}
              </p>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text*/}
            <img src={ing} width="400px" />
          </div>
        </div>
      </div>
    </>
  )
}
