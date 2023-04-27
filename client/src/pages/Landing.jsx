import { TopHeader } from '@/components/Landing/TopHeader'
import ob from '../assets/Landing/ob.svg'
import { CardGlass } from 'components/Cards/CardGlass/CardGlass'
import { CardLarge } from 'components/Cards/CardLarge/CardLarge'
import { SlideCompanies } from 'components/SlideCompanies/SlideCompanies'
import { InfoCard } from '@/pages/InfoCard'
import { CardBox } from 'components/Cards/CardBox/CardBox'
import { Link } from 'react-router-dom'
import { MiniCard } from 'components/Cards/MiniCard/MiniCard'
import { TopLeft } from '@/components/Landing/TopLeft'
import pj from '../assets/img/persona2.png'
import persona from '../assets/img/lupa.webp'

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
    <div>
      <div className="flex flex-col">
        <div className="justify-strech flex w-full bg-white pr-32">
          <div className="relative sm:m-2 sm:w-10/12 sm:rounded-2xl sm:bg-hint-of-red sm:shadow-sm sm:shadow-black md:m-2 md:w-10/12 md:rounded-2xl md:bg-hint-of-red md:shadow-sm md:shadow-black lg:w-6/12">
            <TopHeader />
            <CardGlass />
          </div>
          <div className="w-6/12 xs:hidden sm:hidden md:hidden lg:flex">
            <TopLeft
              image={ob}
              title="Permítenos encontrar el trabajo de tus sueños."
              description={null}
              imageOnRight={true}
            />
          </div>
        </div>
        <div className="flex w-full justify-between bg-hint-of-red p-8 sm:hidden md:flex lg:flex">
          <CardLarge />
        </div>
        <div className="flex justify-center bg-white">
          <SlideCompanies />
        </div>
        <div className="flex w-full justify-between bg-hint-of-red p-4">
          <InfoCard
            image={pj}
            imageOnRight={false}
            title={'¿Buscas una forma fácil de encontrar trabajo en tu campo?'}
            description={
              'Nuestra plataforma de trabajo conecta a profesionales como tú con una amplia variedad de oportunidades laborales. Simplemente crea tu perfil, comparte tus habilidades y experiencia, y comienza a postularte a los trabajos que más te interesen. Recibe alertas de trabajos relevantes y solicitudes de trabajo y compara las ofertas de trabajo en un solo lugar.'
            }
          />
        </div>
        <div className="flex w-full justify-between bg-white p-4">
          <InfoCard
            image={persona}
            imageOnRight={true}
            title={
              '¿Buscas a los mejores profesionales para tus proyectos y trabajos?'
            }
            description={
              'Nuestra plataforma de trabajo te permite publicar ofertas de trabajo de manera fácil y conveniente, lo que te permite llegar a una amplia audiencia de candidatos calificados. Utiliza nuestras herramientas para evaluar y comparar a los candidatos y encontrar al mejor talento para tus necesidades empresariales. Con nuestra plataforma, encontrar el talento adecuado nunca ha sido más fácil.'
            }
          />
        </div>
        <div className="flex w-full justify-center bg-hint-of-red p-4">
          <CardBox data={data} />
        </div>
        <div className="flex w-full justify-center bg-white p-4">
          <div className="flex w-9/12 flex-wrap justify-center">
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
                <p className="mt-5 w-auto text-center text-xl font-bold text-blue-whale">
                  Ver más
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
