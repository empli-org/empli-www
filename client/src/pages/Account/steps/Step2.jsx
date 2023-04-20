import { Fragment, useContext, useState } from 'react'
import { Switch, RadioGroup } from '@headlessui/react'
import { ButtonContainerLg } from '../ButtonContainerLg'
import { AppContext } from '../OnboardingContext'
import { plansData } from '@/constants/plansData'

export const Step2 = () => {
  const [, setIsShowing] = useState(false)
  const {
    selectedPlan,
    setSelectedPlan,
    billing,
    setBilling,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext)

  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      <h1 className="text-xl font-bold">Selecciona tu plan</h1>
      <p className="mt-2 text-slate-600">
        Tienes una opcion para pagar mensualmente o anualmente.
      </p>
      <div className="mt-4">
        <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
          {plansData.map((p, index) => (
            <RadioGroup.Option key={index} value={p} as={Fragment}>
              {({ active, checked }) => (
                <div
                  className={`mb-4 flex cursor-pointer items-center justify-start rounded border border-hint-of-red p-3 transition hover:ring-2 hover:ring-gulf-stream/50 ${
                    active ? 'bg-white ring-2 ring-gulf-stream' : null
                  } ${checked ? 'bg-white ring-2 ring-gulf-stream' : null}`}
                >
                  {p.icon && p.icon}
                  <div className="ml-4 flex flex-col">
                    <h3>{p.name}</h3>
                    <span className="text-neutral-Cool_gray text-sm font-normal ">
                      $
                      {billing === 'monthly'
                        ? `${p.monthlyPrice}/mon`
                        : `${p.yearlyPrice}/yr`}
                    </span>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      <div className="bg-neutral-Magnolia flex w-full items-center justify-center rounded p-2">
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            billing === 'monthly'
              ? 'text-primary-Marine_blue'
              : 'text-neutral-Cool_gray'
          } `}
        >
          Mensual
        </span>

        <Switch
          checked={billing === 'monthly' ? false : true}
          onChange={() => {
            if (billing === 'monthly') {
              setBilling('yearly')
              setIsShowing(true)
            }
            if (billing === 'yearly') {
              setBilling('monthly')
              setIsShowing(false)
            }
          }}
          className={`relative mx-5 inline-flex h-5 w-9 items-center rounded-full bg-blue-whale`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              billing === 'yearly' ? 'translate-x-5' : 'translate-x-1'
            } inline-block h-3 w-3 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            billing === 'yearly'
              ? 'text-primary-Marine_blue'
              : 'text-neutral-Cool_gray'
          }`}
        >
          Anual
        </span>
      </div>
      <ButtonContainerLg
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </div>
  )
}
