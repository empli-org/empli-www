import React, { useContext } from 'react'
import { AppContext } from '../OnBoarding/AppContext'
import { ButtonContainerLg } from '../ButtonContainerLg'

export const Step3 = () => {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    accountType,
    companyInfo,
    setCompanyInfo,
    professionalInfo,
    setProfessionalInfo,
  } = useContext(AppContext)

  const isValid =
    accountType.name === 'Professional'
      ? professionalInfo?.career?.length > 3
      : companyInfo?.name?.length > 3
  const inputCls =
    'rounded-md border border-slate-200 p-3 outline-none focus:ring-2 ring-gulf-stream/50'
  const lblCls = 'text-sm text-slate-500 font-medium'

  const handleChange = e => {
    if (accountType.name === 'Professional') {
      setProfessionalInfo({
        ...professionalInfo,
        [e.target.name]: e.target.value,
      })
    } else {
      setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value })
    }
  }

  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      {accountType.name === 'Professional' ? (
        <>
          <h1 className="text-xl font-bold">Información professional</h1>
          <p className="mt-2 text-slate-600">
            Necesitamos algunos datos sobre tu carrera profesional.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold">Configuración inicial</h1>
          <p className="mt-2 text-slate-600">
            Necesitamos algunos datos básicos sobre tu empresa.
          </p>
        </>
      )}

      {accountType.name === 'Professional' ? (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col">
            <label className={lblCls} htmlFor="career">
              Carrera(*)
            </label>
            <input
              className={inputCls}
              type="text"
              placeholder="Carrera profesional..."
              id="career"
              name="career"
              defaultValue={professionalInfo?.career}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className={lblCls} htmlFor="bio">
              Biografia resumida
            </label>
            <textarea
              className={inputCls}
              placeholder="Bio..."
              id="bio"
              name="bio"
              defaultValue={professionalInfo?.bio}
              onChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col">
            <label className={lblCls} htmlFor="name">
              Nombre de empresa(*)
            </label>
            <input
              className={inputCls}
              type="text"
              placeholder="Nombre..."
              id="name"
              name="name"
              defaultValue={companyInfo?.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className={lblCls} htmlFor="description">
              Descripción
            </label>
            <textarea
              className={inputCls}
              placeholder="Nombre..."
              id="description"
              name="description"
              defaultValue={companyInfo?.description}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      <ButtonContainerLg
        disabled={!isValid}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </div>
  )
}
