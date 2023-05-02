// @ts-nocheck
import React, { useEffect } from 'react'
import obs from '@/assets/Contact/obs.svg'
import obs2 from '@/assets/Contact/obs2.svg'
import one from '@/assets/numbers/1.svg'
import two from '@/assets/numbers/2.svg'
import three from '@/assets/numbers/3.svg'
import four from '@/assets/numbers/4.svg'
import five from '@/assets/numbers/5.svg'
import dot from '@/assets/dot.svg'
import pj from '@/assets/img/persona.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="h-auto w-screen">
      <div className="bg-white-font">
        <div className="h-50 flex w-auto items-center justify-center bg-contact-img bg-cover p-2">
          <h1 className="font-amenable text-6xl font-bold text-blue-font">
            Nosotros
          </h1>
        </div>
        <div
          className="mt-10 flex w-full justify-center sm:mt-16 md:mt-24 xl:justify-start xl:pl-56"
          data-aos="fade-right"
        >
          <div className="m-7 flex w-full items-center lg:w-4/5 xl:w-3/5">
            <div className="flex flex-col">
              <h1 className="text-center font-amenable text-xl text-blue-font xs:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                ¿Quiénes somos?
              </h1>
              <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
              <p className="font-quicksand-light font-medium md:text-sm lg:text-base 2xl:text-lg">
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
            <img
              src={obs}
              alt="obs"
              className="ml-5 hidden md:inline-block md:w-56 lg:w-72 xl:w-80"
            />
          </div>
        </div>
        <div
          className="flex w-full justify-center xs:mt-20 md:pb-14 lg:mt-32 xl:mt-44 xl:w-11/12 xl:justify-end"
          data-aos="fade-left"
        >
          <div className="m-5 flex w-full items-center lg:w-3/4 xl:w-2/3">
            <img
              src={obs2}
              alt="obs2"
              className="hidden md:inline-block md:w-64 lg:w-80 xl:w-100"
            />
            <div className="md:ml-3">
              <h1 className="text-center font-amenable text-xl text-blue-font xs:text-2xl lg:text-2xl xl:text-4xl">
                ¿Qué buscamos?
              </h1>
              <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
              <p className="font-quicksand-light font-medium xl:text-lg">
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
      <div className="flex h-auto w-full bg-blue-font" data-aos="fade-down">
        <div className="flex w-full justify-center 2xl:justify-normal 2xl:pl-100">
          <div className="flex flex-col p-5">
            <h1 className="text-center font-amenable text-xl text-white-font sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              ¿Qué ofrecemos?
            </h1>
            <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
            <div className="flex flex-col gap-4">
              <div>
                <img
                  src={one}
                  alt="one"
                  className="inline h-6 xs:h-7 sm:h-9 md:h-10 lg:h-12"
                />
                <p className="inline p-3 font-quicksand-light text-sm text-white-font md:text-xl xl:text-2xl">
                  Profesionales con experiencia verificada al 100%
                </p>
              </div>
              <div>
                <img
                  src={two}
                  alt="two"
                  className="inline h-6 xs:h-7 sm:h-9 md:h-10 lg:h-12"
                />
                <p className="inline p-3 font-quicksand-light text-sm text-white-font md:text-xl xl:text-2xl">
                  Expertos en la atracción de talentos
                </p>
              </div>
              <div>
                <img
                  src={three}
                  alt="three"
                  className="inline h-6 xs:h-7 sm:h-9 md:h-10 lg:h-12"
                />
                <p className="inline p-3 font-quicksand-light text-sm text-white-font md:text-xl xl:text-2xl">
                  Extensa cartera de profesionales
                </p>
              </div>
              <div>
                <img
                  src={four}
                  alt="four"
                  className="inline h-6 xs:h-7 sm:h-9 md:h-10 lg:h-12"
                />
                <p className="inline p-3 font-quicksand-light text-sm text-white-font md:text-xl xl:text-2xl">
                  Brindamos profesionales competentes
                </p>
              </div>
              <div>
                <img
                  src={five}
                  alt="five"
                  className="inline h-6 xs:h-7 sm:h-9 md:h-10 lg:h-12"
                />
                <p className="inline p-3 font-quicksand-light text-sm text-white-font md:text-xl xl:text-2xl">
                  Procesos culminados en tiempo record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full bg-white-font" data-aos="zoom-in">
        <div className="flex w-full flex-col items-center p-5 2xl:w-9/12 2xl:items-end">
          <h1 className="font-amenable text-2xl text-blue-font md:text-3xl lg:text-5xl">
            Nuestros valores:
          </h1>
          <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
          <div className="flex flex-col justify-center">
            <div>
              <img src={dot} alt="one" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Pasión
              </p>
            </div>
            <div>
              <img src={dot} alt="two" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Compromiso
              </p>
            </div>
            <div>
              <img src={dot} alt="three" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Honestidad
              </p>
            </div>
            <div>
              <img src={dot} alt="four" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Confidencialidad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Lealtad
              </p>
            </div>
            <div>
              <img src={dot} alt="five" className="inline h-12 w-12" />
              <p className="inline p-3 font-quicksand-light text-xl font-bold text-blue-font md:text-2xl lg:text-3xl">
                Transparencia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex h-circle w-full items-center justify-center bg-blue-whale"
        data-aos="zoom-in"
      >
        <img
          src={pj}
          alt="logo"
          className="mr-9 hidden sm:inline-block sm:h-52 md:h-64 lg:h-80 xl:h-100"
        />
        <div className="flex w-4/5 flex-col justify-center sm:w-2/5">
          <h1 className="font-amenable text-xl text-hint-of-red xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            ¿Listo para que trabajemos juntos?
          </h1>
          <div className="my-6 w-24 rounded-2xl border-t-4 border-bg-green xs:w-36 sm:w-32 md:w-56"></div>
          <br className="hidden lg:inline-block" />
          <p className="font-quicksand-light font-medium text-hint-of-red md:text-lg lg:text-xl xl:text-2xl">
            Con nuestra plataforma de trabajo, conectamos a profesionales y
            empresas para encontrar el talento adecuado y las oportunidades
            laborales perfectas. <br /> Crea tu perfil y comienza a postularte o
            publicar ofertas de trabajo hoy mismo.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 py-6 text-base xs:text-sm">
            <Link
              to="/auth/register"
              className="rounded-lg bg-gulf-stream px-6 py-4 font-amenable text-hint-of-red"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
