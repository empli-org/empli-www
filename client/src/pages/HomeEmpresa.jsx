// @ts-nocheck
/* eslint-disable no-unused-vars */

import lupa from '../assets/img/lupa.webp'
import eLupa from 'assets/Emplitos/eLupa.svg'
import emplito25 from "assets/Emplitos/emplitos-25.svg"
import emplito23 from "assets/Emplitos/emplitos-23.svg"
import emplito21 from "assets/Emplitos/emplitos-21.svg"
import bgServ from 'assets/blob/bgSev.webp'
import bgCom from 'assets/blob/bgCom.png'

// import bgCom from 'assets/blob/bgCom.jpg'

import empresaP from '../assets/img/empre.jpg'

// import { Container } from '../components/ui/Container.jsx'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
  ImageHero,
  TextHero,
  Container,
  InfoCard,
  SectionTitle,
  SectionQuote,
  Button,
} from '@/components'
import { SectionCard } from '@/components/Section/SectionCard'
import { services } from './services'
import { SectionContact } from '@/components/Section/SectionContact'

const HomeEmpresa = () => {
  return (
    <>
      <Container>
        <div
          className="flex rounded-2xl"
          style={{
            background: `url(${bgCom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <TextHero
            title="Lleva a tu empresa a otro nivel"
            description="En EMPLI, ofrecemos soluciones integrales para encontrar, contratar y gestionar talento de calidad. Con experiencia y recursos, 
            brindamos servicios personalizados que impulsan el éxito organizacional. Confíe en nosotros para obtener resultados excepcionales en la gestión del talento humano."
            textBtn="Unete Ahora"
            url="#nosotros"
            contrast={'white'}
          />
          <div></div>
          {/* <ImageHero /> */}
        </div>
        <div className="mb-5 flex flex-col items-center">
          <SectionQuote text="¿Le interesa descubrir por qué los principales empresas de construccion eligen a Empli?" />
          <Button title={'Aprende mas'} link={'/auth/register'} />
        </div>
        <InfoCard
          title="Realice contrataciones con plena confianza"
          tExtend={'text-3xl font- '}
          description="Realizamos un minucioso examen de todo nuestro talento para evitar que usted tenga que hacerlo."
          image={eLupa}
        />
        <InfoCard
          title="Adquiera total transparencia. "
          tExtend={'text-3xl font- '}
          description="Acceda al historial de trabajo, testimonios de clientes, portafolios y otros recursos adicionales."
          image={emplito25}
          imageOnRight={true}
        />
        <InfoCard
          title="Prescinda del intermediario en su totalidad."
          tExtend={'text-3xl font- '}
          description="Supera los límites y logra que tu presupuesto aumente hasta 4 veces más."
          image={emplito23}
        />
        <InfoCard
          title="Garantice entregas rápidas y eficientes."
          tExtend={'text-3xl font- '}
          description="Obtenga una asociación con talento altamente compatible en un plazo de 48 horas."
          image={emplito21}
          imageOnRight={true}
        />
        <div className="mb-5 flex flex-col items-center">
          <SectionQuote text="Explore cómo empresas similares a la suya utilizan Empli para contratar sus equipos.?" />
          <Button title={'Unete ahora'} link={'/auth/register'} />
        </div>

        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Servicios integrales de alta calidad para tu empresa."
        />
        <div className="flex mb-20">
          {services.map((service, index) => (
            <SectionCard
              key={index}
              title={service.title}
              feat={service.descrip}
              image={bgServ}
            />
          ))}
        </div>

        {/* <SectionTitle
          title="Equipo EMPLI"
          subtitle="Servicios integrales de alta calidad para tu empresa."
          imageOnRight={true}
        /> */}
        {/* <div
          className="p-10 h-100"
          style={{ background: `url(${bgTeam})`, backgroundSize: 'cover' }}
        >
          <div className="flex mx-auto my-10">
            {teams.map((team, index) => (
              <SectionCard
                key={index}
                feat={team.title}
                image={team.img}
                stx={true}
              />
            ))}
          </div>
        </div> */}

        <div className="">
          <SectionTitle
            title="Informacion de contacto"
            subtitle="No dude en ponerse en contacto con nosotros si tiene alguna pregunta o necesita más información. Estaremos encantados de asistirle."
          />
          <SectionContact />
        </div>
      </Container>
    </>
  )
}

export default HomeEmpresa
