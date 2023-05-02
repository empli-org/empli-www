import { useState } from 'react'
import { PricingEmpresa, PricingProfesional } from 'pages'

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
          className={`m-5 rounded-md bg-blue-500 p-3 text-white ${
            selected === 'empresa' ? ' bg-blue-whale ' : ''
          }`}
          onClick={handleEmpresaClick}
        >
          EMPRESA
        </button>
        <button
          className={`m-5 rounded-md bg-blue-500 p-3 text-white ${
            selected === 'profesional' ? 'bg-blue-whale ' : ''
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
