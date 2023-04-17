import { useState } from 'react'
import { ComboBox } from 'components'
import { useGetJobAreasQuery } from '@/redux/features/api/base'

export const JobAreaSearch = ({ onSelect }) => {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useGetJobAreasQuery(query)

  return (
    // @ts-ignore
    <ComboBox
      label="Área de trabajo"
      placeholder="Área de trabajo..."
      query={query}
      setQuery={setQuery}
      data={data}
      onSelect={onSelect}
      isFetching={isFetching}
      itemTitle="name"
    />
  )
}
