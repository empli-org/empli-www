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
    <div className="w-screen">
      <div className="flex h-all bg-oficina bg-cover">
        <h1
          className="flex w-full items-center justify-center font-amenable text-6xl font-bold text-hint-of-red"
          data-aos="fade-up"
        >
          Descubre nuevas oportunidades laborales
        </h1>
      </div>
      <div className="flex w-full items-center justify-evenly bg-hint-of-red">
        <div className="my-32 flex w-1/3 flex-col" data-aos="fade-right">
          <h1 className="text-center font-amenable text-3xl font-bold text-blue-whale">
            ¿Te gustaría encontrar nuevas oportunidades laborales en la
            construcción?
          </h1>
          <div className="my-6 w-56 rounded-2xl border-t-4 border-bg-green"></div>
          <br />
          <p className="font-quicksand-light text-2xl font-semibold text-blue-whale">
            Si es así, ¡estás en el lugar correcto! Únete a nuestra comunidad de
            talentos y descubre nuevas oportunidades de trabajo, mejora tus
            habilidades laborales y amplía tu red de contactos en el sector de
            la construcción.
          </p>
        </div>
        <img src={pj} alt="logo" className="h-80 w-all" data-aos="fade-right" />
      </div>
      <div className="flex w-full items-center justify-evenly bg-hint-of-red">
        <img
          src={profile}
          alt="profile"
          className="h-76 w-76"
          data-aos="fade-right"
        />
        <div
          className="my-28 w-1/2 border-8 border-double border-gulf-stream p-20 shadow-2xl shadow-gulf-stream"
          data-aos="zoom-in"
        >
          <p className="font-quicksand-light text-3xl font-semibold text-blue-whale">
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
        <div className="my-28 flex w-1/2 flex-col items-center justify-evenly">
          <h1
            className="text-center font-amenable text-5xl font-bold text-blue-whale"
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
            className="font-quicksand-light text-2xl font-semibold text-blue-whale"
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
            <div className="mt-10 rounded-lg bg-gulf-stream px-6 py-4 font-amenable text-xl text-white hover:scale-110 hover:bg-lochinvar">
              Acceso premium
            </div>
          </Link>
        </div>
        <img src={job} alt="job" className="h-60 w-60" data-aos="fade-left" />
      </div>
      <div className="flex w-full items-center justify-evenly bg-blue-whale">
        <div className="my-28 flex w-2/5 flex-col items-center justify-evenly">
          <h1
            className="text-center font-amenable text-5xl font-bold text-hint-of-red"
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
            className="font-quicksand-light text-2xl font-semibold text-hint-of-red"
            data-aos="fade-down"
          >
            Únete a nuestra comunidad de talentos hoy y comienza a explorar
            nuevas oportunidades laborales en el sector de la construcción. ¡Te
            esperamos en nuestra plataforma!
          </p>
          <br />
          <Link to="/auth/register">
            <div className="border-4 border-gulf-stream px-6 py-2 font-amenable text-2xl font-semibold text-hint-of-red hover:bg-gulf-stream">
              Unirse
            </div>
          </Link>
        </div>
        <img src={pj2} alt="logo" data-aos="fade-left" />
      </div>
    </div>
  )
}
