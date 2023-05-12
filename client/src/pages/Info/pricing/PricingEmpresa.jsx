import { useEffect, useState } from 'react'
import { data } from './data'
import { useGetPlanQuery } from '@/redux/features/api/plan/planApi'
import { PricingCard } from './PricingCard'

export const PricingCompany = () => {
  const [stn, setStn] = useState({ amount: 0, link: '' })
  const [prm, setPrm] = useState({ amount: 0, link: '' })
  const {
    data: plansData,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetPlanQuery()
  const { company } = data
  const { free, standard, premium } = company

  useEffect(() => {
    if (isSuccess && plansData != null) {
      plansData.list.filter(
        ({ auto_recurring, external_reference, init_point }) => {
          // console.log(auto_recurring)
          if (external_reference === 'HOZM') {
            // stn.amount = auto_recurring.transaction_amount
            //  stn.link= init_point
            setStn({
              amount: auto_recurring.transaction_amount,
              link: init_point,
            })
          }
          if (external_reference === 'ODYM') {
            setPrm({
              amount: auto_recurring.transaction_amount,
              link: init_point,
            })
          }
        },
      )
    }
  }, [isSuccess, plansData, stn, prm])

  if (isLoading || isFetching)
    return <div className="flex w-full items-center">Loading....</div>

  return (
    <div className="px-auto items-end flex md:justify-center flex-col lg:flex-row  ">
      <PricingCard
        title={free.plan_name}
        popular={free.plan_type}
        feat={free.features}
      />
      <PricingCard
        title={standard.plan_name}
        popular={standard.plan_type}
        free={false}
        link={stn.link}
        price={stn.amount}
        feat={standard.features}
      />
      <PricingCard
        title={premium.plan_name}
        popular={premium.plan_type}
        free={false}
        price={prm.amount}
        link={prm.link}
        feat={premium.features}
      />
    </div>
  )
}
