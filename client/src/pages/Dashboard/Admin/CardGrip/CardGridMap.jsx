import {
  BadgeDelta,
  Card,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Text,
} from '@tremor/react'

import React from 'react'

const data = [
  {
    title: 'Talentos activos',
    metric: '28',
    progress: '90',
    target: '30',
    delta: '90.5%',
    deltatype: 'moderateIncrease',
  },
  {
    title: 'Empresas activas',
    metric: '27',
    progress: '89',
    target: '32',
    delta: '89.9%',
    deltatype: 'increase',
  },
  {
    title: 'Talentos Pausados',
    metric: '0',
    progress: '0',
    target: '10',
    delta: '0%',
    deltatype: 'increase',
  },
  {
    title: 'Empresas Pausadas',
    metric: '0',
    progress: '0',
    target: '10',
    delta: '0%',
    deltatype: 'increase',
  },
]
const CardGridMap = () => {
  return (
    <Grid numColsMd={2} numColsLg={3} className=" mt-6 gap-x-6 gap-y-6">
      {data.map(item => (
        <Card
          className="transform border border-blue-500 shadow-md transition duration-500 hover:scale-105"
          key={item.title}
        >
          <Flex className="items-start">
            <div>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            </div>
            <BadgeDelta>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text>{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar
            className="mt-3"
            // @ts-ignore
            percentageValue={item.progress}
          >
            {item.progress}
          </ProgressBar>
        </Card>
      ))}
    </Grid>
  )
}

export default CardGridMap
