import React, { useContext } from 'react'
import { AppContext } from '../OnboardingContext'
import { ButtonContainerLg } from '../ButtonContainerLg'

export const Step4 = () => {
  const {
    selectedPlan,
    billing,
    selectedAddOns,
    CalcTotalAmount,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext)
  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      <h4 className="text-xl font-bold">Terminando</h4>
      <p className="mt-2 text-slate-600">
        Verifica que todo sea correcto antes de continuar.
      </p>
      <div className="mt-4">
        <div className="border-neutral-Light_gray flex items-center justify-between border-b">
          <div className="flex flex-col">
            <h3>
              {selectedPlan.name} ({billing === 'monthly' ? 'Mensual' : 'Anual'}
              )
            </h3>
            <button
              onClick={() => {
                setActiveStep(2)
                setDirection(-1)
              }}
              className="rounded-md bg-slate-200 px-0 underline"
            >
              Cambiar
            </button>
          </div>
          <span className="text-primary-Marine_blue text-sm font-bold">
            $
            {billing === 'monthly'
              ? `${selectedPlan.monthlyPrice}/mon`
              : `${selectedPlan.yearlyPrice}/yr`}
          </span>
        </div>

        <div>
          {selectedAddOns?.map((ao, index) => (
            <div key={index} className="my-2 flex items-center justify-between">
              <span className="text-neutral-Cool_gray text-sm">{ao.title}</span>
              <span className="text-primary-Marine_blue text-sm">
                +$
                {billing === 'monthly'
                  ? `${ao.monthlyPrice}/mon`
                  : `${ao.yearlyPrice}/yr`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between py-4">
        <span className="text-neutral-Cool_gray text-sm">
          Total (por {billing === 'monthly' ? 'mes' : 'año'})
        </span>
        <span className="text-primary-Purplish_blue font-bold">
          +$
          {CalcTotalAmount()}
          {billing === 'monthly' ? `/mon` : `/yr`}
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
