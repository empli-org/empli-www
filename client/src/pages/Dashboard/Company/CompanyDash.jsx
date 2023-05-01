import { useAccountContext } from '@/pages/Account/AccountContext'
import DashCards from '../MinCards/DashCards_v2'

export const CompanyDash = () => {
  const { account } = useAccountContext()
  return (
    <div className="flex items-center gap-4 p-4">
      <pre>{JSON.stringify(account, null, 2)}</pre>
      <DashCards
        title="Ofertas publicadas"
        number={25}
        label="En la última semana"
        color="text-gulf-stream"
        subtitle="Postulaciones: 40"
      />
      <DashCards
        title="Contrataciones"
        number={2}
        label="En la última semana"
        color="text-gray-400"
      />
    </div>
  )
}
