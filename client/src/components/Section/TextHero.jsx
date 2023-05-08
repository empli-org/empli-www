import { Button } from 'components'

export const TextHero = ({
  landing = false,
  textBtn,
  title,
  description,
  url,
  customClassFather,
  customClassChild,
  contrast,
  titleClassName, // Propiedad para extender los estilos de title
  descriptionClassName, // Propiedad para extender los estilos de description
}) => {
  const TextLanding = (
    <div className="mx-auto mt-6 max-w-screen-lg p-4 sm:p-12">
      <div className="flex flex-col">
        <h1 className="font-amenable text-3xl sm:text-5xl">
          Encuentra{' '}
          <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-gulf-stream">
            <span className="relative ">La Mejor</span>
          </span>
          <br />
          Oferta de Trabajo
        </h1>
      </div>
      <div className="mt-4 w-100 sm:mt-8">
        <h2 className="mt-2 font-quicksand  text-base sm:text-lg">
          Encontrar trabajo puede ser un proceso difícil. En nuestra red,
          contamos con una gran cantidad de empresas que buscan personas
          talentosas como tú para unirse a su equipo.
        </h2>
        <div className="mt-4 flex items-center gap-4 py-4 sm:mt-8">
          <Button link="/auth/register" title="Únete ahora" />
        </div>
      </div>
    </div>
  )
  const Text = (
    <div
      className={`mx-auto mt-6 max-w-screen-lg p-4 ${customClassFather} sm:p-12`}
    >
      <div className={`flex flex-col ${customClassChild}`}>
        <h1
          className={`text-${contrast} font-amenable sm:text-5xl ${
            titleClassName || 'text-3xl'
          }`}
        >
          {title}
        </h1>
      </div>
      <div className="mt-4 w-full sm:mt-8">
        <h2
          className={`text-${contrast} mt-2 font-quicksand text-base sm:text-lg ${descriptionClassName}`}
        >
          {description}
        </h2>
        <div className="mt-4 flex items-center gap-4 py-4 sm:mt-8">
          <Button
            link={url ? url : '/auth/register'}
            title={textBtn}
            white={true}
            inverted={false}
          />
        </div>
      </div>
    </div>
  )
  return <>{landing ? TextLanding : Text}</>
}
