import useIntersectionObserver from 'hooks/useObserver'
import empli from 'assets/emplitos-24.svg'
import { InfoCard } from 'components'

export const PageNotFound = () => {
  const AnimatedComponent = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '0px',
    animationDuration: 0.5,
    staggerChildren: 0.1,
    easing: 'easeInOut',
    direction: 'right',
    x: 50,
    fade: true,
  })

  return (
    <AnimatedComponent>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-hint-of-red lg:flex-row lg:space-y-0 2xl:space-x-0">
        <InfoCard
          image={empli}
          imageOnRight={true}
          title={
            <>
              <p className="w-full text-7xl font-bold tracking-wider text-gray-300 transition delay-100 duration-500 ease-out hover:-rotate-180 hover:text-slate-950 md:text-8xl lg:text-9xl">
                404
              </p>
              <p className="mt-2 text-4xl font-bold tracking-wider text-gray-300 md:text-5xl lg:text-6xl">
                Pagina no encontrada
              </p>
              <p className="mt-10 text-lg text-gray-500 md:text-xl lg:text-2xl">
                Lo siento, no pudimos encontrar lo que estabas buscando.
              </p>
            </>
          }
          description={
            <>
              <a
                href="/"
                className="flex items-center space-x-2 rounded border-white bg-gray-900 px-4 py-2 text-gray-100 transition duration-150 hover:border hover:bg-blue-700"
                title="Return Home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Home</span>
              </a>
            </>
          }
        />
      </div>
    </AnimatedComponent>
  )
}
