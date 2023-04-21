import React, { useContext } from 'react'
import { AppContext } from '../OnboardingContext'
import { ButtonContainerLg } from '../ButtonContainerLg'
import { preferencesData } from '@/constants/preferencesData'

export const Step3 = () => {
  const {
    selectedPreferences,
    setSelectedPreferences,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext)

  const handleCheck = (event, selectedCheckbox) => {
    var updatedList = [...selectedPreferences]
    if (event.target.checked) {
      updatedList = [...selectedPreferences, selectedCheckbox]
    } else {
      updatedList.splice(selectedPreferences.indexOf(selectedCheckbox), 1)
    }
    setSelectedPreferences(updatedList)
  }

  const isChecked = item => selectedPreferences.includes(item)

  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      <h1 className="text-xl font-bold">Preferencias</h1>
      <p className="mt-2 text-slate-600">
        Selecciona algunas de tus preferencias para una mejor experiencia.
      </p>

      <div className="mt-4">
        {preferencesData.map((p, index) => (
          <div
            key={index}
            className={`${
              isChecked(p) ? 'active-checkbox' : 'not-checked-item'
            }  mb-4 flex cursor-pointer items-center gap-8 rounded p-2 hover:ring-2 hover:ring-gulf-stream/50`}
          >
            <input
              type="checkbox"
              // @ts-ignore
              value={p}
              className="h-4 w-4 cursor-pointer rounded-sm bg-white accent-blue-whale shadow"
              onChange={event => handleCheck(event, p)}
              checked={isChecked(p)}
            />

            <div>
              <h3 className="font-medium">{p.name}</h3>
              <span className="text-sm font-normal text-slate-600">
                {p.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ButtonContainerLg
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </div>
  )
}
