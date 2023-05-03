import { Card, DonutChart, Title } from '@tremor/react'
import React from 'react'

const cities = [
  {
    name: 'Talentos activos',
    sales: 28,
  },
  {
    name: 'Empresas activas',
    sales: 27,
  },
  {
    name: 'Talentos Pausados',
    sales: 0,
  },
  {
    name: 'Compañias pausadas',
    sales: 0,
  },
  {
    name: ' Cantidad Postulaciones',
    sales: 0,
  },
  {
    name: 'Talentos premium',
    sales: 0,
  },
  {
    name: 'Compañias premium',
    sales: 0,
  },
]

const ChartDonut = () => {
  return (
    <Card>
      <Title>Estadísticas</Title>
      <DonutChart
        data={cities}
        category="sales"
        index="name"
        colors={['blue', 'violet', 'slate', 'indigo', 'rose', 'cyan', 'amber']}
        className="mt-6"
      />
    </Card>
  )
}

export default ChartDonut
