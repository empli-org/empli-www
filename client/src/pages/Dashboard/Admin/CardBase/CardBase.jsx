import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react'
import React from 'react'

const CardBase = () => {
  return (
    <div>
      <Card className="max-w-sm">
        <Text>Ofertas Empleo</Text>
        <Metric>300</Metric>
        <Flex className="mt-4">
          <Text>disponibles: 250</Text>
          <Text>No disponibles: 50</Text>
        </Flex>
        <ProgressBar percentageValue={50} className="mt-2" />
      </Card>
    </div>
  )
}

export default CardBase
