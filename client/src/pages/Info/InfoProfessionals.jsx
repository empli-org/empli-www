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
import { Button, InfoCard, SectionQuote, SlideCompanies, CardPremium } from '@/components'

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
          <h1 className="font-amenable text-5xl text-center mb-10 ">
            Estás decidido a dar un impulso a tu carrera y buscas oportunidades
            que te brinden resultados positivos.
          </h1>
          <h3 className="font-quicksand text-xl text-center mb-10">
            Sabemos que encontrar un empleo de alta calidad que te apasione.
            Permítenos ser tu apoyo para que puedas dedicarte plenamente a lo
            que amas, nete a nuestra comunidad de talentos y amplía tu red de
            contactos en el sector de la construcción.
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
      <div className="mb-10">
      {Hero}
      </div>

      <div className="mx-auto">
        <SlideCompanies textQuote="Obtenga accesso a una amplia red de empresas que colaboran con EMPLI."/>

        <div className="mx-20">
          <SectionQuote text="Como funciona" textColor="black"/>
          <InfoCard
            title="Registra tu perfil"
            description="Agregue su cartera, conjuntos de habilidades e historial laboral."
            image={pj}
          />
          <InfoCard
            title="Verifica tu perfil"
            description="Completa los filtros de verificacion y obten tu insignia de verificacion."
            image={pj}
            imageOnRight={true}
          />
          <InfoCard
            title="Postula a las ofertas empli"
            description="Solicite su primer empleo, complete la evaluacion y empiece a trabajar."
            image={pj}
          />
          <InfoCard
            title="Impulsa tu carrera"
            description="Consiga empleos en cualquier parte del Peru."
            image={pj}
            imageOnRight={true}
          />
          <SectionQuote text="Asi de facil es ganar con EMPLI" />
          <CardPremium/>
        </div>
      </div>
    </div>
  )
}
