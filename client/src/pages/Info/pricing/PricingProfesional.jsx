import { data } from './data'

export const PricingProfesional = () => {
  return (
    <>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-7 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {data.map((data, ind) => {
          return (
            <div
              key={ind}
              className={`relative flex flex-col rounded-lg border-slate-200 bg-white p-8 shadow-xl hover:shadow-xl hover:shadow-blue-100 
              ${data.popular ? 'lg:row-span-3' : ''}`}
            >
              <h3 className="rounded-lg bg-black text-center text-lg font-semibold leading-5 text-white">
                {data.titulo}
              </h3>
              {data.popular && (
                <p className="absolute  -top-3 rounded-full bg-green-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md">
                  Más popular
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-slate-700">
                {data.descripcion}
              </p>
              <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
                <p className="flex items-center text-sm font-semibold text-slate-500">
                  USD
                  <span className="ml-3 text-2xl text-slate-900">
                    {data.precio}
                  </span>
                  /month
                </p>
              </div>
              <ul className="mt-6 flex-1 space-y-4">
                {data.caracteristicas.map(car => {
                  return (
                    <li key={car} className="text-sm text-slate-700">
                      ✔ {car}
                    </li>
                  )
                })}
              </ul>
              <div className="flex justify-center">
                <button
                  className={`mt-6  rounded-lg px-6 py-1.5 text-sm font-semibold leading-4 
                  ${
                    data.popular
                      ? 'bg-green-500 text-white shadow-md hover:bg-green-600'
                      : 'bg-green-50 text-green-700 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {' '}
                  COMPRAR{' '}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
