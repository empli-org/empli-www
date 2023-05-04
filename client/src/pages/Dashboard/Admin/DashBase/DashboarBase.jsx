// @ts-nocheck
import { TabList, Tab, Title } from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from '../CardGrip/CardGridMap'
import ChartDonut from '../ChartDonut/ChartDonut'
import TableBase from '../TableBase/TableBase'
import TableEmpresa from '../TableEmpresa/TableEmpresa'

const tabs = [
  { value: 1, label: 'Principal' },
  { value: 2, label: 'Profesionales' },
  { value: 3, label: 'Empresas' },
]

const DashboarBase = () => {
  const [selectedView, setSelectedView] = useState(1)
  return (
    <main className="bg-slate-100 p-6">
      <Title>Panel </Title>

      <TabList
        value={selectedView}
        onValueChange={setSelectedView}
        defaultValue={selectedView}
        className="mt-6"
      >
        {tabs.map((item, idx) => (
          <Tab value={item.value} text={item.label} key={idx} />
        ))}
      </TabList>
      {selectedView === 1 ? (
        <>
          <CardGridMap />
          <div className="mt-6">
            <ChartDonut />
          </div>
        </>
      ) : selectedView === 2 ? (
        <>
          <div className="mt-6">
            <TableBase />
          </div>
        </>
      ) : selectedView === 3 ? (
        <>
          <div className="mt-6">
            <TableEmpresa />
          </div>
        </>
      ) : null}
    </main>
  )
}

export default DashboarBase
