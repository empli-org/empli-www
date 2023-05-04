import { useState } from 'react'
import { PricingCard, PricingCompany } from 'pages'
import { PricinTalent } from './PricingEmpresa'
import { data } from './data'
import { CheckOut } from '@/components/MercadoPago/CheckOut'
import { useGetPlanQuery } from '@/redux/features/api/plan/planApi'
import { Button } from '@/components'

export default function PricingPage() {
  const { data: plansData = [], isLoading, isSuccess } = useGetPlanQuery()
  const { company, talent } = data
  const [selected, setSelected] = useState('empresa')

  const handleEmpresaClick = () => {
    setSelected('empresa')
  }

  const handleProfesionalClick = () => {
    setSelected('profesional')
  }

  return (
    <>
      <CheckOut />
      <div className="flex justify-center pt-7">
        <h1 className="text-3xl font-quicksand font-bold uppercase">
          Elige tu plan de subscripción
        </h1>
      </div>
      <div className="m-5 flex justify-center">
        <Button
          title="empresas"
          color=""
          extend={`m-5 p-3 border-blue-whale hover:bg-blue-whale hover:text-white ${
            selected === 'empresa' ? ' bg-blue-whale text-white ' : ''
          }`}
          onClick={handleEmpresaClick}
        />

        <Button
          title="profesional"
          color=""
          extend={`m-5 p-3 border-blue-whale hover:bg-blue-whale hover:text-white ${
            selected === 'profesional' ? ' bg-blue-whale text-white ' : ''
          }`}
          onClick={handleProfesionalClick}
        />
      </div>
      <div className="mx-auto">
        {selected === 'empresa' ? <PricingCompany /> : <PricinTalent />}
      </div>
    </>
  )
}
