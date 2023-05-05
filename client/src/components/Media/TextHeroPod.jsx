import { Button } from 'components'

export const TextHeroPod = () => {
  return (
    <>
      <div className="mx-auto mt-6 max-w-screen-lg p-4 sm:p-12">
        <div className="flex flex-col">
          <h1 className="font-amenable text-3xl sm:text-5xl">
            Empli{' '}
            <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-gulf-stream">
              <span className="relative ">Potencia</span>
            </span>
            <br />
            Tu Perfil Laboral
          </h1>
        </div>
        <div className="mt-4 w-100 sm:mt-8">
          <h2 className="mt-2 font-quicksand text-base sm:text-lg">
            Encuentra entrevistas, conferencias. Contamos con la mejor fuente de
            información y asesoría para potenciar tu perfil y conseguir el
            trabajo de tus sueños. Sólo estas a un click de unirte a nosotros y
            disfrutar de todo nuestros servicios.
          </h2>
          <div className="mt-4 flex items-center gap-4 py-4 sm:mt-8">
            <Button link="/auth/register" title="Únete ahora" color="black" />
          </div>
        </div>
      </div>
    </>
  )
}
