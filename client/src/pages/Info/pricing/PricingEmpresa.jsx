import { data } from './data'
import { PricingCard } from './PricingCard'

export const PricingCompany = ({ stn, prm }) => {
  const { company } = data
  const { free, standard, premium } = company

  return (
    <div className="px-auto flex flex-col items-center md:justify-center lg:flex-row  ">
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

export const PricinTalent = ({ stn, prm }) => {
  const { talent } = data
  const { free, standard, premium } = talent

  return (
    <div className="px-auto flex flex-col items-center md:justify-center lg:flex-row  ">
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
