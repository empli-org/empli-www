import useIntersectionObserver from '../../hooks/useObserver'
import { RxGear } from 'react-icons/rx'

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
      <div className="flex h-screen w-full flex-col items-center justify-center space-x-8 space-y-16 lg:flex-row lg:space-y-0 2xl:space-x-0">
        <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/2 lg:px-2 xl:px-0">
          <p className="text-7xl font-bold tracking-wider text-gray-300 transition duration-100 ease-out hover:-rotate-180 hover:text-slate-950 md:text-8xl lg:text-9xl">
            404
          </p>
          <p className="mt-2 text-4xl font-bold tracking-wider text-gray-300 md:text-5xl lg:text-6xl">
            Pagina no encontrada
          </p>
          <p className="my-12 text-lg text-gray-500 md:text-xl lg:text-2xl">
            Lo siento, no pudimos encontrar lo que estabas buscando.
          </p>
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
            <span>Regresar Home</span>
          </a>
        </div>
        <div className="group relative flex w-1/2 flex-col justify-around bg-sail lg:h-full lg:items-center">
          <div className="mt-2 flex w-full justify-between">
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="p-2 text-9xl" />
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="p-2 text-9xl opacity-40" />
            <RxGear className="p-2 text-6xl opacity-10" />
          </div>
          <div className="mt-2 flex w-full gap-x-8">
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="animate-pulse p-2 text-9xl opacity-40" />
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="p-2 text-9xl opacity-40" />
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
          </div>
          <div className="mt-2 flex w-full justify-between">
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="animate-pulse p-2 text-9xl opacity-40" />
            <RxGear className="p-2 text-6xl opacity-10 group-hover:animate-spin-slow" />
            <RxGear className="p-2 text-9xl" />
            <RxGear className="p-2 text-6xl opacity-10" />
          </div>
          <div className="left-34 group absolute top-64 w-7/12 rounded-2xl bg-white px-4 py-8 shadow-sm shadow-black">
            <p className="z-50 text-center text-7xl font-bold">
              Te estamos buscando
            </p>
          </div>
          <div className="absolute z-0 flex h-full w-2/6 items-end justify-center pb-4">
            <img
              src="/src/assets/empli-logo.svg"
              alt="logo"
              className="w-2/5 "
            />
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}
