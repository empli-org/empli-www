import DashCards from '../MinCards/DashCards_v2'

export const CompanyDash = () => {
  return (
    <div className="flex items-center gap-4 p-4">
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
