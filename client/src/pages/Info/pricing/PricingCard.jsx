// @ts-nocheck
import { Button } from '@/components'
import bgPricing from 'assets/blob/bgPr.jpg'

export const PricingCard = ({
  title,
  popular,
  free = true,
  price = 0,
  link,
  feat,
}) => {
  return (
    <>
      <div className="md:w-86 relative mx-5 flex w-96 flex-col rounded-2xl bg-white p-2 hover:shadow-2xl hover:transition-shadow">
        <div className="relative mb-2">
          {popular == 'estandar' && (
            <p className="absolute -top-3 rounded-full bg-green-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md">
              Recomendado
            </p>
          )}
          <h1 className="absolute left-5 top-10 font-quicksand text-3xl font-bold text-white">
            Plan
          </h1>
          <h1 className="absolute left-5 top-20 font-quicksand text-3xl font-bold text-white lg:text-5xl">
            {title}
          </h1>
          <img
            src={bgPricing}
            alt=""
            className="h-40 w-full rounded-2xl object-cover lg:h-52"
          />
        </div>
        <div className={`item-center relative flex flex-col rounded-2xl`}>
          <div className="-mx-6 mt-4 flex justify-center  p-6">
            <p className="flex items-center font-quicksand text-2xl font-bold text-slate-500">
              S/.
              <span className="mx-2 font-quicksand text-xl text-slate-900 lg:text-2xl">
                {price}
              </span>
              mes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ul className="mt-6 flex-1 space-y-4">
              {feat &&
                feat.map((feature, index) => {
                  return (
                    <li key={index} className=" text-sm text-slate-700">
                      <div className="flex items-center justify-center">
                        {/* <AiOutlineCheckCircle className="w-4 h-4" /> */}
                        <p className="mx-3 text-center">{feature}</p>
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
          <Button
            disabled={free}
            title="Upgrade"
            color={`${
              free ? 'gray ' : popular == 'estandar' ? 'white' : 'green'
            } `}
            extend={`${
              free
                ? 'bg-gray-200 border-gray-200 '
                : popular == 'estandar'
                ? 'bg-green-500 hover:bg-green-600 border-green-500 '
                : 'hover:bg-green-600 hover:text-white border-green-500'
            } rounded-b-2xl rounded-t-lg w-full h-10 hover:transition mt-6`}
            link={link}
          />
        </div>
      </div>
    </>
  )
}
