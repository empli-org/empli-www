import { MiniCard, CardBox, Container } from '@/components'
import { Link } from 'react-router-dom'
export const Landing = () => {
  // Data sirve unicamente para probar que las cards,
  // porque lo que se quiere es que la informacion que utilizan las cards vengan por props

  const data = [
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 1,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 1,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 1,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 2,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
    {
      title: 'Incoingroup',
      subtitle: 'Buenos Aires, ARG',
      rol: 'Arquitecto',
      description: 'obtener la oportunidad de trabajar con una gran empresa',
      amount: 3,
      time: '1 hora',
      logo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/821.jpg',
    },
  ]

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg py-12">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">
            Encuentra{' '}
            <span className="relative inline-block before:absolute  before:inset-x-0 before:-bottom-2 before:block before:h-7 before:scale-x-[110%] before:rounded-lg before:bg-green-400">
              <span className="relative ">La Mejor</span>
            </span>
            <br />
            Oferta de Trabajo
          </h1>
        </div>
        <div className="mt-14">
          <h2 className="mt-5 text-xl">
            Encontrar trabajo puede ser un proceso difícil. En <br></br>nuestra
            red, contamos con una gran cantidad de <br></br>empresas que buscan
            personas talentosas como <br></br>tú para unirse a su equipo.{' '}
          </h2>
          <div className="flex items-center gap-4 py-6">
            <Link
              to="/offers"
              className="rounded-lg bg-slate-800 px-6 py-4 text-white"
            >
              Ver Ofertas
            </Link>
            <Link
              className="rounded-lg bg-slate-800 px-6 py-4 text-white"
              to="/talents"
            >
              Ver Profesionales
            </Link>
          </div>
        </div>
      </div>
      <CardBox data={data} />
      <div className="p2 w-11-12 m-6 flex flex-wrap justify-between rounded-s-2xl shadow-lg">
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
      </div>
    </Container>
  )
}
