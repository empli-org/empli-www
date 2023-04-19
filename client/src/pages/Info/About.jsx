import React from 'react'
import obs from '@/assets/obs.svg'
import obs2 from '@/assets/obs2.svg'
import one from '@/assets/numbers/1.svg'
import two from '@/assets/numbers/2.svg'
import three from '@/assets/numbers/3.svg'
import four from '@/assets/numbers/4.svg'
import five from '@/assets/numbers/5.svg'
import dot from '@/assets/dot.svg'

export const About = () => {
  return (
    <div className="w-screen">
      <div className="bg-white-font">
        <div className="h-50 flex w-auto items-center justify-center bg-contact-img bg-cover p-2">
          <h1 className="font-amenable text-6xl font-bold text-blue-font">
            Nosotros
          </h1>
        </div>
        <div className="mt-24 flex w-full pl-56">
          <div className="m-7 flex w-1/2 items-center">
            <div className="flex flex-col">
              <h1 className="text-center font-amenable text-4xl text-blue-font">
                ¿Quiénes somos?
              </h1>
              <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
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
        <div className="mt-44 flex w-full">
          <div className="ml-left flex w-1/2 items-center">
            <img src={obs2} alt="obs2" />
            <div className="m-5">
              <h1 className="text-center font-amenable text-4xl text-blue-font">
                ¿Qué buscamos?
              </h1>
              <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
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
      <div className="flex h-auto w-full bg-blue-font">
        <div className="flex w-full pl-100">
          <div className="flex flex-col p-5">
            <h1 className="text-center font-amenable text-5xl text-white-font">
              ¿Qué ofrecemos?
            </h1>
            <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
            <div className="flex flex-col gap-4">
              <div>
                <img src={one} alt="one" className="inline h-12 w-12" />
                <p className="inline p-3 font-quicksand-light text-2xl text-white-font">
                  Profesionales con experiencia verificada al 100%
                </p>
              </div>
              <div>
                <img src={two} alt="two" className="inline h-12 w-12" />
                <p className="inline p-3 font-quicksand-light text-2xl text-white-font">
                  Expertos en la atracción de talentos
                </p>
              </div>
              <div>
                <img src={three} alt="three" className="inline h-12 w-12" />
                <p className="inline p-3 font-quicksand-light text-2xl text-white-font">
                  Extensa cartera de profesionales
                </p>
              </div>
              <div>
                <img src={four} alt="four" className="inline h-12 w-12" />
                <p className="inline p-3 font-quicksand-light text-2xl text-white-font">
                  Brindamos profesionales competentes
                </p>
              </div>
              <div>
                <img src={five} alt="five" className="inline h-12 w-12" />
                <p className="inline p-3 font-quicksand-light text-2xl text-white-font">
                  Procesos culminados en tiempo record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full bg-white-font">
        <div className="flex w-9/12 flex-col items-end p-5">
          <h1 className="font-amenable text-5xl text-blue-font">
            Nuestros valores:
          </h1>
          <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
          <div className="flex flex-col justify-center">
            <div>
              <img src={dot} alt="one" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Pasión
              </p>
            </div>
            <div>
              <img src={dot} alt="two" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Compromiso
              </p>
            </div>
            <div>
              <img src={dot} alt="three" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Honestidad
              </p>
            </div>
            <div>
              <img src={dot} alt="four" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Confidencialidad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Lealtad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-3xl font-bold text-blue-font">
                Transparencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
