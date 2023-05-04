import React from 'react'
import DashCards from '../MinCards/DashCards_v2'
import Protected from '../Protected'

export const ProfessionalDash = () => {
  return (
    <Protected accountType="professional">
      <div className="flex items-center gap-4 p-4">
        <DashCards
          title="Visitas perfil"
          number={25}
          label="En la última semana"
          color="text-gulf-stream"
        />
        <DashCards
          title="Postulaciones"
          number={2}
          label="En la última semana"
          color="text-gray-400"
          subtitle="Respondidas: 0"
        />
      </div>
    </Protected>
  )
}
