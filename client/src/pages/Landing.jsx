/* eslint-disable prettier/prettier */
import Container from "@/components/ui/Container"
export default function LandingPage() {
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg py-12">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">
            Encuentra{' '}
            <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-green-500">
              <span className="relative ">La Mejor</span>
            </span>
            <br />
            Oferta de Trabajo
          </h1>
        </div>

        <div className="mt-14">
          <h2 className="mt-5 text-xl">
            Encontrar trabajo puede ser un proceso difícil. En <br></br>nuestra
            red, contamos con una gran cantidad de <br></br>empresas que buscan
            personas talentosas como <br></br>tú para unirse a su equipo.{' '}
          </h2>
        </div>
      </div>
    </Container>
  )
}
