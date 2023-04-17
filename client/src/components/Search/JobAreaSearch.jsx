import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'
import { useGetJobAreasQuery } from '@/redux/features/api/base'

export default function JobAreaSearch({ onSelect }) {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useGetJobAreasQuery(query)

  return (
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
