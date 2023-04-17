import React from 'react'
// @ts-ignore
import obs from '../assets/obs.svg'
// @ts-ignore
import obs2 from '../assets/obs2.svg'
// import useIntersectionObserver from '../components/hooks/useObserver'
// @ts-ignore
import one from '../assets/numbers/1.svg'
// @ts-ignore
import two from '../assets/numbers/2.svg'
// @ts-ignore
import three from '../assets/numbers/3.svg'
// @ts-ignore
import four from '../assets/numbers/4.svg'
// @ts-ignore
import five from '../assets/numbers/5.svg'
// @ts-ignore
import dot from '../assets/dot.svg'
import Footer from '../footer/Footer'

export const About = () => {
  // const AnimatedComponent = useIntersectionObserver({
  //   threshold: 0.5,
  //   rootMargin: '0px',
  //   animationDuration: 0.5,
  //   staggerChildren: 0.1,
  //   easing: 'easeInOut',
  //   direction: 'up',
  //   // @ts-ignore
  //   y: 50,
  //   fade: true,
  // })
  return (
    <div className="w-screen">
      <div className="bg-white-font">
        <div className="h-50 w-auto flex items-center justify-center bg-contact-img bg-cover p-2">
          <h1 className="font-amenable text-6xl font-bold text-blue-font">
            Nosotros
          </h1>
        </div>
        <div className="w-full flex pl-56 mt-24">
          <div className="flex w-1/2 m-7 items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl text-blue-font font-amenable text-center">
                ¿Quiénes somos?
              </h1>
              <div className="w-56 border-t-4 border-bg-green my-6 rounded-2xl"></div>
              <p className="font-quicksand-light text-lg font-medium">
                Somos una empresa de gestión humana con la finalidad de ayudar a
                que las empresas puedan tomar mejores decisiones en todo lo
                referido a su equipo de trabajo.
                <br />
                <br />
                Orientamos nuestras actividades a conocer, cumplir y superar las
                expectativas de los clientes y brindar el puesto de trabajo a
                las personas adecuadas, con la finalidad de ofrecer un servicio
                de calidad, eficiente y eficaz en el reclutamiento de sus
                trabajdores.
              </p>
            </div>
            <img src={obs} alt="obs" />
          </div>
        </div>
        <div className="w-full flex mt-44">
          <div className="flex w-1/2 ml-left items-center">
            <img src={obs2} alt="obs2" />
            <div className="m-5">
              <h1 className="text-4xl text-blue-font font-amenable text-center">
                ¿Qué buscamos?
              </h1>
              <div className="w-56 border-t-4 border-bg-green my-6 rounded-2xl"></div>
              <p className="font-quicksand-light text-lg font-medium">
                Somos una empresa que busca conectar a los mejores profesionales
                del sector de la construcción con las entidades públicas y
                privadas que requieran a profesionales validados y certificados
                para la ejecución, supervisión, consultoría y/o licitación de
                distintos proyectos alrededor del país y el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-font w-full h-auto flex">
        <div className="w-full flex pl-100">
          <div className="p-5 flex flex-col">
            <h1 className="text-5xl text-white-font font-amenable text-center">
              ¿Qué ofrecemos?
            </h1>
            <div className="w-56 border-t-4 border-bg-green my-6 rounded-2xl"></div>
            <div className="flex flex-col gap-4">
              <div>
                <img src={one} alt="one" className="w-12 h-12 inline" />
                <p className="font-quicksand-light text-2xl text-white-font p-3 inline">
                  Profesionales con experiencia verificada al 100%
                </p>
              </div>
              <div>
                <img src={two} alt="two" className="w-12 h-12 inline" />
                <p className="font-quicksand-light text-2xl text-white-font p-3 inline">
                  Expertos en la atracción de talentos
                </p>
              </div>
              <div>
                <img src={three} alt="three" className="w-12 h-12 inline" />
                <p className="font-quicksand-light text-2xl text-white-font p-3 inline">
                  Extensa cartera de profesionales
                </p>
              </div>
              <div>
                <img src={four} alt="four" className="w-12 h-12 inline" />
                <p className="font-quicksand-light text-2xl text-white-font p-3 inline">
                  Brindamos profesionales competentes
                </p>
              </div>
              <div>
                <img src={five} alt="five" className="w-12 h-12 inline" />
                <p className="font-quicksand-light text-2xl text-white-font p-3 inline">
                  Procesos culminados en tiempo record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-font w-full h-auto flex">
        <div className="p-5 w-9/12 flex flex-col items-end">
          <h1 className="text-5xl text-blue-font font-amenable">
            Nuestros valores:
          </h1>
          <div className="w-56 border-t-4 border-bg-green my-6 rounded-2xl"></div>
          <div className="flex flex-col justify-center">
            <div>
              <img src={dot} alt="one" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Pasión
              </p>
            </div>
            <div>
              <img src={dot} alt="two" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Compromiso
              </p>
            </div>
            <div>
              <img src={dot} alt="three" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Honestidad
              </p>
            </div>
            <div>
              <img src={dot} alt="four" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Confidencialidad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Lealtad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="w-12 h-12 inline" />
              <p className="font-quicksand-light text-3xl text-blue-font p-3 inline font-bold">
                Transparencia
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
