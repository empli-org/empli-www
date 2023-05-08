// @ts-nocheck
import { Button } from '@/components'
import bgPricing from 'assets/blob/bgPr.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'

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
      <div className="relative flex mx-5 p-2 flex-col rounded-2xl w-96 bg-white hover:shadow-2xl hover:transition-shadow md:w-86">
        <div className="relative mb-2">
          {popular == 'estandar' && (
            <p className="absolute -top-3 rounded-full bg-green-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md">
              Recomendado
            </p>
          )}
          <h1 className="absolute top-10 left-5 text-white font-quicksand text-3xl font-bold">
            Plan
          </h1>
          <h1 className="absolute top-20 left-5 text-white font-quicksand text-3xl lg:text-5xl font-bold">
            {title}
          </h1>
          <img
            src={bgPricing}
            alt=""
            className="rounded-2xl h-40 w-full object-cover lg:h-52"
          />
        </div>
        <div className={`relative flex flex-col item-center rounded-2xl`}>
          <div className="-mx-6 mt-4 flex justify-center  p-6">
            <p className="flex items-center text-2xl font-quicksand font-bold text-slate-500">
              S/.
              <span className="mx-2 text-xl lg:text-2xl font-quicksand text-slate-900">
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
                      <div className="flex justify-center items-center">
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
            custom={`${
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
