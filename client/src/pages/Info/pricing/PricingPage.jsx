import { useState } from 'react'
import { PricingCompany } from 'pages'
import { PricinTalent } from './PricinTalent'
import { Button } from '@/components'

export default function PricingPage() {
  const [selected, setSelected] = useState('empresa')
  const [color, SetColor] = useState('')

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
