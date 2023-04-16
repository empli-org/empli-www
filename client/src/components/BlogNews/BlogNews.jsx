import useIntersectionObserver from '../hooks/useObserver'

export const BlogNews = () => {
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
      <div className="flex w-96 flex-shrink py-9 2xl:container sm:w-auto md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-semibold leading-9 text-gray-800 dark:text-gray-50">
            Actualizacion semanal
          </h1>
          <p className="mt-4 w-11/12 text-center text-base leading-normal text-gray-600 dark:text-white md:w-10/12 lg:w-1/2">
            Mantenerte actualizado con las noticias del mercado de la
            construccion y sus competencias, es de vital importancia para todo
            profesional del campo.
          </p>
        </div>
        <div className="mt-8 items-stretch md:mt-12 lg:flex">
          <div className="lg:w-1/2">
            <div className="items-center justify-between gap-x-6 sm:flex xl:gap-x-8">
              <div className="relative sm:w-1/2">
                <div>
                  <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">News</h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Detail
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/foto-gratis/vista-ciudad-nueva-york-ee_53876-160509.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                  className="w-full rounded-md shadow-2xl shadow-black hover:shadow-none"
                  alt="chair"
                />
              </div>
              <div className="relative mt-4 sm:mt-0 sm:w-1/2">
                <div>
                  <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">News</h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Detail
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/foto-gratis/tiro-angulo-escala-grises-curioso-edificio-flatiron-manhattan-ciudad-nueva-york-ee-uu_181624-5173.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                  className="w-full rounded-md shadow-2xl shadow-black hover:shadow-none"
                  alt="wall design"
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h2 className="5 text-xl font-semibold text-white">News</h2>
                  <p className="mt-2 text-base leading-4 text-white">Detail</p>
                  <a
                    href="javascript:void(0)"
                    className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                alt="sitting place"
                className="mt-8 hidden w-full rounded-md shadow-2xl shadow-black hover:shadow-none sm:block md:mt-6"
              />
              <img
                className="mt-4 w-full rounded-md shadow-2xl shadow-black hover:shadow-none sm:hidden"
                src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                alt="sitting place"
              />
            </div>
          </div>
          <div className="mt-4 flex-col justify-between md:mt-6 lg:ml-4 lg:mt-0 lg:flex lg:w-1/2 xl:ml-8">
            <div className="relative">
              <div>
                <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h2 className="5 text-xl font-semibold text-white">News</h2>
                  <p className="mt-2 text-base leading-4 text-white">Detail</p>
                  <a
                    href="javascript:void(0)"
                    className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                alt="sitting place"
                className="hidden w-full rounded-md shadow-2xl shadow-black hover:shadow-none sm:block"
              />
              <img
                className="w-full rounded-md shadow-2xl shadow-black hover:shadow-none sm:hidden"
                src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                alt="sitting place"
              />
            </div>
            <div className="mt-4 items-center justify-between gap-x-6 sm:flex md:mt-6 xl:gap-x-8">
              <div className="relative w-full">
                <div>
                  <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">News</h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Detail
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                  className="w-full rounded-md shadow-2xl shadow-black hover:shadow-none"
                  alt="chair"
                />
              </div>
              <div className="relative mt-4 w-full sm:mt-0">
                <div>
                  <p className="absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">News</h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Detail
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/foto-gratis/cityscape-downtown-development-exterior-building_53876-23447.jpg?size=626&ext=jpg&uid=R95815085&ga=GA1.2.158501698.1681502550&semt=ais"
                  className="w-full rounded-md shadow-2xl shadow-black hover:shadow-none"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  )
}
