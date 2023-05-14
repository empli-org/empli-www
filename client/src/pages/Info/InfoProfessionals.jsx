// @ts-nocheck
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import pj from '../../assets/img/persona3.png'
import pj2 from '../../assets/img/persona4.png'
import profile from '../../assets/Contact/profile.svg'
import job from '../../assets/Contact/job.svg'
import { Link } from 'react-router-dom'
import autumn from 'assets/blob/autumn.png'
import hand from 'assets/blob/hand.jpg'
import { Button, InfoCard } from '@/components'

export default function InfoProfessionals() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  // credit: tubik.srts
  const Hero = (
    <>
      <div className="flex justify-center mx-auto">
        <div className="flex items-start w-1/3 ">
          <img
            src={autumn}
            alt=""
            className="w-[353px] rounded-r-md h-[430px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center h-600 w-1/3 py-5">
          <h1 className="w-84 font-amenable text-5xl text-center mb-10 ">
            Estás decidido a dar un impulso a tu carrera y buscas oportunidades
            que te brinden resultados positivos.
          </h1>
          <h3 className="font-quicksand text-xl text-center mb-10">
            Sabemos que encontrar un empleo de alta calidad que te apasione y
            tener que lidiar con los aspectos administrativos puede ser
            agotador. Permítenos ser tu apoyo para que puedas dedicarte
            plenamente a lo que amas hacer.
          </h3>
          <Button title="Unete ahora" link="/auth/register" />
        </div>
        <div className="flex items-end justify-end w-1/3">
          <div className="flex justify-center w-[353px]">
            <img src={hand} alt="" className="object-cover rounded-l-md" />
          </div>
        </div>
      </div>
    </>
  )
  return (
    <div className="w-full">
      {Hero}
      <div className="mx-auto">
        <div className="flex h-80 w-full justify-center bg-hint-of-red sm:h-auto sm:items-center sm:justify-evenly">
          <InfoCard
            title="¿Te gustaría encontrar nuevas oportunidades laborales en la
            construcción?"
            description="Si es así, ¡estás en el lugar correcto! Únete a nuestra comunidad de
            talentos y descubre nuevas oportunidades de trabajo, mejora tus
            habilidades laborales y amplía tu red de contactos en el sector de
            la construcción."
            image={pj}
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
              que destaque tus habilidades, experiencia y logros. Podrás buscar
              y postularte a ofertas de trabajo que se ajusten a tus habilidades
              y preferencias laborales. Además, nuestra plataforma te mantendrá
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
              conocimientos laborales, lo que te permitirá destacar en tu
              búsqueda de trabajo.
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
              nuevas oportunidades laborales en el sector de la construcción.
              ¡Te esperamos en nuestra plataforma!
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
    </div>
  )
}
