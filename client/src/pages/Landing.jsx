// @ts-nocheck
import {
  MiniCard,
  CardBox,
  Container,
  CardLarge,
  SlideCompanies,
  InfoCard,
  TextHero,
  ImageHero,
} from 'components'
import { Link } from 'react-router-dom'
import wavecir from 'assets/Landing/wavecir.svg'
import lupa from 'assets/img/lupa.webp'
import pj from 'assets/img/persona2.png'

export const Landing = () => {
  const data = [
    {
      title: 'Incoingroup',
      name: 'Carlos J. Gonzalez',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 1,
      time: '1 hora',
      logo: 'https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg',
    },
    {
      title: 'Open',
      name: 'Carlos J. Gonzalez',
      subtitle: 'Mendoza, ARG',
      rol: 'Albañil',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg',
    },
    {
      title: 'Historical',
      name: 'Carlos J. Gonzalez',
      subtitle: 'Chaco, ARG',
      rol: 'Ingeniero',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/02/posedepie15-scaled.jpg',
    },
    {
      title: 'Nosy',
      subtitle: 'Santa Cruz, ARG',
      name: 'Carlos J. Gonzalez',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 1,
      time: '1 hora',
      logo: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/02/apoyado6-2-scaled.jpg',
    },
    {
      title: 'Helpfull',
      name: 'Carlos J. Gonzalez',
      subtitle: 'Salta, ARG',
      rol: 'Obrero',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://imagenesparaperfildewasap.com/wp-content/uploads/imagenes-de-hombres-para-descargar.jpg',
    },
    {
      title: 'Immediate',
      subtitle: 'Catamarca, ARG',
      rol: 'Arquitecto',
      name: 'Carlos J. Gonzalez',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://imagenesparaperfildewasap.com/wp-content/uploads/imagenes-de-hombres-serios.jpg',
    },
    {
      title: 'American',
      subtitle: 'La Pampa, ARG',
      rol: 'Arquitecto',
      name: 'Carlos J. Gonzalez',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://imagenesparaperfildewasap.com/wp-content/uploads/imagenes-de-hombres-sexys.jpg',
    },
    {
      title: 'Bitter',
      subtitle: 'Cordoba, ARG',
      rol: 'Arquitecto',
      name: 'Carlos J. Gonzalez',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/02/sentado10-scaled.jpg',
    },
  ]

  return (
    <Container>
      {/* -- HERO -- */}

      <div className="flex">
        <TextHero />
        <ImageHero />
      </div>
      {/* COUNTER BAR*/}
      <CardLarge />
      {/* SLIDE COMPANIES */}
      <div className="mt-10 h-auto w-full shadow-sm ">
        <SlideCompanies />
      </div>

      <InfoCard
        image={pj}
        title="¿Buscas una forma fácil de encontrar trabajo en tu campo?"
        description="Nuestra plataforma de trabajo conecta a profesionales como tú con
              una amplia variedad de oportunidades laborales. Simplemente crea
              tu perfil, comparte tus habilidades y experiencia, y comienza a
              postularte a los trabajos que más te interesen. Recibe alertas de
              trabajos relevantes y solicitudes de trabajo y compara las ofertas
              de trabajo en un solo lugar."
      />
      <InfoCard
        image={lupa}
        title="¿Buscas a los mejores profesionales para tus proyectos y
                trabajos?"
        description="Nuestra plataforma de trabajo te permite publicar ofertas de
                trabajo de manera fácil y conveniente, lo que te permite llegar
                a una amplia audiencia de candidatos calificados. Utiliza
                nuestras herramientas para evaluar y comparar a los candidatos y
                encontrar al mejor talento para tus necesidades empresariales.
                Con nuestra plataforma, encontrar el talento adecuado nunca ha
                sido más fácil."
        imageOnRight={true}
        background="gray"
      />
      <img
        src={wavecir}
        alt="wavecir"
        className="absolute ml-28 mt-9 h-40 w-60 animate-pulse duration-500"
      />
      <div className="z-0 flex w-full justify-center">
        <CardBox data={data} />
      </div>
      <div className="p2 m-6 flex h-auto w-11/12 flex-wrap justify-center rounded-s-2xl shadow-lg">
        {data.map(
          (
            { logo, title, subtitle, time, amount, rol, description },
            index,
          ) => {
            return (
              <div key={index} className="inline-block">
                <MiniCard
                  key={index}
                  logo={logo}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  time={time}
                  amount={amount}
                  rol={rol}
                />
              </div>
            )
          },
        )}
        <div className="flex w-full justify-center">
          <Link to="/talents" className="h-15 w-28">
            <p className="mt-5 w-auto text-center font-quicksand-light text-xl font-bold text-blue-whale">
              Ver más
            </p>
          </Link>
        </div>
      </div>
    </Container>
  )
}
