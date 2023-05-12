import { useState } from 'react'
import { PricingCompany } from 'pages'
import { PricinTalent } from './PricinTalent'
import { Button } from '@/components'

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
        <h1 className="text-3xl font-quicksand font-bold uppercase">
          Elige tu plan de subscripción
        </h1>
      </div>
      <div className="m-5 flex justify-center">
        <Button
          title="empresas"
          inverted={selected === 'empresa' ? false : true}
          onClick={handleEmpresaClick}
        />

        <Button
          title="profesional"
          inverted={selected === 'empresa' ? true : false}
          onClick={handleProfesionalClick}
        />
      </div>
      <div className="mx-auto">
        {selected === 'empresa' ? <PricingCompany /> : <PricinTalent />}
      </div>
    </>
  )
}
