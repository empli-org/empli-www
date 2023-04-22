import { useState } from 'react'
import { PricingEmpresa } from './PricingEmpresa'
import { PricingProfesional } from './PricingProfesional'

export default function PricingPage() {
  const [selected, setSelected] = useState('empresa')

  const handleEmpresaClick = () => {
    setSelected('empresa')
  }

  const handleProfesionalClick = () => {
    setSelected('profesional')
  }

  return (
    <>
      <div className="flex justify-center pt-7">
        <h1 className="text-3xl">Elige tu plan de subscripción</h1>
      </div>
      <div className="m-5 flex justify-center">
        <button
          className={`m-5 rounded-md bg-blue-whale p-3 text-white ${
            selected === 'empresa' ? 'bg-blue-500' : ''
          }`}
          onClick={handleEmpresaClick}
        >
          EMPRESA
        </button>
        <button
          className={`m-5 rounded-md bg-blue-whale p-3 text-white ${
            selected === 'profesional' ? 'bg-blue-500' : ''
          }`}
          onClick={handleProfesionalClick}
        >
          PROFESIONAL
        </button>
      </div>
      {selected === 'empresa' ? <PricingEmpresa /> : <PricingProfesional />}
    </>
  )
}
