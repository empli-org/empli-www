// @ts-nocheck
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import pj from '../../assets/img/persona3.png'
import pj2 from '../../assets/img/persona4.png'
import profile from '../../assets/Contact/profile.svg'
import job from '../../assets/Contact/job.svg'
import { Link } from 'react-router-dom'

export default function InfoProfessionals() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="w-full">
      <div className="bg-oficina bg-cover flex transition h-40 sm:h-44 md:h-56 lg:h-80 xl:h-all">
        <h1
          className="font-amenable text-lg text-hint-of-red font-bold flex justify-center items-center w-full xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl"
          data-aos="fade-up"
        >
          Descubre nuevas oportunidades laborales
        </h1>
      </div>
      <div className="flex justify-center sm:justify-evenly sm:items-center h-80 sm:h-auto w-full bg-hint-of-red">
        <div
          className="flex flex-col mt-15 sm:my-32 lg:w-1/3 sm:w-2/5 xs:w-full"
          data-aos="fade-right"
        >
          <h1 className="font-amenable text-center font-bold text-blue-whale xl:text-3xl lg:text-2xl md:text-xl text-lg">
            ¿Te gustaría encontrar nuevas oportunidades laborales en la
            construcción?
          </h1>
          <div className="my-6 rounded-2xl border-t-4 border-bg-green xl:w-56 lg:w-40 sm:w-32 w-32 ml-15"></div>
          <br />
          <p className="font-quicksand-light font-semibold text-center text-blue-whale xl:text-2xl lg:text-xl md:text-lg">
            Si es así, ¡estás en el lugar correcto! Únete a nuestra comunidad de
            talentos y descubre nuevas oportunidades de trabajo, mejora tus
            habilidades laborales y amplía tu red de contactos en el sector de
            la construcción.
          </p>
        </div>
        <img
          src={pj}
          alt="logo"
          className="hidden xl:w-all lg:w-96 md:w-72 sm:w-60 sm:inline-block"
          data-aos="fade-right"
        />
      </div>
      <div className="flex justify-center sm:justify-evenly sm:items-center w-full bg-hint-of-red">
        <img
          src={profile}
          alt="profile"
          className="hidden lg:w-60 xl:w-76 xl:h-76 sm:inline-block	sm:w-28 md:w-44"
          data-aos="fade-right"
        />
        <div
          className="w-3/4 sm:w-4/6 lg:w-1/2 mt-28 md:my-28 border-double border-8 border-yellow-border p-7 md:p-10 lg:p-15 xl:p-20 shadow-2xl shadow-yellow-border"
          data-aos="zoom-in"
        >
          <p className="font-quicksand-light text-blue-whale font-semibold xl:text-3xl md:text-xl">
            En nuestra plataforma de trabajo, podrás crear un perfil detallado
            que destaque tus habilidades, experiencia y logros. Podrás buscar y
            postularte a ofertas de trabajo que se ajusten a tus habilidades y
            preferencias laborales. Además, nuestra plataforma te mantendrá
            informado sobre las últimas tendencias y oportunidades del mercado
            laboral en el sector de la construcción.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="w-4/6 lg:w-1/2 my-28 flex flex-col items-center justify-evenly">
          <h1
            className="font-amenable text-center text-blue-whale font-bold lg:text-5xl md:text-4xl text-3xl"
            data-aos="fade-down"
          >
            Éxito laboral
          </h1>
          <div
            className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"
            data-aos="fade-right"
          ></div>
          <br />
          <p
            className="font-quicksand-light font-semibold text-blue-whale xl:text-2xl lg:text-xl md:text-lg"
            data-aos="fade-down"
          >
            Si deseas ampliar aún más tus posibilidades de éxito laboral,
            también ofrecemos una suscripción premium que te brindará acceso a{' '}
            <span className="underline font-bold">contenido exclusivo</span>,
            como podcasts con invitados especiales, webinars y videos
            educativos. Estos recursos te ayudarán a mejorar tus habilidades y
            conocimientos laborales, lo que te permitirá destacar en tu búsqueda
            de trabajo.
          </p>
          <Link to="/pricing">
            <div className="rounded-lg text-lg md:text-xl bg-gulf-stream px-6 py-4 text-white font-amenable mt-10 hover:scale-110 hover:bg-lochinvar">
              Acceso premium
            </div>
          </Link>
        </div>
        <img
          src={job}
          alt="job"
          className="hidden lg:w-60 md:w-40 sm:w-28 sm:inline-block"
          data-aos="fade-left"
        />
      </div>
      <div className="flex justify-evenly items-center w-full bg-blue-whale">
        <div className="w-2/5 my-28 flex flex-col items-center justify-evenly">
          <h1
            className="font-amenable text-center text-hint-of-red font-bold lg:text-5xl sm:text-4xl text-2xl"
            data-aos="flip-down"
          >
            ¡Únete ahora!
          </h1>
          <div
            className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"
            data-aos="flip-right"
          ></div>
          <br />
          <p
            className="font-quicksand-light font-semibold text-hint-of-red lg:text-2xl md:text-xl"
            data-aos="fade-down"
          >
            Únete a nuestra comunidad de talentos hoy y comienza a explorar
            nuevas oportunidades laborales en el sector de la construcción. ¡Te
            esperamos en nuestra plataforma!
          </p>
          <br />
          <Link to="/auth/register">
            <div className="px-6 py-2 text-hint-of-red border-4 border-gulf-stream font-amenable sm:text-xl md:text-2xl font-semibold hover:bg-gulf-stream">
              Unirse
            </div>
          </Link>
        </div>
        <img
          src={pj2}
          alt="logo"
          data-aos="fade-left"
          className="hidden lg:w-all md:w-80 sm:w-64 sm:inline-block"
        />
      </div>
    </div>
  )
}
