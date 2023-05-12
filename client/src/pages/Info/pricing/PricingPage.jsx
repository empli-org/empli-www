import { useEffect, useState } from 'react'
import { PricingCompany } from 'pages'
import { PricinTalent } from './PricingEmpresa'
import { Button } from '@/components'
import { useGetPlanQuery } from '@/redux/features/api/plan/planApi'

export default function PricingPage() {
  const [selected, setSelected] = useState('empresa')
  const [stn, setStn] = useState({ amount: 0, link: '' })
  const [prm, setPrm] = useState({ amount: 0, link: '' })
  const {
    data: plansData,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetPlanQuery()

  const handleEmpresaClick = () => {
    setSelected('empresa')
  }

  const handleProfesionalClick = () => {
    setSelected('profesional')
  }
  useEffect(() => {
    if (!isLoading && isSuccess && plansData != null) {
      plansData.list.forEach(
        ({ auto_recurring, external_reference, init_point }) => {
          // console.log(auto_recurring)
          if (external_reference === 'ORBM') {
            // stn.amount = auto_recurring.transaction_amount
            //  stn.link= init_point
            setStn({
              amount: auto_recurring.transaction_amount,
              link: init_point,
            })
          }
          if (external_reference === 'GXYM') {
            setPrm({
              amount: auto_recurring.transaction_amount,
              link: init_point,
            })
          }
        },
      )
    }
  }, [isLoading, isSuccess, plansData])

  if (isLoading || isFetching)
    return <div className="flex w-full items-center">Loading....</div>

  return (
    <>
      <div className="flex justify-center pt-7">
        <h1 className="font-quicksand text-3xl font-bold uppercase">
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
        {selected === 'empresa' ? (
          <PricingCompany stn={stn} prm={prm} />
        ) : (
          <PricinTalent prm={prm} stn={stn} />
        )}
      </div>
    </>
  )
}
