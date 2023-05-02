import { TabList, Tab, Title } from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from '../CardGrip/CardGridMap'
import ChartDonut from '../ChartDonut/ChartDonut'
import TableBase from '../TableBase/TableBase'
import TableEmpresa from '../TableEmpresa/TableEmpresa'

const DashboarBase = () => {
  const [selectedView, setSelectedView] = useState('1')
  return (
    <main className="sm-:p-10 bg-slate-200 p-6">
      <Title>Panel </Title>

      <TabList
        value={selectedView}
        onValueChange={setSelectedView}
        defaultValue={selectedView}
        className="mt-6"
      >
        <Tab value={'1'} text="Principal" />
        <Tab value={'2'} text="Detalles Profesionales" />
        <Tab value={'3'} text="Detalles Empresa" />
      </TabList>
      {selectedView === '1' ? (
        <>
          <CardGridMap />
          <div className="mt-6">
            <ChartDonut />
          </div>
        </>
      ) : selectedView === '2' ? (
        <>
          <div className="mt-6">
            <TableBase />
          </div>
        </>
      ) : selectedView === '3' ? (
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
