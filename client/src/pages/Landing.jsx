import { BlogNews } from '@/components/BlogNews/BlogNews'
import Container from '@/components/ui/Container'
import Footer from './footer/Footer'
// @ts-ignore
import obrero from '../assets/obrero.png'
import './Landing.css'
// @ts-ignore
// import personas1 from '../assets/foto1.png'
// @ts-ignore
// import personas2 from '../assets/foto2.png'
// @ts-ignore

export default function LandingPage() {
  return (
    <Container>
      <div>
        <div className="mx-auto max-w-screen-lg py-12">
          <div className="flex flex-col">
            <h1 className="mx-20 text-5xl font-bold">
              Encuentra {}
              <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-green-400">
                <span className="relative ">La Mejor</span>
              </span>
              <br />
              Oferta de Trabajo
            </h1>
          </div>
          <div className="mt-14">
            <h2 className="mx-20 mt-5 text-xl">
              Encontrar trabajo puede ser un proceso difícil. En <br></br>
              nuestra red, contamos con una gran cantidad de <br></br>empresas
              que buscan personas talentosas como <br></br>tú para unirse a su
              equipo.{' '}
            </h2>
            <div className=" p2 m-6 w-3/4 rounded-s-2xl shadow-lg shadow-gray-900">
              <BlogNews />
            </div>
            <img className="obrero" src={obrero} alt="obrero"></img>
          </div>
          <div> </div>
          <Footer />
        </div>
      </div>
    </Container>
  )
}
