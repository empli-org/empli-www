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
      <div className="flex h-40 bg-oficina bg-cover transition sm:h-44 md:h-56 lg:h-80 xl:h-all">
        <h1
          className="flex w-full items-center justify-center font-amenable text-lg font-bold text-hint-of-red xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          data-aos="fade-up"
        >
          Descubre nuevas oportunidades laborales
        </h1>
      </div>
      <div className="flex h-80 w-full justify-center bg-hint-of-red sm:h-auto sm:items-center sm:justify-evenly">
        <div
          className="mt-15 flex flex-col xs:w-full sm:my-32 sm:w-2/5 lg:w-1/3"
          data-aos="fade-right"
        >
          <h1 className="text-center font-amenable text-lg font-bold text-blue-whale md:text-xl lg:text-2xl xl:text-3xl">
            ¿Te gustaría encontrar nuevas oportunidades laborales en la
            construcción?
          </h1>
          <div className="my-6 ml-15 w-32 rounded-2xl border-t-4 border-bg-green sm:w-32 lg:w-40 xl:w-56"></div>
          <br />
          <p className="text-center font-quicksand-light font-semibold text-blue-whale md:text-lg lg:text-xl xl:text-2xl">
            Si es así, ¡estás en el lugar correcto! Únete a nuestra comunidad de
            talentos y descubre nuevas oportunidades de trabajo, mejora tus
            habilidades laborales y amplía tu red de contactos en el sector de
            la construcción.
          </p>
        </div>
        <img
          src={pj}
          alt="logo"
          className="hidden sm:inline-block sm:w-60 md:w-72 lg:w-96 xl:w-all"
          data-aos="fade-right"
        />
      </div>
      <div className="flex w-full justify-center bg-hint-of-red sm:items-center sm:justify-evenly">
        <img
          src={profile}
          alt="profile"
          className="hidden sm:inline-block sm:w-28 md:w-44 lg:w-60	xl:h-76 xl:w-76"
          data-aos="fade-right"
        />
        <div
          className="mt-28 w-3/4 border-8 border-double border-yellow-border p-7 shadow-2xl shadow-yellow-border sm:w-4/6 md:my-28 md:p-10 lg:w-1/2 lg:p-15 xl:p-20"
          data-aos="zoom-in"
        >
          <p className="font-quicksand-light font-semibold text-blue-whale md:text-xl xl:text-3xl">
            En nuestra plataforma de trabajo, podrás crear un perfil detallado
            que destaque tus habilidades, experiencia y logros. Podrás buscar y
            postularte a ofertas de trabajo que se ajusten a tus habilidades y
            preferencias laborales. Además, nuestra plataforma te mantendrá
            informado sobre las últimas tendencias y oportunidades del mercado
            laboral en el sector de la construcción.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <div className="my-28 flex w-4/6 flex-col items-center justify-evenly lg:w-1/2">
          <h1
            className="text-center font-amenable text-3xl font-bold text-blue-whale md:text-4xl lg:text-5xl"
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
            className="font-quicksand-light font-semibold text-blue-whale md:text-lg lg:text-xl xl:text-2xl"
            data-aos="fade-down"
          >
            Si deseas ampliar aún más tus posibilidades de éxito laboral,
            también ofrecemos una suscripción premium que te brindará acceso a{' '}
            <span className="font-bold underline">contenido exclusivo</span>,
            como podcasts con invitados especiales, webinars y videos
            educativos. Estos recursos te ayudarán a mejorar tus habilidades y
            conocimientos laborales, lo que te permitirá destacar en tu búsqueda
            de trabajo.
          </p>
          <Link to="/pricing">
            <div className="mt-10 rounded-lg bg-gulf-stream px-6 py-4 font-amenable text-lg text-white hover:scale-110 hover:bg-lochinvar md:text-xl">
              Acceso premium
            </div>
          </Link>
        </div>
        <img
          src={job}
          alt="job"
          className="hidden sm:inline-block sm:w-28 md:w-40 lg:w-60"
          data-aos="fade-left"
        />
      </div>
      <div className="flex w-full items-center justify-evenly bg-blue-whale">
        <div className="my-28 flex w-2/5 flex-col items-center justify-evenly">
          <h1
            className="text-center font-amenable text-2xl font-bold text-hint-of-red sm:text-4xl lg:text-5xl"
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
            className="font-quicksand-light font-semibold text-hint-of-red md:text-xl lg:text-2xl"
            data-aos="fade-down"
          >
            Únete a nuestra comunidad de talentos hoy y comienza a explorar
            nuevas oportunidades laborales en el sector de la construcción. ¡Te
            esperamos en nuestra plataforma!
          </p>
          <br />
          <Link to="/auth/register">
            <div className="border-4 border-gulf-stream px-6 py-2 font-amenable font-semibold text-hint-of-red hover:bg-gulf-stream sm:text-xl md:text-2xl">
              Unirse
            </div>
          </Link>
        </div>
        <img
          src={pj2}
          alt="logo"
          data-aos="fade-left"
          className="hidden sm:inline-block sm:w-64 md:w-80 lg:w-all"
        />
      </div>
    </div>
  )
}
