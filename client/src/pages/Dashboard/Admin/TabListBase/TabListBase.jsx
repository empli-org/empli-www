import { Card, Tab, TabList } from '@tremor/react'
import React, { useState } from 'react'
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid'

const TabListBase = () => {
  // @ts-ignore
  const [selectedView, setSelectedView] = useState('1')

  return (
    <>
      <TabList
        value={selectedView}
        onValueChange={setSelectedView}
        defaultValue={'1'}
        className="mt-6"
      >
        <Tab value="1" text="Pestaña 1" icon={HandThumbUpIcon} />
        <Tab value="2" text="Pestaña 2" icon={HandThumbDownIcon} />
      </TabList>

      {selectedView === '1' ? (
        <Card>
          <div className="h-28 bg-emerald-300" />
        </Card>
      ) : (
        <Card>
          <div className="h-28 bg-blue-400" />
        </Card>
      )}
    </>
  )
}

export default TabListBase
