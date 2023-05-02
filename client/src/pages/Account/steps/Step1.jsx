import { RadioGroup } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ButtonContainerLg } from '../ButtonContainerLg'
import { AppContext } from "../OnBoarding/AppContext"
import { accountTypes } from '@/constants/accountTypes'

export const Step1 = () => {
  const {
    accountType,
    setAccountType,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext)

  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      <h1 className="text-xl font-bold">Como quieres utilizar tu cuenta?</h1>
      <p className="mt-2 text-slate-600">
        Selecciona el tipo de cuenta que necesitas crear.
      </p>
      <div className="mt-4">
        <RadioGroup value={accountType} onChange={setAccountType}>
          {accountTypes.map((p, index) => (
            <RadioGroup.Option key={index} value={p} as={Fragment}>
              {({ active, checked }) => (
                <div
                  className={`mb-4 flex cursor-pointer items-center justify-start rounded border px-3 py-4 transition hover:ring-2 hover:ring-gulf-stream/50 ${
                    active ? 'bg-white ring-2 ring-gulf-stream' : null
                  } ${checked ? 'bg-white ring-2 ring-gulf-stream' : null}`}
                >
                  {p.icon && p.icon}
                  <div className="ml-4 flex flex-col">
                    <h3>
                      {p.name === 'Professional' ? 'Profesional' : 'Empresa'}
                    </h3>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      <ButtonContainerLg
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </div>
  )
}
