import { useState } from 'react'
import ComboBox from '@/components/ui/ComboBox'
import { useGetJobLocationsQuery } from '@/redux/features/api/base'

export default function LocationSearch({ onSelect }) {
  const [query, setQuery] = useState('')
  const { data, isFetching } = useGetJobLocationsQuery(query)

  return (
    <ComboBox
      label="Ubicación"
      placeholder="Ubicación..."
      query={query}
      setQuery={setQuery}
      onSelect={onSelect}
      data={data}
      isFetching={isFetching}
      itemTitle="city"
      itemSubtitle="country"
    />
  )
}
