import React from 'react'
// @ts-ignore
import obs from '../assets/obs.svg'
// @ts-ignore
import obs2 from '../assets/obs2.svg'
import useIntersectionObserver from '../components/hooks/useObserver'

const Acerca = () => {
  const AnimatedComponent = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '0px',
    animationDuration: 0.5,
    staggerChildren: 0.1,
    easing: 'easeInOut',
    direction: 'up',
    // @ts-ignore
    y: 50,
    fade: true,
  })
  return (
    <AnimatedComponent>
      <div className="w-screen">
        <div className="bg-white-font">
          <div className="h-50 w-full flex items-center justify-center bg-contact-img bg-cover p-2">
            <h1 className="font-amenable text-6xl font-bold text-blue-font">
              Nosotros
            </h1>
          </div>
          <div className="w-full flex ml-56 mt-24">
            <div className="flex w-1/2 m-7 items-center">
              <div className="flex flex-col">
                <h1 className="text-4xl text-blue-font font-amenable text-center">
                  ¿Quiénes somos?
                </h1>
                <div className="w-56 border-t-4 border-bg-green my-6 rounded-2xl"></div>
                <p className="font-quicksand-light text-lg font-medium">
                  Somos una empresa de gestión humana con la finalidad de ayudar
                  a que las empresas puedan tomar mejores decisiones en todo lo
                  referido a su equipo de trabajo.
                  <br />
                  <br />
                  Orientamos nuestras actividades a conocer, cumplir y superar
                  las expectativas de los clientes y brindar el puesto de
                  trabajo a las personas adecuadas, con la finalidad de ofrecer
                  un servicio de calidad, eficiente y eficaz en el reclutamiento
                  de sus trabajdores.
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
                  Somos una empresa que busca conectar a los mejores
                  profesionales del sector de la construcción con las entidades
                  públicas y privadas que requieran a profesionales validados y
                  certificados para la ejecución, supervisión, consultoría y/o
                  licitación de distintos proyectos alrededor del país y el
                  mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-font w-full h-60"></div>
      </div>
    </AnimatedComponent>
  )
}

export default Acerca
